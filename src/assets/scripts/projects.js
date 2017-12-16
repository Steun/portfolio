const projects = [
  {
    name: 'me',
    title: 'Teun Kelting',
    subtitle: 'Frontend Developer',
    class: 'splash',
    black: true,
    description: false,
    moreInfo: false,
    moreLayoutType: 1, // 1 for 2 rows and 2 columns, 2 for 2 rows
    infoTitle1: '',
    infoText1: '',
    infoTitle2: '',
    infoText2: '',
    infoImageName1: 'default.jpg',
    infoImageName2: 'default.jpg',
    infoImageShadow1: true,
    infoImageShadow2: true,
    projectLink: false,
    projectImageCompressed: './compilex/compilex-min.jpg',
    projectImage: './compilex/compilex.jpg'
  },
  {
    name: 'lift',
    title: 'Lift',
    subtitle: 'Social community WebApp',
    class: 'lift',
    black: false,
    description: 'Lift is a community for mentally or physically challenged individuals. With this WebApp we made it possible for them to get in touch, help and learn from each other.',
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: 'The challenge',
    infoText1: 'For my graduation at Mediacollege Amsterdam I had the opportunity to work on a challenging project. Together with 4 other students, we had the difficult task of making an application for \'Wajongers\'. These are individuals that are physically or mentally challenged. The core functionality of the app is bringing these people together, by answering and asking questions to eachother.',
    infoTitle2: 'Our result',
    infoText2: 'I\'ve worked on multiple aspects of this project. While some others in my team focussed on the API, I worked mostly on the design, user experience and front-end of the app. A very important part of the application was the user accessibility. I devoted a big portion of my project time perfecting this. We worked in Agile Scrum sprints during this project.',
    infoImageName1: 'lift/lift1.png',
    infoImageName2: 'lift/lift3.png',
    infoImageShadow1: true,
    infoImageShadow2: true,
    projectLink: 'https://github.com/Lift-app/',
    projectImageCompressed: './lift/lift1-min.jpg',
    projectImage: './lift/lift1.jpg'
  },
  {
    name: 'projectp',
    title: 'Project P',
    subtitle: 'Angular PWA',
    class: 'projectp',
    black: false,
    description: 'Smart Progressive Web App that gives insight on toilet visit data. Raspberri Pi attached to an API, connected to an Angular front-end application.',
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: 'The process',
    infoText1: 'We had to find a reliable way of knowing if the toilet is actually occupied or not, and we figured that the door lock would be the best place to get reliable data from. A Raspberry Pi 3, hooked up to a magnetic switch positioned in the doorpost with a tiny magnet on the doorlock pin is how we pulled it off. The Raspberry Pi with a bit of Python software is connected to an API. I use the API to show all the data in the Progressive Web App. Another neat thing is that we\'ve implemented WebSockets. This means that you don\'t have to refresh the page to see whether the toilet status has changed.',
    infoTitle2: 'The result',
    infoText2: 'A responsive Progressive Angular Web App that works with an API connected to the Raspberry Pi. This project was a great learning experience for me, especially because we did everything ourselves. The hardware: soldering wires and making circuits, the backend: building robust sensor software and a well-documented API, and the frontend: the Web App.',
    infoImageName1: 'project-p/project-p2.jpg',
    infoImageName2: 'project-p/project-p1.png',
    infoImageShadow1: true,
    infoImageShadow2: false,
    projectLink: 'https://github.com/Proj-P/',
    projectImageCompressed: './project-p/project-p-min.jpg',
    projectImage: './project-p/project-p.jpg'
  },
  {
    name: 'sleepeey',
    title: 'Sleepeey',
    subtitle: 'Vue.js PWA',
    class: 'sleepeey',
    black: false,
    description: 'Find your perfect bed or wake time, using sleepcycles.',
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: 'What is Sleepeey?',
    infoText1: 'Sleepeey can find your perfect bed or wake time, using sleepcycles. A good night\'s sleep consists of 5-6 complete cycles. Waking up in between sleep cycles is easier, and you\'ll feel refreshed and full of energy. ',
    infoTitle2: 'The result',
    infoText2: 'Sleepeey is a Progressive Web App built with Vue.js. I\'ve made this application to improve my design and coding skills, but also to provide useful data for others so they can sleep better. Making use of Service Workers this PWA does not require internet access after initial installation.',
    infoImageName1: 'sleepeey/sleepeey1.jpg',
    infoImageName2: 'sleepeey/sleepeey2.jpg',
    infoImageShadow1: true,
    infoImageShadow2: true,
    projectLink: 'https://sleepeey.teunkelting.com/',
    projectImageCompressed: './sleepeey/sleepeey-min.jpg',
    projectImage: './sleepeey/sleepeey.jpg'
  }
]

export default projects
