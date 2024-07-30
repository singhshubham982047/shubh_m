import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  skills: [
    {
      title: "Technologies",
      stack: ["React", "Next.js", "Node.js", "Redux", "Express", "Tailwind"],
    },
    {
      title: "Programming Language",
      stack: ["Html", "Css", "Javascript", "Typescript", "Java"],
    },
    { title: "Database", stack: ["Mysql", "MongoDb"] },
    {
      title: "Tools",
      stack: ["Vs Code", "Github", "Docker", "ChromeDev Tools"],
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#skills", icon: PencilLine, label: "Skills" },
    { href: "#work", icon: Icons.work, label: "Work" },
    { href: "#education", icon: Icons.education, label: "Education" },
    { href: "#connect", icon: Icons.connect, label: "Connect" },
    { href: "#", icon: Icons.resumeLink, label: "Resume" },
  ],
  contact: {
    email: "singhshubham982047.com",
    tel: "+916307858508",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/singhshubham982047",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubhamsingh47/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Dr APJ Abdul Kalam Technical University Uttar Pradesh India",

      degree: "Master of Computer Application(MCA)",
      logoUrl: "/education.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "United Institute of Management Prayagraj Uttar Pradesh India",

      degree: "Bachelor of Computer Application(BCA)",
      logoUrl: "/education1.png",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Imagify",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        " Choose from a wide range of filters and effects to add mood and style to your photos using cloudinary. From vintage to modern, the possibilities are endless",
      technologies: [
        "/next.svg",
        "/typescript.svg",
        "/mongodb.svg",
        "/tailwind.svg",
      ],

      image: "/imagify.png",
    },
    {
      title: "Blogsly",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Build a blog app using Reactjs, Nodejs, Express, Redux, Mongodb, TailwindWhere users can login and sign up with their credentials, and create blogs in different categories and also read, update and delete their blog.",
      technologies: [
        "/react.svg",
        "/javascript.svg",
        "/mongodb.svg",
        "/tailwind.svg",
      ],

      image: "/blogsly.png",
    },
    {
      title: "Genimi Clone",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description: "Clone the gemini ai using Reactjs and Gemini Api",
      technologies: ["/react.svg", "/javascript.svg", "/tailwind.svg"],

      image: "/blogsly.png",
    },
    {
      title: "Online Compiler",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Compile and run code in multiple programming languages such as C, C++, Java, Python, JavaScript, and more.",
      technologies: [
        "/react.svg",
        "/javascript.svg",
        "/mongodb.svg",
        "/tailwind.svg",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: Icons.nextjs,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: Icons.github,
        },
      ],
      image: "/blogsly.png",
    },
  ],

  works: [
    {
      title: "Full Stack developer",
      description:
        "Build a blog app using Reactjs, Nodejs, Express, Redux, Mongodb, TailwindWhere users can login and sign up with their credentials, and create blogs in different categories and also read, update and delete their blog.",
      image: "/codetool.png",
    },
    {
      title: "Full Stack developer",
      description:
        "Build a blog app using Reactjs, Nodejs, Express, Redux, Mongodb, TailwindWhere users can login and sign up with their credentials, and create blogs in different categories and also read, update and delete their blog.",
      image: "/codeTyping.png",
    },
    {
      title: "Full Stack developer",
      description:
        "Build a blog app using Reactjs, Nodejs, Express, Redux, Mongodb, TailwindWhere users can login and sign up with their credentials, and create blogs in different categories and also read, update and delete their blog.",
      image: "/pairProgramming.png",
    },
    {
      title: "Full Stack developer",
      description:
        "Build a blog app using Reactjs, Nodejs, Express, Redux, Mongodb, TailwindWhere users can login and sign up with their credentials, and create blogs in different categories and also read, update and delete their blog.",
      image: "/working.png",
    },
  ],
};
