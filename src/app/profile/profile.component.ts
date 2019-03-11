import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import { MentorService } from '../mentors/mentor.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
	id: number;
	loggedInUser: number;
	profile: any;
	editProfile: any;
	members: Array<any> = [];
	filteredMembers: Array<any> = [];
	isEditing: Boolean = false;
	searchFocused: Boolean = false;
	searchedName: String;
	newJob: any = {};
	chatRoute: string;
	skill: string;
	interest: string;
	private sub: any;

	constructor(public navCtrl: NavController, private router: Router, private route: ActivatedRoute, private mentorService: MentorService) {
		this.members = mentorService.getMentors('all').sort((mentor1, mentor2) => {
			if (mentor1.name < mentor2.name) {
				return -1;
			}

			if (mentor1.name > mentor2.name) {
				return 1;
			}

			return 0;
		});
	}

	ngOnInit() {
		this.loggedInUser = parseInt(sessionStorage.getItem('loggedInId'));
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];

			this.profile = this.members.find((member) => {
				return member.id === this.id;
			});

			this.searchedName = this.profile.name;
			this.searchChanged();
			this.chatRoute = '/chat/' + this.id;
		});
	}

	searchFocus() {
		this.searchFocused = true;
	}

	searchLost() {
		this.searchFocused = false;
	}

	searchChanged() {
		this.filteredMembers = this.members;

		if (this.searchedName.trim() == '') {
			return;
		}

		this.filteredMembers = this.members.filter((member) => {
			if (member.name.toLowerCase().includes(this.searchedName.toLowerCase())) {
				return true;
			}

			return false;
		});
	}

	routeMember(member: any) {
		this.router.navigate(['/profile', member.id]);
	}

	search() {
		var tempMember = this.members.find((member) => {
			return member.name.toLowerCase() == this.searchedName.toLowerCase();
		});

		if (tempMember) {
			this.routeMember(tempMember);
		}
	}

	updateProfile() {
		this.isEditing = true;
		this.editProfile = JSON.parse(JSON.stringify(this.profile));
	}

	cancelEdit() {
		this.isEditing = false;
	}

	addJob() {
		this.newJob.img = '../../assets/photos/company.png';
		this.newJob.dates = this.newJob.start + ' - ' + this.newJob.end;
		this.editProfile.jobs.push(this.newJob);
		this.newJob = {};
	}

	removeJob(removedJob: any) {
		this.editProfile.jobs = this.editProfile.jobs.filter((job) => {
			return removedJob.title != job.title && removedJob.company != job.company;
		});
	}

	addSkill() {
		if (this.skill && this.skill.trim() != '') {
			this.editProfile.skills.push(this.skill);
			this.skill = null;
		}
	}

	removeSkill(removedSkill: string) {
		this.editProfile.skills = this.editProfile.skills.filter((skill) => {
			return skill != removedSkill;
		});
	}

	addInterest() {
		if (this.interest && this.interest.trim() != '') {
			this.editProfile.interests.push(this.interest);
			this.interest = null;
		}
	}

	removeInterest(removedInterest: string) {
		this.editProfile.interests = this.editProfile.interests.filter((interest) => {
			return interest != removedInterest;
		});
	}

	save() {
		localStorage.setItem('user', JSON.stringify(this.editProfile));
		this.profile = JSON.parse(JSON.stringify(this.editProfile));
		this.isEditing = false;
	}

}
