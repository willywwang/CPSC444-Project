import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	public mentors: Array<any> = [];
	mode: number = 1;

	constructor(private router: Router) {
		this.mentors = [
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
	}

	switchMode() {
		this.mode++;

		if (this.mode > 3) {
			this.mode = 1;
		}
	}

	goToMember(member: any) {
		this.router.navigate(['/profile', member.id]);
	}
}
