const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const articles = [
  {
    id: 1,
    date: "Oct 2025",
    title: "How I Built CropCare AI to Help Indian Farmers",
    image: "/images/cropcare.png",
    link: "/articles/cropcare-ai",
    type: "Case Study",
  },
  {
    id: 2,
    date: "Dec 2025",
    title: "Designing a macOS-Style Portfolio Using React & GSAP",
    image: "/images/portfolio.png",
    link: "/articles/macos-portfolio",
    type: "Learning Note",
  },
  {
    id: 3,
    date: "Nov 2025",
    title:
      "Product Eco-Friendliness Index (PEFI): Measuring Sustainability Using ML",
    image: "/images/pefi.png",
    link: "/articles/pefi",
    type: "Case Study",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "C++/C", "Java"],
  },
  {
    category: "Frontend",
    items: ["React.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Flask", "FastAPI"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL/SQL"],
  },
  {
    category: "AI / ML",
    items: ["Machine Learning", "Image Classification"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "VS Code"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Hardik144",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/hardikpatidar",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/gicon2.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/mediassist.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
  {
    id: 5,
    img: "/images/gal5.png",
  },
  {
    id: 6,
    img: "/images/me.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  articles,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "MediAssist AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-6 left-5",
      windowPosition: "top-[2vh] right-10",
      children: [
        {
          id: 1,
          name: "MediAssist AI Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "MediAssist AI is an intelligent medical assistance platform designed to provide symptom-based medicine recommendations.",
            "Instead of manually searching online, users can enter symptoms and receive AI-driven suggestions with precautions.",
            "Think of it as a digital health assistant that supports basic medical guidance using technology.",
            "The project combines a clean React-based UI with AI-powered recommendation logic.",
          ],
        },
        {
          id: 2,
          name: "mediassist-ai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mediassist-ai.vercel.app/",
          position: "top-10 right-40",
        },
        {
          id: 3,
          name: "mediassist-ai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 right-80",
          imageUrl: "/images/mediassist.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Product Eco-Friendliness Index (PEFI)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-6 left-40",
      windowPosition: "top-[16vh] right-1",
      children: [
        {
          id: 1,
          name: "PEFI Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-40",
          description: [
            "The Product Eco-Friendliness Index (PEFI) is a machine learning–based system that evaluates how environmentally friendly a product is.",
            "Instead of relying on vague sustainability claims, it generates a measurable eco-score using product attributes.",
            "Think of it as a transparency tool that helps users make informed and sustainable decisions.",
            "The project focuses on applying data analysis and ML techniques to real-world sustainability problems.",
          ],
        },
        {
          id: 2,
          name: "pefi-github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Hardik144/Product-Eco-Friendliness-Index-PEFI-.git",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "pefi.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-50",
          imageUrl: "/images/pefi.png", //change the photo
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "CropCare AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-6 left-74",
      windowPosition: "top-[35vh] right-10",
      children: [
        {
          id: 1,
          name: "CropCare AI Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "CropCare AI is a smart crop disease diagnosis platform built to assist Indian farmers.",
            "Farmers can upload images of affected crop leaves, and the system predicts possible diseases using image-based machine learning.",
            "Instead of waiting for expert consultations, it provides quick and actionable insights.",
            "The project focuses on solving real-world agricultural problems using AI with social impact in mind.",
          ],
        },
        {
          id: 2,
          name: "cropcare-ai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Hardik144/CropCare.git",
          position: "top-10 right-40",
        },
        {
          id: 3,
          name: "cropcare-ai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 right-80",
          imageUrl: "/images/gal2.png",
        },
      ],
    },

    // ▶ Project: 4
    {
      id: 8,
      name: "MERN Notes App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-7 right-1",
      windowPosition: "top-[50vh] right-6",
      children: [
        {
          id: 1,
          name: "MERN Notes App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-12",
          description: [
            "MERN Notes App is a full-stack notes management application built using MongoDB, Express, React, and Node.js.",
            "Users can securely register and log in to create, edit, delete, and manage personal notes.",
            "The backend provides RESTful APIs with JWT-based authentication and MongoDB for data storage.",
            "The frontend is built with React and Vite, offering a fast and responsive user experience.",
            "This project demonstrates real-world MERN stack development with authentication, CRUD operations, and clean UI design.",
          ],
        },
        {
          id: 2,
          name: "mern-notes-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Hardik144/mern-notes-app.git",
          position: "top-12 right-44",
        },
        {
          id: 3,
          name: "mern-notes-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-96",
          imageUrl: "/images/gal4.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.png",
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-40 left-20",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/hardik.png",
      description: [
        "Hey! I’m Hardik 👋, a developer who enjoys building clean, practical, and impactful applications that solve real problems.",

        "I work across web development and AI/ML, with hands-on experience in React, Node.js, and machine learning projects like crop disease detection, medical assistance, and sustainability analysis.",

        "I care about clean UI, thoughtful UX, and code that’s easy to understand and scale. My goal is always to build things that don’t just look good—but actually work well in the real world.",

        "When I’m not coding, I’m usually exploring new tech ideas, improving old projects, or thinking about how technology can make everyday life a little better.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  article: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
