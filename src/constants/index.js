import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  cpp,
  reactjs,
  nodejs,
  mongodb,
  accenture,
  maps,
  redux,
  datavisualization,
  unity,
  unrealengine,
  blockchain,
  ethereum,
  solana,
  csharp,
  sodainmind,
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "conclusion",
    title: "Conclusion",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "blockchain",
    icon: blockchain,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "unrealengine",
    icon: unrealengine,
  },
  {
    name: "ethereum",
    icon: ethereum,
  },
  {
    name: "solana",
    icon: solana,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "DataVisualization",
    icon: datavisualization,
  },
  {
    name: "maps",
    icon: maps,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "3CON IT & DIGITAL",
    icon: sodainmind,
    iconBg: "#E6DEDD",
    date: "June 2006 - June 2016",
    points: [
      "Over 10 years of experience in Software engineering",
      "Experienced many types of softwares, programs, and website development",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "July 2016 - Present",
    points: [
      "Developed 2D/3D Games using Unity3D + Javascript/C#",
      "Sometimes Games are integrated to Android/iOS Mobile app games",
      "Working on Browser 2D/3D games using WebGL(three.js)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "So if you're in need of a web developer, look no further. This man is the hero Gotham deserves, and he'll make your website shine brighter than the Bat-Signal on a clear night.",
    name: "Bruce Wayne",
    designation: "CFO",
    company: "Wayne Enterprises, Inc.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "Dear fellow wizards and muggles, I am writing to share my experience working with an exceptional web developer. As many of you may know, he is a former Gryffindor Quidditch captain and a skilled web developer. Throughout the process, he was always available to answer our questions and address any concerns we had.",
    name: "Hermione Granger",
    designation: "CTO",
    company: "Hogwarts School of Witchcraft and Wizardrys",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial:
      "So if you need a web developer, this guy is the go-to guy. He's not like those other jabronis out there who overpromise and underdeliver. This guy delivers the goods, and he'll do it with a smile on his face. Trust me, you won't regret it.",
    name: "Anthony Soprano",
    designation: "COO",
    company: "Barone Sanitation",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const projects = [
  {
    name: "2D 3D room-decorator",
    description:
      "online tool that let users can easily configurate/layout their room. Support 2D drawing as well.",
    tags: [
      {
        name: "three.js",
        color: "gray-text-gradient",
      },
      {
        name: "next.js",
        color: "gray-text-gradient",
      },
      {
        name: "redux",
        color: "gray-text-gradient",
      },
      {
        name: "tailwind",
        color: "gray-text-gradient",
      },
    ],
    image: project_1,
    source_code_link:
      "https://github.com/SaketKothari/amazon-clone-ecommerce-webapp",
    live_code_link: "https://amazon-next-saketkothari.vercel.app/",
  },
  {
    name: "SGMA",
    description: "Wonderful 3D animation for puma shose",
    tags: [
      {
        name: "three.js",
        color: "gray-text-gradient",
      },
      {
        name: "react",
        color: "gray-text-gradient",
      },
    ],
    image: project_2,
    source_code_link: "https://github.com/SaketKothari/streamwave",
    live_code_link: "https://streamwave-sk.vercel.app/",
  },
  {
    name: "Web3 Solana mobile spinning betting game",
    description:
      "The game was made by Swift. The smart contract was developed by Anchor",
    tags: [
      {
        name: "swift",
        color: "gray-text-gradient",
      },
      {
        name: "anchor",
        color: "gray-text-gradient",
      },
      {
        name: "solana",
        color: "white-text-gradient",
      },
    ],
    image: project_3,
    source_code_link: "https://github.com/SaketKothari/tshirt-store-api",
    live_code_link: "https://tshirt-store.onrender.com/api-docs/",
  },
  {
    name: "Real-estate",
    description:
      "The backend was developed by Node.js & Express. The frontend was developed by Next.js/React. The state was managed by Redux. It was deployed on Firebase. It supports Stripe, Paypal and card as payment gateway methods",
    tags: [
      {
        name: "react",
        color: "gray-text-gradient",
      },
      {
        name: "next.js",
        color: "gray-text-gradient",
      },
      {
        name: "redux",
        color: "gray-text-gradient",
      },
      {
        name: "tailwind",
        color: "gray-text-gradient",
      },
      {
        name: "firebase",
        color: "gray-text-gradient",
      },
      {
        name: "webhooks",
        color: "gray-text-gradient",
      },
      {
        name: "stripe",
        color: "gray-text-gradient",
      },
      {
        name: "stripe",
        color: "gray-text-gradient",
      },
    ],
    image: project_4,
    source_code_link: "https://github.com/SaketKothari/API-Proxy-Server",
    live_code_link: "https://github.com/SaketKothari/API-Proxy-Server",
  },
  {
    name: "Sky fight",
    description: "The 3D game was developed by Unity",
    tags: [
      {
        name: "unity",
        color: "gray-text-gradient",
      },
    ],
    image: project_5,
    source_code_link: "https://github.com/SaketKothari/video-chat-app",
    live_code_link: "https://video-chat-webapp.vercel.app/",
  },
  {
    name: "Jackpot",
    description:
      "This game can run on Ethereum and Solana network. The smart contract was developed by Solidity and Anchor. The front-end was developed by Next.js/React. The back-end was developed by Node.js & Express",
    tags: [
      {
        name: "next.js",
        color: "gray-text-gradient",
      },
      {
        name: "redux",
        color: "gray-text-gradient",
      },
      {
        name: "ethereum",
        color: "gray-text-gradient",
      },
      {
        name: "solana",
        color: "gray-text-gradient",
      },
      {
        name: "solidity",
        color: "gray-text-gradient",
      },
      {
        name: "anchor",
        color: "gray-text-gradient",
      },
    ],
    image: project_6,
    source_code_link: "https://github.com/SaketKothari/postman-clone",
    live_code_link: "https://github.com/SaketKothari/postman-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
