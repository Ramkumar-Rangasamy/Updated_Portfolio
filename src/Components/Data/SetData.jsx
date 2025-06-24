//abouts image import 
import aboutprofileimg from '../../Assets/aboutprofile.jpg'
import download from '../../Assets/Ramrrr_Resume.pdf';

//image import certificates
import kgislcollege from '../../Assets/Microcollege-Logo.jpeg'
import metalogo from '../../Assets/Metalogo.png'
import courseraprojectnetwork from '../../Assets/coursera-projectnetwork-purplesquare.png'
import LearnQuest from '../../Assets/LearnQuest.png'
 
//react-icons
//Home page icon
import { CgArrowRight } from "react-icons/cg";
import { BiSolidDashboard, BiSolidUserPin, BiSolidSpreadsheet } from "react-icons/bi";
import { FaAward, FaLightbulb, FaLaptopCode } from "react-icons/fa";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { FaSquarePhone } from "react-icons/fa6";
import { FiMenu, FiBookOpen } from "react-icons/fi";
import { MdOutlineLiveTv } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { Bs1CircleFill, Bs2CircleFill } from "react-icons/bs";

//skills
import { IoLogoJavascript } from "react-icons/io";
import { PiFileHtmlFill,PiFileCssFill } from "react-icons/pi";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiMysql, SiMongodb, SiVite, SiPostman } from "react-icons/si";
import {
  FaReact,
  FaGithub,
  FaRobot,
  FaBootstrap,
  FaCode,
  FaPaintBrush ,
  FaGlobe,
  FaProjectDiagram,
  FaNetworkWired,
  FaSpinner,
  FaChartLine,
} from "react-icons/fa";

// Sidebar items config
export const sidebarItems = [
  { id: "/", label: "Home", icon: BiSolidDashboard },
  { id: "about", label: "About Me", icon: BiSolidUserPin },
  { id: "service", label: "Service", icon: RiServiceFill },
  { id: "myjourney", label: "My Journey", icon: FaAward },
  { id: "portfolio", label: "Portfolio", icon: BiSolidSpreadsheet },
  { id: "skills", label: "Skills", icon: TbRosetteDiscountCheckFilled },
  { id: "certifications", label: "Certifications", icon: PiNewspaperClippingFill },
  { id: "contact", label: "Get in Touch", icon: FaSquarePhone },
];

