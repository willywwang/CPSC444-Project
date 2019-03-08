import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
	members: Array<any>;
	filteredMessages: Array<any>;
	messages: Array<any>;
	id: Number;
	member: any;
	messageText: string;
	img: string;
	loggedInUser: number;

	private sub: any;

	constructor(private route: ActivatedRoute) {
		this.members = [
		{	
			id: 1,
			name: 'Jeffrey Parkhouse',
			img: '../../assets/photos/jeffrey-parkhouse.jpg'
		},
		{	
			id: 2,
			name: 'Andrew Guay',
			img: '../../assets/photos/andrew-guay.jpg'
		},
		{	
			id: 3,
			name: 'Brendan Popowich',
			img: '../../assets/photos/brendan-popowich.jpg'
		},
		{	
			id: 4,
			name: 'Christian Grey',
			img: '../../assets/photos/christian-grey.jpg'
		},
		{	
			id: 5,
			name: 'Christine Lee',
			img: '../../assets/photos/christine-lee.jpg'
		},
		{	
			id: 6,
			name: 'Cindy Trac',
			img: '../../assets/photos/cindy-trac.jpg'
		},
		{	
			id: 7,
			name: 'Citra Ult',
			img: '../../assets/photos/citra-ult.jpg'
		},
		{	
			id: 8,
			name: 'Hanah Afro',
			img: '../../assets/photos/hanah-afro.jpg'
		},
		{	
			id: 9,
			name: 'Jonathan Habibi',
			img: '../../assets/photos/jonathan-habibi.jpg'
		},
		{	
			id: 10,
			name: 'Jordan Wilde',
			img: '../../assets/photos/jordan-wilde.jpg'
		},
		{	
			id: 11,
			name: 'Karen Bertini',
			img: '../../assets/photos/karen-bertini.jpg'
		},
		{	
			id: 12,
			name: 'Mohammed Aryan',
			img: '../../assets/photos/mohammed-aryan.jpg'
		},
		{	
			id: 13,
			name: 'Nelson Power',
			img: '../../assets/photos/nelson-power.jpg',
		},
		{	
			id: 14,
			name: 'Phanuel Smith',
			img: '../../assets/photos/phanuel-smith.jpg'
		},
		{	
			id: 15,
			name: 'Sally Kim',
			img: '../../assets/photos/sally-kim.jpg'
		},
		{	
			id: 16,
			name: 'Sofia Gomez',
			img: '../../assets/photos/sofia-gomez.jpg'
		},
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

		var user = JSON.parse(localStorage.getItem('user'));
		this.members.push(user);

		this.loggedInUser = sessionStorage.getItem('loggedInId');
		this.img = this.loggedInUser == 1 ? '../../assets/photos/jeffrey-parkhouse.jpg' : '../../assets/photos/user.png';

		this.messages = [
		{
			id: 17,
			chatId: 0,
			from: this.loggedInUser,
			text: 'Hi Pierre, would you be free to meet up on Saturday?'
		},
		{
			id: 17,
			chatId: 1,
			from: 17,
			text: 'Yes, let\'s meet at Starbucks at 2PM.'
		}];

		var sentMessages = sessionStorage.getItem('messages');

		if (sentMessages) {
			this.messages = this.messages.concat(JSON.parse(sentMessages));
			this.messages.splice(0, 2);
		}
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];

			this.member = this.members.find((member) => {
				return member.id === this.id;
			});

			this.filteredMessages = this.messages.filter((message) => {
				return message.id === this.id;
			});
		});
	}

	sendMessage() {
		var newMessage: any = {
			id: this.id,
			chatId: this.messages[this.messages.length - 1].chatId + 1,
			from: this.loggedInUser,
			text: this.messageText
		};

		this.messages.push(newMessage);

		sessionStorage.setItem('messages', JSON.stringify(this.messages));

		this.messageText = "";

		this.filteredMessages.push(newMessage);
	}

}
