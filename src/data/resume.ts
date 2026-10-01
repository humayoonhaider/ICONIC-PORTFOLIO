export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  cgpa?: string;
  details?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  linkedinUrl: string;
  summary: string;
  experience: WorkExperience[];
  skills: string[];
  languages: string[];
  education: Education[];
  achievements: string[];
}

export const resumeData: ResumeData = {
  name: "Ubaid Ahmad",
  title: "Web Developer",
  phone: "0315-0914087",
  email: "ubaidahmad184@gmail.com",
  location: "Mardan, Pakistan",
  linkedin: "linkedin.com/in/ubaid-ahmad-a04ba6202",
  linkedinUrl: "https://www.linkedin.com/in/ubaid-ahmad-a04ba6202",
  summary: "As a Fullstack Web Developer with over 03 Years of experience in the development cycle of web projects, I am proficient in several programming languages, including HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB. My passion for web development drives me to stay updated with the latest trends and technologies, enabling me to create innovative solutions for complex problems.",
  experience: [
    {
      role: "Web Developer",
      company: "Lion Software House",
      location: "Islamabad",
      period: "NOVEMBER 2023 – NOVEMBER 2024",
      highlights: [
        "Database design and querying using MySQL.",
        "Experienced working with HTML, CSS, Bootstrap and JavaScript. Working with front-end developers on projects.",
        "Ensuring that integrations run smoothly.",
        "Maintaining web-based applications.",
        "Presenting work in meetings with team and management."
      ],
      technologies: ["MySQL", "HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Node.js"]
    },
    {
      role: "Web Developer (Internship)",
      company: "SUIT (Sarhad University of Science & IT)",
      location: "Peshawar",
      period: "SEP 2021 – FEB 2023",
      highlights: [
        "Database design and querying using MySQL.",
        "Experienced working with HTML, CSS, Bootstrap and JavaScript. Working with front-end developers on projects.",
        "Ensuring that integrations run smoothly.",
        "Maintaining web-based applications.",
        "Presenting work in meetings with team and management."
      ],
      technologies: ["MySQL", "HTML", "CSS", "Bootstrap", "JavaScript", "Web Applications"]
    },
    {
      role: "Web Developer (Internship)",
      company: "Trust Tech Solution",
      location: "Peshawar",
      period: "FEB 2021 – AUG 2021",
      highlights: [
        "Working on front-end and back-end projects.",
        "Use of HTML, CSS, Bootstrap, JavaScript and PHP as backend technologies.",
        "Use of JavaScript, Bootstrap, HTML5 and CSS as frontend technologies.",
        "Involved in project planning and discussions."
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "MySQL"]
    }
  ],
  skills: [
    "Full Stack Web Development",
    "WordPress Web Development",
    "MS Office",
    "HTML5 / CSS3 / Bootstrap",
    "JavaScript / ES6+",
    "React.js",
    "Node.js & Express.js",
    "MongoDB & MySQL",
    "PHP Backend"
  ],
  languages: [
    "English",
    "Urdu"
  ],
  education: [
    {
      degree: "Bachelor's in Software Engineering",
      institution: "Sarhad University, Peshawar",
      year: "Apr 2022",
      cgpa: "CGPA 3.2 / 4.0",
      details: "Comprehensive coursework in software engineering methodologies, database design, and object-oriented software development."
    }
  ],
  achievements: [
    "Received Full-Stack certificate from Trust Tech Solution Peshawar.",
    "DIT (Diploma in Information Technology) from TTB"
  ]
};