// General site settings
const setData = {
  logo: "Ram",
  home: {
    name: "Ram Kumar R",
    role: "React Developer",
    rolesall: [
      "Software Developer",
      "MERN Stack Dev...",
      "React Developer",
      "Web Designer",
      "Frontend Developer",
    ],
    homerightarrow:<CgArrowRight size="1.5rem" className="arrow"/>,
  },

  //Features data ste here -Start-
  FeaturesDatas: [
    {
      icon:<MdDevices />,
      title: "User Interface Development",
      description:
        "I engineer responsive, interactive UIs with React, HTML & CSS. Designed to captivate users and elevate experiences.",
    },
    {
      icon: <FiBookOpen />,
      title: "Backend Architecture",
      description:
        "I build robust and scalable backend systems with Node.js and Express.js. These power fast, interactive, and secure web applications.",
    },
    {
      icon: <MdOutlineLiveTv />,
      title: "Web Solutions (MERN Stack)",
      description:
        "I develop end-to-end solutions using the MERN stack. My apps are built for performance, scalability, and usability.",
    },
    {
      icon: <FaLightbulb />,
      title: "Strategic Web Development",
      description:
        "I align development with business goals to drive engagement. Every project is a step toward sustainable digital growth.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Unique Design",
      description:
        "I create modern, eye-catching websites tailored to your brand. Design meets function for a standout digital presence.",
    },
    {
      icon:<FiMenu />,
      title: "Performance Optimization",
      description:
        "Improve loading speeds and user experience through efficient coding practices, lazy loading, and code splitting.",
    },
  ],
  //Features data ste here -End-
 
  //education and experience -Start-
  education: [
    {
      year: "Jun 2018 – May 2021",
      degree: "B.Sc in Information Technology",
      desc: "CMS College of Science and Commerce, affiliated to Bharathiar University"
    },
    {
      year: "Jan 2016 – Apr 2018",
      degree: "Higher Secondary Certificate (HSC)",
      desc: "Mamaharishi Easwarya Gurukulam Matriculation Higher Secondary School"
    },
    {
      year: "Jun 2014 – Apr 2016",
      degree: "Secondary School Leaving Certificate (SSLC)",
      desc: "Mamaharishi Easwarya Gurukulam Matriculation Higher Secondary School"
    }
  ],

  experience: [
    {
      year: "Mar 2024 – Present",
      role: "Software Developer",
      desc: "Building dynamic web apps with React.js and REST APIs at OneYes Infotech, collaborating in agile teams to deliver scalable solutions."
    }
  ],
  //education and experience -End-

  //About Page Data -Start-
  aboutData: {
    image: aboutprofileimg,
    cv:download,
    heading: "Know Me More",
    description:
      " I'm Ramkumar, a passionate developer specializing in building  dynamic, responsive web applications with React.js. I focus on creating seamless, user-friendly digital experiences using modern web technologies.",
    infoCards: [
      {
        title: "Smart Work",
        icon: <Bs1CircleFill />,
        text:
          "I follow clean code principles and component-based architecture to build smart, scalable, and maintainable React applications.",
      },
      {
        title: "Modern Work",
        icon: <Bs2CircleFill />,
        text:
          "Using modern web technologies like React, JavaScript ES6+, and responsive design, I deliver user-friendly and cutting-edge web solutions.",
      },
    ],
    stats: [
      { value: 0, suffix: "+", label: "Year Of Experience" },
      { value: 20, suffix: "+", label: "Global Happy Clients" },
      { value: 40, suffix: "+", label: "Project Complete" },
      { value: 3, suffix: "+", label: "Awards Winner" },
    ],
  },
  //About Page Data -End-

  //Skills Data -Start-
  skills: [
    {
      icon: <FaReact size={30} color="#61DBFB" />,
      title: "React js",
    },
    {
      icon: <IoLogoJavascript size={30} color="#f7df1e" />,
      title: "Javascript",
    },
    {
      icon: <PiFileHtmlFill size={30} color="#e34c26" />,
      title: "HTML5",
    },
    {
      icon: <PiFileCssFill size={30} color="#264de4" />,
      title: "CSS3",
    },
    {
      icon: <FaNode size={30} color="#3c873a" />,
      title: "Node js",
    },
    {
      icon: <FaJava size={30} color="#f89820" />,
      title: "Core java",
    },
    {
      icon: <SiMongodb size={30} color="#6DB33F" />,
      title: "Mongodb",
    },
    {
      icon: <SiMysql size={30} color="#00758f" />,
      title: "MySQL",
    },
    {
      icon: <FaRobot size={30} color="#10A37F" />,
      title: "ChatGPT",
    },
    {
      icon: <FaGithub size={30} color="#181717" />,
      title: "Git & GitHub",
    },
     
    {
      icon: <FaBootstrap size={30} color="#7952B3" />,
      title: "Bootstrap",
    },
    {
      icon: <FaProjectDiagram size={30} color="#00BFA6" />,
      title: "Agile / Scrum",
    },
    {
      icon: <SiVite size={30} color="#646CFF" />,
      title: "Vite",
    },
    {
      icon: <SiPostman size={30} color="#FF6C37" />,
      title: "Postman",
    },
    {
      icon: <FaSpinner  size={30} color="#00A86B" />,
      title: "Lazy Loading",
    },
    {
      icon: <FaNetworkWired size={30} color="#3F51B5" />,
      title: "REST APIs",
    },
    {
      icon: <FaCode size={30} color="#4CAF50" />,
      title: "Code Splitting",
    },
    {
      icon: <FaChartLine size={30} color="#0A66C2" />,
      title: "SEO Basics",
    },
    {
      icon: <FaPaintBrush  size={30} color="#4B32C3" />,
      title: "Prettier",
    },
    {
      icon: <FaGlobe size={30} color="#007ACC" />,
      title: "Cross-Browser",
    },
  ],
  //Skills Data -End-
  
  // certificates Data -Start-
  certificates: [
    {
      logimage:kgislcollege,
      title: "Tech Foundation",
      issuer: "Coursera kgisl Certified ",
      link: "https://coursera.org/share/1a9178dfc2d4159ee229e5a3453c1539"
    },
    {
      logimage:metalogo,
      title: "JavaScript",
      issuer: "Coursera  Meta Certificated",
      link: "https://coursera.org/share/925e87a340a26b30ba47e16bbd8ecfdc"
    },
    {
      logimage:metalogo,
      title: "Front-End Developer",
      issuer: "Coursera  Meta Certificated",
      link: "https://coursera.org/share/24cbee85c71c9ba974d3eba6b49d0ed7"
    },
    {
      logimage:metalogo,
      title: "Advanced React",
      issuer: "Coursera  Meta Certificated",
      link: "https://coursera.org/share/2eb54c0e52b805994485776ce99a92f3"
    },
    {
      logimage:LearnQuest,
      title: "Core Java",
      issuer: "Coursera  Meta Certificated",
      link: "https://coursera.org/share/5bb57525275fba4f05b1f49bd9cdc5a1"
    },
    {
      logimage:metalogo,
      title: "Version Control",
      issuer: "Coursera  Meta Certificated",
      link: "https://coursera.org/share/d1c8014216ff7eefc5d667590b9353e0"
    },
    {
      logimage:courseraprojectnetwork,
      title: "API Testing Postman",
      issuer: "Coursera  Meta Certificated",
      link: "https://coursera.org/share/fb10240e05ab96c20a41c7d10e996b32"
    },
    {
      logimage:LearnQuest,
      title: "SpringBoot",
      issuer: "Coursera  LearnQuest Certificated",
      link: "https://coursera.org/share/fe75e21c69ae701ad626e2a436ee24d7"
    },
    {
      logimage:metalogo,
      title: "MySQL",
      issuer: "Coursera  Meta Certificated",
      link: "https://coursera.org/share/1c60025f0b95de2170d04a2d9b81f12c"
    },
  ],
  // certificates Data -End-

  // Contact Data -Start-
  contact: {
    email: "ramkumar.rangaraj7@gmail.com",
    phone: "+91 99448 97180",
    address: "Coimbatore, Tamil Nadu, IN 641-302"
  }
  // Contact Data -End-
};

export default setData;
