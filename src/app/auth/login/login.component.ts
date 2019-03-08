import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginError: boolean = false;
	username: string;
	password: string;

	constructor(private router: Router) {}

	ngOnInit() {}

	login() {
		this.loginError = false;
		var unparsedUser = localStorage.getItem('user');
		var user = {};
		var that = this;

		if (unparsedUser) {
			user = JSON.parse(unparsedUser);
		}

		if (this.username == 'testuser') {
			sessionStorage.setItem('loggedInId', 1);

			setTimeout(function() {
				that.router.navigate(['/tabs']);
			}, 500);
			return;
		} else if (this.username == user.username && this.password == user.password) {
			sessionStorage.setItem('loggedInId', 99);
			setTimeout(function() {
				that.router.navigate(['/tabs']);
			}, 500);
			return;
		}

		this.loginError = true;
	}
}
