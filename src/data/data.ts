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
      title: "Soil-Farming-Agent",
      href: "https://soil-farming-agent-d3s3.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Soil farming agent helps to choose your crop according to soil type for better growth and production",
      technologies: [
        "/next.svg",
        "/typescript.svg",
        "/mongodb.svg",
        "/tailwind.svg",
      ],

      image: "/soil-farming.png",
    },
    {
      title: "Imagify",
      href: "http://imagify-green.vercel.app/",
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
      href: "https://blogsly.netlify.app/",
      dates: "May 2024 - Jun 2024",
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
      href: "https://geminiclone47.netlify.app/",
      dates: "July 2024 - Aug 2024",
      active: true,
      description: "Clone the gemini ai using Reactjs and Gemini Api",
      technologies: ["/react.svg", "/javascript.svg", "/tailwind.svg"],

      image: "/gemini-clone.png",
    },
    {
      title: "Online Compiler",
      href: "https://github.com/singhshubham982047/online-compiler",
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
      title: "Full Stack Developer - Soil-Farming-Agent Project",
      description:
        "The Soil-Farming-Agent Project is a Next.js application that allows users to log in and explore various soil types, their properties, and the crops best suited for each soil type. Additionally, users can connect with seed distributors directly through the platform, making it easier to obtain the necessary seeds for their farming needs. Spearheaded the adoption of Next.js and integration of Authjs/NextAuth, seamlessly integrating OAuth authentication for Google, and email login, enabling SSR to boost search engine visibility.  Utilized Tailwind CSS for sleek UI design and Shadcn for modern UI design to improved user experience  Committed to creating responsive designs for optimal accessibility and search engine ranking. Key expertise includes Next.js,TanStack query for seamless data fetching and mutation, enhancing userexperience, Tailwind CSS, SSR, and SEO optimization & MERN",
      image: "/codetool.png",
    },
    {
      title: "Full Stack Developer - AI-Powered SaaS Application",
      description:
        " I led the development of a Software-as-a-Service (SaaS) application that integrates AI functionalities and a robustpayment and credit system. Leveraging Next.js 14, Clerk, MongoDB, Cloudinary AI, and Stripe, I ensured seamless integration and optimal functionality for users.",
      image: "/codeTyping.png",
    },
    {
      title: "Full Stack Developer - Blogsly Blog Application",
      description:
        " Developed a dynamic blog application utilizing React.js, MongoDB, and Redux, incorporating JSON Web Tokens (JWT) for secure authorization. designing and implementing route controllers and aggregation functions. Developed middleware for user uthentication using JWT tokens for secure access. Implemented efficient password hashing techniques using bcryptjs for enhanced security measures, Used Redux to manage states. Deployed the Node.js application with Express.js to Render, and React.js application to Render.",
      image: "/pairProgramming.png",
    },
    {
      title: "Frontend Developer - Gemini Clone Project",
      description:
        "The Gemini Clone Project is a web application that replicates the features and functionalities of the Gemini platform, providing users with a streamlined and secure environment",
      image: "/working.png",
    },
  ],
};
