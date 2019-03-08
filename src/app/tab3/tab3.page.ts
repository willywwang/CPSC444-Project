import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
	mentors: Array<any> = [];
	route: string;
	img: string;
	loggedInUser: number;

	constructor(private router: Router) {
		this.mentors = [
		{	
			id: 17,
			name: 'Pierre Dot',
			time: '4:08 PM',
			message: 'Yes, let\'s meet at Starbucks at 2PM.',
			img: '../../assets/photos/pierre-dot.jpg'
		},
		{
			id: 18,
			name: 'Thomas Gaul',
			time: '3:59 PM',
			message: 'Hi Jeffrey, it\'s nice to meet you I\'m Thomas. How are you doing?',
			img: '../../assets/photos/thomas-gaul.jpg'
		},
		{
			id: 19,
			name: 'Elora Bang',
			time: 'Feb 9',
			message: 'You: I\'m currently a full time student so picking a time would be hard.',
			img: '../../assets/photos/elora-bang.jpg'
		},
		{
			id: 20,
			name: 'Greg Davidson',
			time: 'Jan 2',
			message: 'You: I\'m doing well and yourself?',
			img: '../../assets/photos/greg-davidson.jpg'
		},
		{
			id: 21,
			name: 'Bruce Willis',
			time: 'Dec 11',
			message: 'When you have time, let\'s arrange a time and date to meet.',
			img: '../../assets/photos/bruce-willis.jpg'
		}];

		this.loggedInUser = sessionStorage.getItem('loggedInId');
		this.route = '/profile/' + this.loggedInUser;
		this.img = this.loggedInUser == 1 ? '../../assets/photos/jeffrey-parkhouse.jpg' : '../../assets/photos/user.png';
	}

	openChat(mentor) {
		this.router.navigate(['/chat', mentor.id]);
	}
}
