import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	formattedDate: string = '';
	route: string;
	img: string;
	loggedInUser: number;
	private pipe = new DatePipe('en-us');

	constructor() {
		let currentDate: Date = new Date();
		currentDate.setDate(currentDate.getDate() + 2);
		this.formattedDate = this.pipe.transform(currentDate, 'EEEE, MMM d, y, h:mm a');
		this.loggedInUser = sessionStorage.getItem('loggedInId');
		this.route = '/profile/' + this.loggedInUser;
		this.img = this.loggedInUser == 1 ? '../../assets/photos/jeffrey-parkhouse.jpg' : '../../assets/photos/user.png';
	}
}
