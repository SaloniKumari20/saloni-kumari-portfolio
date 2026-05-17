// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

// Project Section Logo's
import doctorAppLogo from './assets/work_logo/doctor_app.png';
import weatherAppLogo from './assets/work_logo/weather_app.png';
import pasteAppLogo from './assets/work_logo/paste_app.png';

// ================= EDUCATION LOGO'S =================

import collegeLogo from './assets/education_logo/College_logo.png';
import schoolLogo from './assets/education_logo/School_logo.png';


// ================= SKILLS =================

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Chrome DevTools', logo: vscodeLogo },
    ],
  },
];


// ================= PROJECTS =================

export const projects = [
  {
    id: 1,
    title: "Doctor Appointment Application",
    description:
      "Developed a responsive doctor appointment web application using React.js, JavaScript, HTML, CSS, and Tailwind CSS with appointment booking functionality, modern UI design, and user-friendly interface.",
    image: doctorAppLogo,
    tags: ["React JS", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    github: "#",
    webapp: "#",
  },

  {
    id: 2,
    title: "Paste Sharing Platform",
    description:
      "Built a responsive paste sharing application with create, edit, delete, copy, search, and share functionality using React.js and modern frontend technologies.",
    image: pasteAppLogo,
    tags: ["React JS", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    github: "#",
    webapp: "#",
  },

  {
    id: 3,
    title: "Weather Forecast Application",
    description:
      "Created a weather forecasting application using HTML, CSS, and JavaScript with real-time weather updates, city search functionality, and responsive user interface.",
    image: weatherAppLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "#",
    webapp: "#",
  },
];

// ================= EDUCATION =================

export const education = [
  {
    id: 1,
    img: collegeLogo,
    school: "Dr B C Roy Engineering College, Durgapur",
    date: "2021 - 2025",
    grade: "7.83 CGPA",
    desc: "B.Tech in Computer Science and Engineering",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Govt +2 High School Birpur, Supaul",
    date: "2021",
    grade: "65%",
    desc: "Higher Secondary (12th)",
  },
  {
    id: 3,
    img: schoolLogo,
    school: "Govt High School Birpur, Supaul",
    date: "2019",
    grade: "67.4%",
    desc: "Secondary (10th)",
  },
];