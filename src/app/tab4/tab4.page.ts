import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
	route: string;
	img: string;
	loggedInUser: number;
	
	constructor(private router: Router) {
		this.loggedInUser = sessionStorage.getItem('loggedInId');
		this.route = '/profile/' + this.loggedInUser;
		this.img = this.loggedInUser == 1 ? '../../assets/photos/jeffrey-parkhouse.jpg' : '../../assets/photos/user.png';
	}

	signout() {
		this.router.navigate(['/']);
	}
}
