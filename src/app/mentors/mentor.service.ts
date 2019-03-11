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
			bio: '',
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
			bio: '',
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
			bio: '',
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
			bio: '',
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
			bio: '',
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
			bio: '',
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
			bio: '',
			img: '../../assets/photos/jonathan-habibi.jpg',
			verified: true,
			skills: ['Sales', 'CLosing', 'Communication'],
			interests: ['Coffee Roasting', 'Traveling', 'Reading'],
			match: 20
		}];

		var mode2: Array<any> = [
		{	
			id: 10,
			name: 'Jordan Wilde',
			job: 'Senior Software Engineer at Amazon',
			education: 'Capilano University',
			img: '../../assets/photos/jordan-wilde.jpg',
			verified: true,
			skills: ['Software Engineering', 'Algorithms', 'Communication', 'Scrum'],
			interests: ['Fishing', 'Skiing'],
			match: 97,
		},
		{	
			id: 11,
			name: 'Karen Bertini',
			job: 'Junior Software Engineer at Tableau',
			education: 'University of British Columbia',
			verified: true,
			bio: '',
			img: '../../assets/photos/karen-bertini.jpg',
			skills: ['Software Engineering', 'Scrum', 'Code Testing'],
			interests: ['Hiking', 'Reading'],
			match: 90
		},
		{	
			id: 12,
			name: 'Mohammed Aryan',
			job: 'Technical Product Manager at Microsoft',
			education: 'Simon Fraser University',
			verified: true,
			bio: '',
			img: '../../assets/photos/mohammed-aryan.jpg',
			skills: ['Project Management', 'Product Management', 'Leadership', 'Communication'],
			interests: ['Coffee', 'Dancing', 'Singing'],
			match: 85
		},
		{	
			id: 14,
			name: 'Phanuel Smith',
			job: 'Technology Business Analyst at Deloitte',
			education: 'University of British Columbia',
			verified: true,
			bio: '',
			img: '../../assets/photos/phanuel-smith.jpg',
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Mountaineering', 'Ski Touring', 'Running'],
			match: 55
		},
		{	
			id: 15,
			name: 'Sally Kim',
			job: 'User Experience Designer at Hubly',
			education: 'Simon Fraser University',
			verified: false,
			bio: '',
			img: '../../assets/photos/sally-kim.jpg',
			skills: ['Prototyping', 'Interaction Design', 'Prototype Testing', 'Front-end Development'],
			interests: ['Reading', 'Drawing', 'Cycling'],
			match: 55
		},
		{	
			id: 16,
			name: 'Sofia Gomez',
			job: 'Technology Consultant at KPMG',
			education: 'University of British Columbia',
			verified: true,
			bio: '',
			img: '../../assets/photos/sofia-gomez.jpg',
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Running', 'Swimming', 'Cycling'],
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
			bio: '',
			img: '../../assets/photos/john-clic.jpg',
			skills: ['Personal Training', 'Diet Planning', 'Coaching', 'Goal Setting', 'Communication'],
			interests: ['Weightlifting', 'Skiing', 'Running', 'Hiking'],
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
			skills: ['Sales', 'Closing', 'Communication'],
			interests: ['Coffee Roasting', 'Traveling', 'Reading'],
			match: 20
		}];

		var mode3: Array<any> = [
		{
			id: 20,
			name: '',
			job: 'Software Engineer at Hootsuite',
			education: 'Capilano University',
			verified: true,
			bio: '',
			img: '../../assets/photos/.jpg',
			skills: ['Software Engineering', 'Algorithms', 'Communication', 'Scrum'],
			interests: ['Fishing', 'Skiing'],
			match: 97
		},
		{
			id: 21,
			name: '',
			job: 'Junior Software Engineer at Tableau',
			education: 'Capilano University',
			verified: true,
			bio: '',
			img: '../../assets/photos/.jpg',
			skills: ['Software Engineering', 'Scrum', 'Code Testing'],
			interests: ['Hiking', 'Reading'],
			match: 90
		},
		{
			id: 22,
			name: '',
			job: 'Technical Product Manager at SAP',
			education: 'Simon Fraser University',
			verified: true,
			bio: '',
			img: '../../assets/photos/.jpg',
			skills: ['Project Management', 'Product Management', 'Leadership', 'Communication'],
			interests: ['Coffee', 'Dancing', 'Singing'],
			match: 85
		},
		{
			id: 23,
			name: '',
			job: 'Technical Product Manager at SAP',
			education: 'Simon Fraser University',
			verified: true,
			bio: '',
			img: '../../assets/photos/.jpg',
			skills: ['Project Management', 'Product Management', 'Leadership', 'Communication'],
			interests: ['Coffee', 'Dancing', 'Singing'],
			match: 85
		},
		{	
			id: 24,
			name: '',
			job: 'Technology Business Analyst at Deloitte',
			education: 'University of British Columbia',
			bio: '',
			img: '../../assets/photos/christian-grey.jpg',
			verified: true,
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Mountaineering', 'Ski Touring', 'Running'],
			match: 55
		},
		{	
			id: 25,
			name: '',
			job: 'User Experience Designer at Clio',
			education: 'Simon Fraser University',
			bio: '',
			img: '../../assets/photos/christine-lee.jpg',
			verified: false,
			skills: ['Prototyping', 'Interaction Design', 'Prototype Testing', 'Front-end Development'],
			interests: ['Reading', 'Drawing', 'Cycling'],
			match: 55
		},
		{	
			id: 26,
			name: '',
			job: 'Technology Consultant at KPMG',
			education: 'University of British Columbia',
			bio: '',
			img: '../../assets/photos/cindy-trac.jpg',
			verified: true,
			skills: ['Consulting', 'Project Management', 'Communication', 'Big Data'],
			interests: ['Running', 'Swimming', 'Cycling'],
			match: 55
		},
		{	
			id: 27,
			name: '',
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
			id: 28,
			name: '',
			job: 'Personal Trainer at Goodlife Fitness',
			education: 'University of British Colubmia',
			bio: '',
			img: '../../assets/photos/hanah-afro.jpg',
			verified: false,
			skills: ['Personal Training', 'Diet Planning', 'Coaching', 'Goal Setting', 'Communication'],
			interests: ['Weightlifting', 'Skiing', 'Running', 'Hiking'],
			match: 5
		},
		{	
			id: 29,
			name: '',
			job: 'Sales Consultant at Meltware AI',
			education: 'Simon Fraser University',
			bio: '',
			img: '../../assets/photos/jonathan-habibi.jpg',
			verified: true,
			skills: ['Sales', 'CLosing', 'Communication'],
			interests: ['Coffee Roasting', 'Traveling', 'Reading'],
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