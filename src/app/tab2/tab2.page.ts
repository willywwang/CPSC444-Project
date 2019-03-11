import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';
import { MentorService } from '../mentors/mentor.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	mentors1: Array<any> = [];
	mentors2: Array<any> = [];
	mentors3: Array<any> = [];
	subsetMentors: Array<any> =[];
	mentor: any;
	route: string;
	img: string;
	index: number = 0;
	sliceIndex: number = 0;
	mode: number = 1;
	subs = new Subscription();
	favorites: Array<any> = [];
	garbage: Array<any> = [];
	loggedInUser: number;
	finishedSearch: boolean = false;

	constructor(private router: Router, private dragulaService: DragulaService, private mentorService: MentorService) {
		this.loggedInUser = parseInt(sessionStorage.getItem('loggedInId'));
		this.route = '/profile/' + this.loggedInUser;
		this.img = this.loggedInUser == 1 ? '../../assets/photos/jeffrey-parkhouse.jpg' : '../../assets/photos/user.png';

		var mentor1 = {};
		var mentor2 = {};

		this.mentors1 = mentorService.getMentors('mode1').sort((mentor1, mentor2) => {
			if (mentor1.match > mentor2.match) {
				return -1;
			}

			if (mentor1.match < mentor2.match) {
				return 1;
			}

			return 0;
		});
		this.mentors2 = this.shuffle(mentorService.getMentors('mode2'));
		this.mentors3 = this.shuffle(mentorService.getMentors('mode3'));

		this.mentor = this.mentors2[this.index];
		this.subsetMentors = this.mentors3.slice(this.sliceIndex, this.sliceIndex+3);
		this.sliceIndex += 3;


		this.dragulaService.createGroup('MENTORS', {
			moves: function (el: any, container: any, handle: any): any {
				if (container.classList.contains('no-drag')) {
					return false;
				}

				return true;
			}
		});

		this.subs.add(this.dragulaService.drop("MENTORS")
			.subscribe(({ name, el, target, source, sibling }) => {
				if (this.sliceIndex < 9 && this.subsetMentors.length == 0) {
					this.subsetMentors = this.mentors3.slice(this.sliceIndex, this.sliceIndex+3);
					this.sliceIndex += 3;
				} else if (this.sliceIndex >= 9 && this.subsetMentors.length == 0) {
					this.finishedSearch = true;
				}
			})
		);
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

	switchMentors() {
		this.index++;

		if (this.index == this.mentors2.length) {
			this.mentor = {};
			this.mentor.name = "No more mentors can be found at the moment.";
			this.mentor.id = -1;
			return;
		}

		this.mentor = this.mentors2[this.index];
	}

 	shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
}
