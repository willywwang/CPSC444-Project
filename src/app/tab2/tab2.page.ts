import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	public mentors: Array<any> = [];

	constructor() {
		this.mentors = [
		{
			name: 'Andrew Guay',
			job: 'Financial Advisor at BMO',
			bio: '',
			img: '../../assets/photos/andrew-guay.jpg'
		},
		{
			name: 'Brendan Popowich',
			job: '',
			bio: '',
			img: '../../assets/photos/brendan-popowich.jpg'
		},
		{
			name: 'Christian Grey',
			job: '',
			bio: '',
			img: '../../assets/photos/christian-grey.jpg'
		},
		{
			name: 'Christine Lee',
			job: '',
			bio: '',
			img: '../../assets/photos/christine-lee.jpg'
		},
		{
			name: 'Cindy Trac',
			job: '',
			bio: '',
			img: '../../assets/photos/cindy-trac.jpg'
		},
		{
			name: 'Citra Ult',
			job: '',
			bio: '',
			img: '../../assets/photos/citra-ult.jpg'
		},
		{
			name: 'Hanah Afro',
			job: '',
			bio: '',
			img: '../../assets/photos/hanah-afro.jpg'
		},
		{
			name: 'Jonathan Habibi',
			job: '',
			bio: '',
			img: '../../assets/photos/jonathan-habibi.jpg'
		},
		{
			name: 'Jordan Wilde',
			job: '',
			bio: '',
			img: '../../assets/photos/jordan-wilde.jpg'
		},
		{
			name: 'Karen Bertini',
			job: '',
			bio: '',
			img: '../../assets/photos/karen-bertini.jpg'
		},
		{
			name: 'Mohammed Aryan',
			job: '',
			bio: '',
			img: '../../assets/photos/mohammed-aryan.jpg'
		},
		{
			name: 'Nelson Power',
			job: 'Software Engineer at Hootsuite',
			bio: 'I have been coding for 8 years and have experience with both mobile and web development. I previously worked at companies such as Google and Amazon as a full stack engineer and have mentored several interns in the past.',
			img: '../../assets/photos/nelson-power.jpg'
		},
		{
			name: 'Phanuel Smith',
			job: '',
			bio: '',
			img: '../../assets/photos/phanuel-smith.jpg'
		},
		{
			name: 'Sally Kim',
			job: '',
			bio: '',
			img: '../../assets/photos/sally-kim.jpg'
		},
		{
			name: 'Sofia Gomez',
			job: '',
			bio: '',
			img: '../../assets/photos/sofia-gomez.jpg'
		}];
	}
}
