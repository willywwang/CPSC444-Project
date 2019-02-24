import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
	public mentors: Array<any> = [];

	constructor() {
		this.mentors = [
		{
			name: 'Pierre Dot',
			time: '4:08 PM',
			message: 'Yes, let\'s meet at Starbucks at 2PM.',
			img: '../../assets/photos/pierre-dot.jpg'
		},
		{
			name: 'Thomas Gaul',
			time: '3:59 PM',
			message: 'Hi Jeffrey, it\'s nice to meet you I\'m Thomas. How are you doing?',
			img: '../../assets/photos/thomas-gaul.jpg'
		},
		{
			name: 'Elora Bang',
			time: 'Feb 9',
			message: 'You: I\'m currently a full time student so picking a time would be hard.',
			img: '../../assets/photos/elora-bang.jpg'
		},
		{
			name: 'Greg Davidson',
			time: 'Jan 2',
			message: 'You: I\'m doing well and yourself?',
			img: '../../assets/photos/greg-davidson.jpg'
		},
		{
			name: 'Bruce Willis',
			time: 'Dec 11',
			message: 'When you have time, let\'s arrange a time and date to meet.',
			img: '../../assets/photos/bruce-willis.jpg'
		}];
	}
}
