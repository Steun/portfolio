const projects = [
  {
    name: 'me',
    title: 'Frontend Developer',
    subtitle: 'Teun Kelting',
    class: 'splash',
    black: true,
    description: '',
    moreInfo: false,
    moreLayoutType: 1, // 1 for 2 rows and 2 columns, 2 for 2 rows
    infoTitle1: '',
    infoText1: '',
    infoTitle2: '',
    infoText2: ''
  },
  {
    name: 'projectp',
    title: 'Project P',
    subtitle: 'Angular PWA',
    class: 'projectp',
    black: false,
    description: 'This project is a little bit different then the other ones you can find here. During my internship at <a href="https://tjuna.com/">Tjuna</a> we came to the conclusion that we\'d been spending way too much time waiting for the toilet to be free again. The toilet is located downstairs, so you\'d never know whether it was occupied or not.\n' +
    '\n' +
    'Introducing Project P: our genious and fun solution to this problem. Together with co-intern Steven Oud we began development early May 2016.',
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: 'The process',
    infoText1: 'We had to find a reliable way of knowing when the toilet is actually occupied or not, and we found that the door lock would be the best place to base our data off. A Raspberry Pi 3, hooked up to a reed (magnetic) switch positioned in the doorpost with a tiny magnet on the doorlock pin is how we pulled it off. The Raspberry Pi with a bit of Python software is connected to an API made by Steven. I use the API to show all the data in our progressive web app. Another neat thing is that we\'ve implemented WebSockets. This means that you don\'t have to refresh the page to see whether the toilet status has changed.',
    infoTitle2: 'The result',
    infoText2: 'A responsive progressive Angular Web App that works with a realtime API connected to a Raspberry Pi. It was a lot of fun building this web app, especially because we did everything ourselves. The hardware: soldering wires and making circuits, the backend: building robust sensor software and a well-documented API, and the frontend: the web app.'
  },
  {
    name: 'lift',
    title: 'Lift',
    subtitle: 'Social community webapp',
    class: 'lift',
    black: false,
    description: '',
    moreInfo: true,
    moreLayoutType: 1,
    infoTitle1: '',
    infoText1: '',
    infoTitle2: '',
    infoText2: ''
  },
  {
    name: 'compilex',
    title: 'Compilex',
    subtitle: 'website and branding',
    class: 'compilex',
    black: true,
    description: '',
    moreInfo: true,
    moreLayoutType: 2,
    infoTitle1: '',
    infoText1: 'Compilex LLC is an all-in-one dynamic and highly scalable IT company based in Minnesota, USA. They\'re specialized in Application Development, Data Security and Code Optimization. Compilex also provides and maintains custom coded gameservers. Before the start of this project I had never used build tools in a real-world project before, so this project was a big stepping stone for me. It\'s awesome to see my product being used in a fast-growing company.',
    infoTitle2: '',
    infoText2: ''
  }
]

export default projects
