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
    projectLink: false
  },
  {
    name: 'lift',
    title: 'Lift',
    subtitle: 'Social community webapp',
    class: 'lift',
    black: false,
    description: 'Lift is a community for mentally or physically challenged individuals. With this WebApp we made it possible for them to get in touch, help and learn from each other.',
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: 'Lift boii',
    infoText1: 'lorem ipsum dolor amet',
    infoTitle2: '',
    infoText2: '',
    infoImageName1: 'lift/lift1.png',
    infoImageName2: 'lift/lift3.png',
    infoImageShadow1: true,
    infoImageShadow2: true,
    projectLink: 'https://github.com/Lift-app/'
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
    infoText1: 'We had to find a reliable way of knowing when the toilet is actually occupied or not, and we found that the door lock would be the best place to base our data off. A Raspberry Pi 3, hooked up to a reed (magnetic) switch positioned in the doorpost with a tiny magnet on the doorlock pin is how we pulled it off. The Raspberry Pi with a bit of Python software is connected to an API made by Steven. I use the API to show all the data in our progressive web app. Another neat thing is that we\'ve implemented WebSockets. This means that you don\'t have to refresh the page to see whether the toilet status has changed.',
    infoTitle2: 'The result',
    infoText2: 'A responsive progressive Angular Web App that works with a real-time API connected to a Raspberry Pi. It was a lot of fun building this web app, especially because we did everything ourselves. The hardware: soldering wires and making circuits, the backend: building robust sensor software and a well-documented API, and the frontend: the web app.',
    infoImageName1: 'project-p/project-p2.jpg',
    infoImageName2: 'project-p/project-p1.png',
    infoImageShadow1: true,
    infoImageShadow2: false,
    projectLink: 'https://github.com/Proj-P/'
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
    infoTitle1: '',
    infoText1: 'Find your perfect bed or wake time, using sleepcycles. A good night\'s sleep consists of 5-6 complete cycles. Wake up refreshed and full of energy.',
    infoTitle2: '',
    infoText2: '',
    infoImageName1: 'default.jpg',
    infoImageName2: 'default.jpg',
    infoImageShadow1: true,
    infoImageShadow2: true,
    projectLink: 'https://sleepeey-187920.firebaseapp.com/'
  }
]

export default projects
