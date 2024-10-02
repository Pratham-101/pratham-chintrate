import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";



export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `
  I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. 
  I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
  I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. 
  Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
  <br/><br/>
  Check out my resume here 
  <span style="display: inline-block;">
    <a href="https://drive.google.com/file/d/1ADPFMjoMvHnOKtZ1Pj9WjmcPs0c-HBq6/view?usp=sharing" target="_blank" 
      style="background: linear-gradient(to right, #f093fb, #667eea, #764ba2);
      border-radius: 50px;
      color: neon;
      text-decoration: underline;
      font-weight: bold;
      font-size: 2rem;
      padding: 5px 10px;
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;">
      Resume
    </a>
  </span>
`;


export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "General Secretary",
    company: "    e-CESA",
    description: `Streamlined council operations by enhancing communication and coordination. Spearheaded event planning, developed digital portals, and designed websites for Council. Contributed to open-source projects and led tech-driven initiatives, fostering a vibrant and innovative community.`,
    technologies: [],
  },
  {
    year: "2023 - 2024",
    role: "jt Cultural Secretary",
    company: "KJSCE students’ Council",
    description: `Coordinated and managed major college events, including technical, sports, and cultural fests. Facilitated team communication and led the planning and execution of these key activities, enhancing overall student engagement and participation.`,
    technologies: [""],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Finanseer",
    image: project7,
    description:
      "A comprehensive finance management application that tracks expenses, manages budgets, and predicts future financial trends, helping users achieve their financial goals with ease.",
    technologies: ["HTML", "Tailwind CSS", "React", "Express", "Node.js", "MongoDB"],
    link: "https://github.com/Pratham-101/helixify",  // Add this line

  },
  {
    title: "Helixify ",
    image: project5,
    description:
      "A hackathon-winning personalized health platform that integrates genomic and real-world data for proactive healthcare, offering tailored disease risk assessments, personalized drug matching, and lifestyle recommendations.",
    technologies: ["PHP", "Tailwind CSS", "React", "Flask", "MySQL"],
    link: "https://github.com/Pratham-101/Helixify-UserDashboard",  // Add this line
  },
  {
    title: "Building Offline Parallel AV Pipeline",
    image: project9,
    description:
      "This project develops an offline scanning pipeline for Critical Information Infrastructure (CII) entities, integrating multiple antivirus engines for efficient threat detection and security. Key components include a watchdog agent, containerized AV engines, and a Kibana-powered dashboard.",
    technologies: ["React", "Electron", "Flask" ,"Kubernetes" ,"Docker" ,"Kibana", "SQLite"],
    link: "https://example.com/portfolio-website",  // Add this line

  },
  {
    title: "CarePulse",
    image: project6,
    description:
      "This project aims to build a patient management system designed to streamline appointment scheduling, enhance communication through real-time SMS notifications, and ensure secure access via user authentication. The platform is optimized for mobile responsiveness and features a custom-designed, user-friendly interface.",
    technologies: ["React","Next.js","TypeScript","Tailwind CSS","Twilio"],
    link: "https://github.com/Pratham-101/CarePulse",  // Add this line

  },
  {
    title: "e-CESA Council Website",
    image: project8,
    description:
    "Developed a platform for e-CESA, featuring event details, study materials, and council information.",
    technologies: ["React"],
    link: "https://ecesakjsce-three.vercel.app/",  // Add this line

  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 72086 39630 ",
  email: "prathamchintrate@gmail.com",
};
