import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MentorService {

  constructor() { }

  getMentors(filter: string) {
  		var members: Array<any> = [
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
		}];

		var user = JSON.parse(localStorage.getItem('user'));
		var loggedInUser = parseInt(sessionStorage.getItem('loggedInId'));

		if (loggedInUser !== 1) {
			members[0] = user;
		}

		var mode1: Array<any> = [
		{	
			id: 13,
			name: 'Nelson Power',
			job: 'Software Engineer at Hootsuite',
			education: 'Simon Fraser University',
			bio: 'I have been coding for 8 years and have experience with both mobile and web development. I previously worked at companies such as Google and Amazon as a full stack engineer and have mentored several interns in the past.',
			img: '../../assets/photos/nelson-power.jpg',
			verified: true,
			skills: ['Software Engineering', 'Algorithms', 'Communication', 'Scrum'],
			interests: ['Fishing', 'Skiing'],
			jobs: [
			{
				img: '../../assets/photos/hootsuite-logo.png',
				title: 'Intermediate Software Engineer',
				company: 'Hootsuite',
				dates: 'Sept. 2017 - Mar. 2019'
			}],
			match: 97
		},
		{	
			id: 2,
			name: 'Andrew Guay',
			job: 'Junior Software Engineer at Tableau',
			education: 'University of British Columbia',
			bio: 'I have tri-mentoring program experience from UBC and I landed my job right out of graduation. Let me help you do the same!',
			img: '../../assets/photos/andrew-guay.jpg',
			verified: true,
			skills: ['Software Engineering', 'Scrum', 'Code Testing'],
			interests: ['Hiking', 'Reading'],
			match: 90
		},
		{	
			id: 3,
			name: 'Brendan Popowich',
			job: 'Technical Product Manager at SAP',
			education: 'Langara College',
			bio: 'After jumping fields of study from marketing to software development to UX to product management, I can finally say that I am happy where I am now. Contact me if you want to hear my thoughts on the wide variety of fields I have experience in.',
			img: '../../assets/photos/brendan-popowich.jpg',
			verified: true,
			skills: ['Project Management', 'Product Management', 'Leadership', 'Communication'],
			interests: ['Coffee', 'Dancing', 'Singing'],
			match: 85
		},
		{	
			id: 4,
			name: 'Christian Cooke',
			job: 'Technology Business Analyst at Deloitte',
			education: 'University of British Columbia',
			bio: 'Connect with me on LinkedIn to find out more',
			img: '../../assets/photos/christian-grey.jpg',
			verified: true,
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Mountaineering', 'Ski Touring', 'Running'],
			match: 55
		},
		{	
			id: 5,
			name: 'Christine Lee',
			job: 'User Experience Designer at Clio',
			education: 'Simon Fraser University',
			bio: 'Check out my online portfolio at www.christine-lee.io ',
			img: '../../assets/photos/christine-lee.jpg',
			verified: false,
			skills: ['Prototyping', 'Interaction Design', 'Prototype Testing', 'Front-end Development'],
			interests: ['Reading', 'Drawing', 'Cycling'],
			match: 55
		},
		{	
			id: 6,
			name: 'Cindy Trac',
			job: 'Technology Consultant at KPMG',
			education: 'University of British Columbia',
			bio: 'People from companies everywhere have come to me for advice regarding the feasibility and implementation of many of their data science algorithms and programs. I\'m happy to talk as long as you\'re happy to listen.',
			img: '../../assets/photos/cindy-trac.jpg',
			verified: true,
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Running', 'Swimming', 'Cycling'],
			match: 55
		},
		{	
			id: 7,
			name: 'Citra Ult',
			job: 'Biomedical Engineer at Vancouver General Hospital',
			education: 'University of British Columbia',
			bio: '',
			img: '../../assets/photos/citra-ult.jpg',
			verified: false,
			skills: ['Research', 'Big Data', 'Engineering', 'Design'],
			interests: ['Reading', 'Weightlifting'],
			match: 35

		},
		{	
			id: 8,
			name: 'Hanah Afro',
			job: 'Personal Trainer at Goodlife Fitness',
			education: 'University of British Colubmia',
			bio: 'I\'m here to flex my fitness knowledge and bring your body to its ideal state of health!',
			img: '../../assets/photos/hanah-afro.jpg',
			verified: false,
			skills: ['Personal Training', 'Diet Planning', 'Coaching', 'Goal Setting', 'Communication'],
			interests: ['Weightlifting', 'Skiing', 'Running', 'Hiking'],
			match: 5
		},
		{	
			id: 9,
			name: 'Jonathan Habibi',
			job: 'Sales Consultant at Meltware AI',
			education: 'Simon Fraser University',
			bio: 'The flow of influence and persuasion affects all aspects of our lives from negotiating a better salary to forming stronger social bonds. My methods will greatly improve your personal growth.',
			img: '../../assets/photos/jonathan-habibi.jpg',
			verified: true,
			skills: ['Sales', 'Closing', 'Communication'],
			interests: ['Coffee Roasting', 'Traveling', 'Reading'],
			match: 20
		}];

		var mode2: Array<any> = [
		{	
			id: 10,
			name: 'Jordan Wilde',
			job: 'Senior Software Engineer at Amazon',
			bio: 'I have always been inspired by art. My passion lies in front-end and design. As such, I have dabbled in computer vision and special FX algorithms.',
			education: 'Capilano University',
			img: '../../assets/photos/jordan-wilde.jpg',
			verified: true,
			skills: ['Software Engineering', 'Algorithms', 'Communication', 'Scrum'],
			interests: ['Graphic Design', 'Special FX'],
			match: 97,
		},
		{	
			id: 11,
			name: 'Karen Bertini',
			job: 'Junior Software Engineer at Tableau',
			education: 'University of British Columbia',
			verified: true,
			bio: 'I started my university career not knowing that I would end up in tech. Do you want to hear my story and how I reached where I am today? Minor spoilers: Leetcode is a godsend and more reasons why you should do a question a day.',
			img: '../../assets/photos/karen-bertini.jpg',
			skills: ['Software Engineering', 'Scrum', 'Code Testing'],
			interests: ['Bouldering', 'Reading', 'Ping Pong'],
			match: 90
		},
		{	
			id: 12,
			name: 'Mohammed Aryan',
			job: 'Technical Product Manager at Microsoft',
			education: 'Simon Fraser University',
			verified: true,
			bio: 'If you\'re looking for tips for how to interview at big companies, I\'m your guy. I have been through rounds and rounds of interviews with Google, Amazon, Facebook, etc.',
			img: '../../assets/photos/mohammed-aryan.jpg',
			skills: ['Project Management', 'Product Management', 'Leadership', 'Communication'],
			interests: ['Fine Coffee', 'Cycling'],
			match: 85
		},
		{	
			id: 14,
			name: 'Phanuel Smith',
			job: 'Technology Business Analyst at Deloitte',
			education: 'University of British Columbia',
			verified: true,
			bio: 'I have experience working at Deloitte in Montreal so if anyone is thinking of leaving their home base, I have stories to tell',
			img: '../../assets/photos/phanuel-smith.jpg',
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Magic and illusions', 'Card tricks'],
			match: 55
		},
		{	
			id: 15,
			name: 'Sally Kim',
			job: 'User Experience Designer at Hubly',
			education: 'Simon Fraser University',
			verified: false,
			bio: 'Art drives me and lets me channel my creative juices into something concrete in front of my users. I can teach you my methods of creating beautiful interfaces.',
			img: '../../assets/photos/sally-kim.jpg',
			skills: ['Prototyping', 'Interaction Design', 'Prototype Testing', 'Front-end Development'],
			interests: ['Oil painting', 'Watercolour', 'Photography'],
			match: 55
		},
		{	
			id: 16,
			name: 'Sofia Gomez',
			job: 'Technology Consultant at KPMG',
			education: 'University of British Columbia',
			verified: true,
			bio: 'Numbers, numbers, numbers. I love them. Ask me to talk about anything numbers and you best be ready to listen for a long time.',
			img: '../../assets/photos/sofia-gomez.jpg',
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Running', 'Crossfit', 'Spin class'],
			match: 55
		},
		{
			id: 17,
			name: 'Ron Gustafson',
			job: 'Biomedical Engineer at Vancouver General Hospital',
			education: 'University of British Columbia',
			bio: '',
			img: '../../assets/photos/ron-gustafson.jpg',
			verified: false,
			skills: ['Research', 'Big Data', 'Engineering', 'Design'],
			interests: ['Reading', 'Weightlifting'],
			match: 35
		},
		{
			id: 18,
			name: 'John Clic',
			job: 'Personal Trainer at Gold\'s Gym',
			education: 'University of British Columbia',
			verified: false,
			bio: 'Down for some informal chill sessions and I\'ll be happy to answer any of your questions',
			img: '../../assets/photos/john-clic.jpg',
			skills: ['Personal Training', 'Diet Planning', 'Coaching', 'Goal Setting', 'Communication'],
			interests: ['Reading', 'Weightlifting', 'Kickboxing'],
			match: 5
		},
		{
			id: 19,
			name: 'Rafael Martinez',
			job: 'Sales Consultant at Oracle',
			education: 'Simon Fraser University',
			verified: true,
			bio: '',
			img: '../../assets/photos/rafael-martinez.jpg',
			skills: ['Soccer', 'Basketball', 'Fantasy Leagues'],
			interests: ['Coffee Roasting', 'Traveling', 'Reading'],
			match: 20
		}];

		var mode3: Array<any> = [
		{
			id: 20,
			name: 'Zach Cox',
			job: 'Software Engineer at PayByPhone',
			education: 'Capilano University',
			verified: true,
			bio: 'I absolutely love working in the tech industry. I think it\'s amazing how we have created a niche set of culture and work ethic to help facilitate great code generation. I have been through many company cultures and I think my current is one of my favourites.',
			img: '../../assets/photos/zach-cox.jpg',
			skills: ['Software Engineering', 'Algorithms', 'Communication', 'Scrum'],
			interests: ['DJ', 'Audiophile', 'Voice acting'],
			match: 97
		},
		{
			id: 21,
			name: 'Holly Saint',
			job: 'Junior Software Engineer at QilkView',
			education: 'University of British Columbia',
			verified: true,
			bio: 'I\'m just getting the hang of things myself, but I have some great tips for transitioning from university to a full time career, with your next steps to personal growth!',
			img: '../../assets/photos/holly-saint.jpg',
			skills: ['Software Engineering', 'Scrum', 'Code Testing'],
			interests: ['Competitive Gaming', 'VR development', 'Online Streaming'],
			match: 90
		},
		{
			id: 22,
			name: 'Lisa Smith',
			job: 'Technical Product Manager at Salesforce',
			education: 'Simon Fraser University',
			verified: true,
			bio: 'I believe to be a good product manager, you have to have both the side where you have a deep understanding of your users, as well as a deep understanding of the methods used to build them. I believe that I have found a great balance that has propelled my career.',
			img: '../../assets/photos/lisa-smith.jpg',
			skills: ['Project Management', 'Product Management', 'Leadership', 'Communication'],
			interests: ['Singing', 'Guitar', 'Composer'],
			match: 85
		},
		{
			id: 23,
			name: 'Alexis Ann',
			job: 'Technical Business Analyst at Boston Consulting Group',
			education: 'University of British Columbia',
			verified: true,
			bio: 'LinkedIn is a better place to reach me. Check out my blogs and updates there for the most details if my career is relevant to you.',
			img: '../../assets/photos/alexis-ann.jpg',
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Tennis', 'Badminton'],
			match: 55
		},
		{	
			id: 24,
			name: 'Rachel Singh',
			job: 'User Experience Designer at LawPay',
			education: 'Simon Fraser University',
			bio: 'I absolutely loved SFU\'s Master of Digital Media program and I recommend it to anyone considering a UX field!',
			img: '../../assets/photos/rachel-singh.jpg',
			verified: false,
			skills: ['Prototyping', 'Interaction Design', 'Prototype Testing', 'Front-end Development'],
			interests: ['Karate', 'Kungfu movies', 'Asian dramas'],
			match: 55
		},
		{	
			id: 25,
			name: 'Jason Chow',
			job: 'Technology Consultant at McKinsey and Company',
			education: 'University of British Columbia',
			bio: 'What makes a great consultant? Do you want to know why tech companies valued at millions come to me for help? I have so many of my experiences to share, some terrifying, some unbelievable.',
			img: '../../assets/photos/jason-chow.jpg',
			verified: true,
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Swimming', 'Water Polo'],
			match: 55
		},
		{	
			id: 26,
			name: 'Victoria Lee',
			job: 'Biomedical Engineer at UBC Hospital',
			education: 'University of British Columbia',
			bio: '',
			img: '../../assets/photos/victoria-lee.jpg',
			verified: false,
			skills: ['Research', 'Big Data', 'Engineering', 'Design'],
			interests: ['Dog lover', 'Netflix', 'Ultimate Frisbee'],
			match: 35

		},
		{	
			id: 27,
			name: 'Brian Moore',
			job: 'Personal Trainer at Anytime Fitness',
			education: 'University of Waterloo',
			bio: 'I guarantee that you are spending time at the gym inefficiently. There is so much for you to improve. I can help you.',
			img: '../../assets/photos/brian-moore.jpg',
			verified: false,
			skills: ['Personal Training', 'Diet Planning', 'Coaching', 'Goal Setting', 'Communication'],
			interests: ['Weightlifting', 'Motivational speaker'],
			match: 5
		},
		{	
			id: 28,
			name: 'Jared Cull',
			job: 'Sales Consultant at Meltware AI',
			education: 'Simon Fraser University',
			bio: 'Hey man. Being formal and uptite about everything isn\'t the way to go about sales. I\'m going to teach you about the best way to do sales, where both you and your customer win.',
			img: '../../assets/photos/jared-cull.jpg',
			verified: true,
			skills: ['Sales', 'Closing', 'Communication'],
			interests: ['Smoked meats', 'Old Westerns', 'Campy Horror films'],
			match: 20
		}];

		if (filter === 'all') {
			return members.concat(mode1, mode2, mode3);
		} else if (filter === 'mode1') {
			return mode1;
		} else if (filter === 'mode2') {
			return mode2;
		} else {
			return mode3;
		}
  }

}