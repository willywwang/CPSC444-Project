import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';

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

	constructor(public navCtrl: NavController, private router: Router, private route: ActivatedRoute) {
		this.members = [
		{	
			id: 1,
			name: 'Jeffrey Parkhouse',
			job: 'BCs Student at UBC',
			education: 'University of British Columbia',
			bio: 'I\'m a 4th year computer science student at UBC who specializes in full stack development.',
			img: '../../assets/photos/jeffrey-parkhouse.jpg',
			verified: true,
			skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'C++', 'C', 'Android', 'IntelliJ'],
			interests: ['Coding', 'Software', 'Hiking', 'Hackathons', 'Mobile', 'Web', 'Database'],
			jobs: [
			{	
				img: '../../assets/photos/ubc-logo.png',
				title: 'Full Stack Developer Co-op',
				company: 'UBC',
				dates: 'Sept 2018 - Dec 2018'
			},
			{
				img: '../../assets/photos/hootsuite-logo.png',
				title: 'Software Developer Intern',
				company: 'Hootsuite',
				dates: 'Jan 2017 - Aug 2017'
			}]
		},
		{	
			id: 2,
			name: 'Andrew Guay',
			job: 'Financial Advisor at BMO',
			bio: '',
			img: '../../assets/photos/andrew-guay.jpg'
		},
		{	
			id: 3,
			name: 'Brendan Popowich',
			job: '',
			bio: '',
			img: '../../assets/photos/brendan-popowich.jpg'
		},
		{	
			id: 4,
			name: 'Christian Grey',
			job: '',
			bio: '',
			img: '../../assets/photos/christian-grey.jpg'
		},
		{	
			id: 5,
			name: 'Christine Lee',
			job: '',
			bio: '',
			img: '../../assets/photos/christine-lee.jpg'
		},
		{	
			id: 6,
			name: 'Cindy Trac',
			job: '',
			bio: '',
			img: '../../assets/photos/cindy-trac.jpg'
		},
		{	
			id: 7,
			name: 'Citra Ult',
			job: '',
			bio: '',
			img: '../../assets/photos/citra-ult.jpg'
		},
		{	
			id: 8,
			name: 'Hanah Afro',
			job: '',
			bio: '',
			img: '../../assets/photos/hanah-afro.jpg'
		},
		{	
			id: 9,
			name: 'Jonathan Habibi',
			job: '',
			bio: '',
			img: '../../assets/photos/jonathan-habibi.jpg'
		},
		{	
			id: 10,
			name: 'Jordan Wilde',
			job: '',
			bio: '',
			img: '../../assets/photos/jordan-wilde.jpg'
		},
		{	
			id: 11,
			name: 'Karen Bertini',
			job: '',
			bio: '',
			img: '../../assets/photos/karen-bertini.jpg'
		},
		{	
			id: 12,
			name: 'Mohammed Aryan',
			job: '',
			bio: '',
			img: '../../assets/photos/mohammed-aryan.jpg'
		},
		{	
			id: 13,
			name: 'Nelson Power',
			job: 'Software Engineer at Hootsuite',
			bio: 'I have been coding for 8 years and have experience with both mobile and web development. I previously worked at companies such as Google and Amazon as a full stack engineer and have mentored several interns in the past.',
			img: '../../assets/photos/nelson-power.jpg',
			match: '97%'
		},
		{	
			id: 14,
			name: 'Phanuel Smith',
			job: '',
			bio: '',
			img: '../../assets/photos/phanuel-smith.jpg'
		},
		{	
			id: 15,
			name: 'Sally Kim',
			job: '',
			bio: '',
			img: '../../assets/photos/sally-kim.jpg'
		},
		{	
			id: 16,
			name: 'Sofia Gomez',
			job: '',
			bio: '',
			img: '../../assets/photos/sofia-gomez.jpg'
		}];

		var user = JSON.parse(localStorage.getItem('user'));
		this.loggedInUser = parseInt(sessionStorage.getItem('loggedInId'));

		if (this.loggedInUser == 1) {
			this.members[0] = user;
		} else {
			this.members.push(user);
		}
	}

	ngOnInit() {
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
