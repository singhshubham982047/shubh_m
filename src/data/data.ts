import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  // name: "Dillion Verma",
  // initials: "DV",
  // url: "https://dillion.io",
  // location: "San Francisco, CA",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  // description:
  //   "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  // summary:
  //   "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  // avatarUrl: "/me.png",

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

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
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
