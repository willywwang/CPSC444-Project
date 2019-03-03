import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
	profile: any = {
		id: 99,
		img: '../../assets/photos/user.png',
		skills: [],
		interests: [],
		jobs: []
	};
	skill: string;
	interest: string;
	job: any = {};

	constructor(private router: Router) {}

	ngOnInit() {}

	addSkill() {
		if (this.skill && this.skill.trim() != '') {
			this.profile.skills.push(this.skill);
			this.skill = null;
		}
	}

	removeSkill(removedSkill: string) {
		this.profile.skills = this.profile.skills.filter((skill) => {
			return skill != removedSkill;
		});
	}

	addInterest() {
		if (this.interest && this.interest.trim() != '') {
			this.profile.interests.push(this.interest);
			this.interest = null;
		}
	}

	removeInterest(removedInterest: string) {
		this.profile.interests = this.profile.interests.filter((interest) => {
			return interest != removedInterest;
		});
	}

	addJob() {
		this.job.img = '../../assets/photos/company.png';
		var startDate = new Date(this.job.start);
		this.job.dates = this.job.start + ' - ' + this.job.end;
		this.profile.jobs.push(this.job);
		this.job = {};
	}

	removeJob(removedJob: any) {
		this.profile.jobs = this.profile.jobs.filter((job) => {
			return removedJob.title != job.title && removedJob.company != job.company;
		});
	}

	save() {
		console.log('asdf');
		localStorage.setItem('user', JSON.stringify(this.profile));
		this.router.navigate(['/tabs']);
	}
}
