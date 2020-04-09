const projects = [
  {
    name: "me",
    title: "Teun Kelting",
    subtitle: "Webdeveloper",
    class: "splash",
    black: false,
    description: false,
    moreInfo: false,
    moreLayoutType: 1, // 1 for 2 rows and 2 columns, 2 for 2 rows
    infoTitle1: "",
    infoText1: "",
    infoTitle2: "",
    infoText2: "",
    infoImageName1: "images/default.jpg",
    infoImageName2: "images/default.jpg",
    infoImageShadow1: true,
    infoImageShadow2: true,
    projectLink: false,
    projectImageCompressed: "images/teun/result-min.jpg",
    projectImage: "images/teun/result.jpg",
    technologies: []
  },
  {
    name: "lift",
    title: "Lift",
    subtitle: "Social community WebApp",
    class: "lift",
    black: false,
    description:
      "Lift is a community for mentally or physically challenged individuals. With this WebApp we made it possible for them to get in touch, help and learn from each other.",
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: "The challenge",
    infoText1:
      "For my graduation at Mediacollege Amsterdam I had the opportunity to work on a challenging project. Together with 4 other students, we had the task of making an application for 'Wajongers'. These are individuals that are physically or mentally challenged. The core functionality of the app is bringing these people together, by answering and asking questions to eachother.",
    infoTitle2: "Our result",
    infoText2:
      "I've worked on multiple aspects of this project. While some others in my team focussed on the API, I worked mostly on the design, user experience and front-end of the app. A very important part of the application was the user accessibility. I devoted a big portion of my project time perfecting this. We worked in Agile Scrum sprints during this project.",
    infoImageName1: "images/lift/lift1.png",
    infoImageName2: "images/lift/lift3.png",
    infoImageShadow1: true,
    infoImageShadow2: true,
    projectLink: "https://github.com/Lift-app/",
    projectImageCompressed: "images/lift/lift1-min.jpg",
    projectImage: "images/lift/lift1.jpg",
    technologies: [
      "Vue.js",
      "Sass",
      "JavaScript",
      "Sketch",
      "User Testing",
      "Scrum"
    ]
  },
  {
    name: "haphap",
    title: "Hap Hap",
    subtitle: "Vue/WebSockets WebApp",
    class: "haphap",
    black: false,
    description:
      "Assisting people with Korsakoff syndrome in learning how to cook meals",
    moreInfo: true,
    moreLayoutType: 2,
    infoTitle1: "Why Hap Hap?",
    infoText1:
      " This application is made for Amsta, an assisted living community for people with Korsakoff. Korsakoff syndrome is a disorder caused by vitamin B1 deficiency usually associated with prolonged ingestion of alcohol. Korsakoff patients have difficulty remembering and performing tasks. " +
      "The residents at Amsta engage in activities and chores like cleaning and cooking while being assisted by the employees. This requires a lot of guidance.\n\n Unlike with dementia, some research has proven that with the help of a step-program, it is possible to perform tasks, and eventually tasks can be re-learnt." +
      " This is where Hap Hap comes in. Residents are each given a tablet which shows simple step-plans assigned to them by employees. Since cooking often has a lot of difficult steps, recipes can be created and divided into sub-tasks by employees which then can be assigned to separate tablets.",
    infoTitle2: "The result",
    infoText2:
      "The application is divided into two parts. On the resident side of the application the user only sees the task the employee has assigned to that user. On the employee dashboard, the employee can create recipes and tasks, start cooking sessions, assign tasks to users and see the current progress of the recipe and its connected users status. \n" +
      "\nUsing WebSockets technology, HapHap is able to instantly update the status and progress of devices. This gives employees great power and insight in what people are currently doing, and allows for less employees needed to guide residents.\n\n" +
      "The application is designed and coded by me for a school project at the Hogeschool van Amsterdam.",
    infoImageName1: "https://i.imgur.com/5MWEFtT.png",
    infoImageName2: "https://i.imgur.com/PDVlahN.png",
    infoImageShadow1: false,
    infoImageShadow2: false,
    projectLink:
      "https://www.amsta.nl/over-amsta/nieuws/hva-en-amsta-ontwikkelen-apps-voor-bewoners",
    projectImageCompressed: "https://i.imgur.com/rlJ46JV.jpg",
    projectImage: "https://i.imgur.com/rlJ46JV.jpg",
    technologies: [
      "Vue.js",
      "WebSockets",
      "Node.js",
      "Express",
      "Firebase",
      "Sass",
      "TypeScript",
      "Sketch"
    ]
  },
  {
    name: "projectp",
    title: "Project P",
    subtitle: "Angular PWA",
    class: "projectp",
    black: false,
    description:
      "Smart Progressive Web App that gives insight on toilet visit data. Raspberri Pi attached to an API, connected to an Angular front-end application.",
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: "The process",
    infoText1:
      "We had to find a reliable way of knowing if the toilet is actually occupied or not, and we figured that the door lock would be the best place to get reliable data from. A Raspberry Pi 3, hooked up to a magnetic switch positioned in the doorpost with a tiny magnet on the doorlock pin is how we pulled it off. The Raspberry Pi with a bit of Python software is connected to an API. I use the API to show all the data in the Progressive Web App. Another neat thing is that we've implemented WebSockets. This means that you don't have to refresh the page to see whether the toilet status has changed.",
    infoTitle2: "The result",
    infoText2:
      "The result is a responsive Progressive Angular Web App that works with an API connected to the Raspberry Pi. This project was a great learning experience for me, especially because we did everything ourselves. The hardware: soldering wires and making circuits, the backend: building robust sensor software and a well-documented API, and the frontend: the Web App.\n\nTake a look at the code that makes it happen here: https://github.com/Proj-P/",
    infoImageName1: "images/project-p/project-p2.jpg",
    infoImageName2: "images/project-p/project-p1.png",
    infoImageShadow1: true,
    infoImageShadow2: false,
    projectLink: "https://project-p.tjuna.dev/",
    projectImageCompressed: "images/project-p/project-p-min.jpg",
    projectImage: "images/project-p/project-p.jpg",
    technologies: [
      "Angular",
      "Sass",
      "JavaScript",
      "WebSockets",
      "Chart.js",
      "Sketch"
    ]
  },
  {
    name: "sleepeey",
    title: "Sleepeey",
    subtitle: "Vue.js PWA",
    class: "sleepeey",
    black: false,
    description: "Find your perfect bed or wake time, using sleepcycles.",
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: "What is Sleepeey?",
    infoText1:
      "Sleepeey can find your perfect bed or wake time, using sleepcycles. A good night's sleep consists of 5-6 complete cycles. Waking up in between sleep cycles is easier, and you'll feel refreshed and full of energy. ",
    infoTitle2: "The result",
    infoText2:
      "Sleepeey is a Progressive Web App built with Vue.js. I've made this application to improve my design and coding skills, but also to provide useful data for others so they can sleep better. Making use of Service Workers this PWA does not require internet access after initial installation.",
    infoImageName1: "images/sleepeey/sleepeey1.jpg",
    infoImageName2: "images/sleepeey/sleepeey2.jpg",
    infoImageShadow1: true,
    infoImageShadow2: true,
    projectLink: "https://sleepeey.teunkelting.com/",
    projectImageCompressed: "images/sleepeey/sleepeey-min.jpg",
    projectImage: "images/sleepeey/sleepeey.jpg",
    technologies: ["Sass", "JavaScript", "HTML5", "Vue.js", "PWA"]
  },
  {
    name: "mygappie",
    title: "Mygappie",
    subtitle: "(Web)App",
    class: "mygappie",
    black: false,
    description:
      "Give the feeling of safety back to women being harassed on the street",
    moreInfo: true,
    moreLayoutType: 2,
    infoTitle1: "What is myGappie?",
    infoText1:
      "What to do if you feel unsafe on the street late at night? Calling someone helps, but what if he or she doesn't answer? This process should be a lot more efficient, and that's where the Mygappie app comes in." +
      "\n\nUsing the app, users can create contact lists of friends. When you feel unsafe, you can press the call button on the home screen to simultaneously call all the group members at once on their cellphone. Users can also plan routes and follow friends in their travels, and receive notifications when the friend is late.",
    infoTitle2: "The result",
    infoText2:
      "I've worked on multiple aspects of this project. I worked mostly on the design, user experience, API and front-end of the app. For the front-end I mainly focused on implementing the cellphone calling feature using Twilio. We worked in Agile Scrum sprints during this project." +
      " The application is built as a functional prototype (MVP) for a school project at the Hogeschool van Amsterdam, commissioned by Gabrielle from Mygappie.",
    infoImageName1: "https://i.imgur.com/yXjLNZ1.png",
    infoImageName2: "https://i.imgur.com/u76mQ7w.png",
    infoImageShadow1: true,
    infoImageShadow2: false,
    projectLink: "https://www.mygappie.com/de-app/",
    projectImageCompressed: "https://i.imgur.com/XZcL5eN.png",
    projectImage: "https://i.imgur.com/40ogN5K.png",
    technologies: [
      "Sass",
      "JavaScript",
      "Vue.js",
      "Twilio",
      "Java (Spring)",
      "Hibernate",
      "SQLite"
    ]
  },
  {
    name: "Opus",
    title: "Opus",
    subtitle: "IOT platform",
    class: "Opus",
    black: false,
    description: "IOT platform created for SoundLAB / Muziekgebouw aan 't IJ",
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: "What is Opus?",
    infoText1:
      "Opus is a small hardware box that has an audio input. Using a microphone, music can be recorded and stored online. For every musical piece, a unique identifier code is created. This unique identifier can be used to listen back to your recording the Opus online platform." +
      "The platform is designed with a clear focus on usability and ease of use, and is easy and fun for kids to interact with.",
    infoTitle2: "The result",
    infoText2:
      "I've worked on multiple aspects of this project, mostly on the design, user experience and development of the frontend and API.\n\nOpus is a school project done at the Hogeschool van Amsterdam, commissioned by SoundLAB / Muziekgebouw aan 't IJ.",
    infoImageName1: "https://i.imgur.com/RH06NHy.png",
    infoImageName2: "images/opus/opus_in_hand_transparent.png",
    infoImageShadow1: true,
    infoImageShadow2: false,
    projectLink: "https://sound-lab.web.app/",
    projectImageCompressed: "https://i.imgur.com/XZcL5eN.png",
    projectImage: "images/opus/cover.jpg",
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "Raspberry Pi",
      "Laser cutting",
      "UX/UI",
      "User Testing",
      "Scrum",
      "Sketch"
    ]
  }
];

export default projects;
