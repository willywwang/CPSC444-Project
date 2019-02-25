import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	public formattedDate: string = '';
	private pipe = new DatePipe('en-us');

	constructor() {
		let currentDate: Date = new Date();
		currentDate.setDate(currentDate.getDate() + 2);
		this.formattedDate = this.pipe.transform(currentDate, 'EEEE, MMM d, y, h:mm a');
	}

	visitProfile = function() {
		console.log('route to profile');
	}
}
