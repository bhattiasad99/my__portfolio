import ReactIcon from "@/public/SkillsIcon/ReactIcon.png";
import ReactNativeIcon from "@/public/SkillsIcon/reactnative.png";
import NextIcon from "@/public/SkillsIcon/Next.png";
import JavascriptIcon from "@/public/SkillsIcon/Javascript.png";
import TypeScriptIcon from "@/public/SkillsIcon/typescript.png";
import RectanglePhoto from "@/public/HomePage/Rectangle.png";
import LernaLogo from "@/public/SkillsIcon/lerna-logo.png";
import StorybookIcon from "@/public/SkillsIcon/storybook-icon.svg";
import PwaIcon from "@/public/SkillsIcon/pwa.png";
import SqlIcon from "@/public/SkillsIcon/sql-server.png";
import MongodbIcon from "@/public/SkillsIcon/mongodb.png";
import NodeIcon from "@/public/SkillsIcon/node.png";
import NestIcon from "@/public/SkillsIcon/nest-icon.png";
import expressIcon from "@/public/SkillsIcon/express.png";
// import EmailIcon from "@mui/icons-material/Email";
import { GithubIcon, LinkedinIcon, Mail, PhoneIcon } from 'lucide-react';

// import PhoneIcon from "@mui/icons-material/Phone";
import { Phone } from 'lucide-react';
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MapPin } from 'lucide-react';
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Linkedin } from 'lucide-react';
// import GitHubIcon from "@mui/icons-material/GitHub";
import { Github } from 'lucide-react';
import SentraLogo from "@/public/Projects/SentraLogo.png";
import AqersLogo from "@/public/Projects/AqersLogo.png";
import BulkyLogo from "@/public/Projects/BulkyLogo.png";
import YamarLogo from "@/public/Projects/YamarLogo.png";
import AtomicLogo from "@/public/Projects/AtomicLogo.png";
import StoreWalkLogo from "@/public/Projects/StoreWalkLogo.png";
import TyftLogo from "@/public/Projects/TyftLogo.png";
import NomadiqLogo from "@/public/Projects/NomadiqLogo.png";
import DMVlogo from "@/public/Projects/dmvLogo.png";
import ElixirLogo from "@/public/Projects/ElixirLogo.png";
import ArtbotLogo from "@/public/Projects/ArtbotLogo.png";
import GraanaLogo from "@/public/Projects/GraanaLogo.png";
import GraanaApp from "@/public/Projects/GraanaApp.png";
import ZZdpUILogo from "@/public/Projects/ZdpUILogo.png";
import JobTaskLogo from "@/public/Projects/JobTaskLogo.png";
import FitnessAppLogo from "@/public/Projects/FitnessAppLogo.png";
import JobTaskApp from "@/public/Projects/JobTaskApp.png";
import QueryBuilder from "@/public/Projects/QueryBuilder.png";
import ReactCertificate from "@/public/HomePage/ReactCertificate.png";
import {
    CardDetailType,
    CertificateDataType,
    OverallProjectType,
    ProjectType,
    SkillArrType,
    SocialArrType,
} from "@/utils/types";

export const CardDetails: CardDetailType[] = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "Zones IT",
        timePeriod: "05/23 to Present",
        descriptionDetail: [
            "Developed a user-friendly Query Builder with drag-and-drop and expert modes for business analysts.",
            "Built an intuitive Drag and Drop Page Builder for creating customizable, data-driven templates.",
            "Utilized Lerna to create and publish multiple npm packages.",
            "Introduced a centralized ZDP-UI npm package with reusable components, ensuring design consistency across six apps.",
            "Created Storybook documentation to simplify component usage for developers.",
            "Developed CRUD APIs using NestJS and worked on email templates (HBS) with SendGrid, including design and setup.",
            "Redesigned ZDP dataflow and developed multiple UI modules (React TypeScript).",
            "Implemented unified authentication across apps using Keycloak.",
            "Automated bug detection and user stories using Cypress, enhancing testing efficiency and reducing manual effort.",
        ],
        image: RectanglePhoto,
        // images: [WebsiteIcon, WebsiteIcon],
        technologies: [
            "React",
            "Nest",
            "TypeScript",
            "Lerna",
            "Storybook",
            "KeyCloak",
            "Html/CSS",
            "SQL",
            "Cypress",
        ],
        description:
            "Senior Software Engineer at Zones IT: Developed drag-and-drop tools, reusable UI components, CRUD APIs, and unified authentication with Keycloak.",
        ProjectType: [OverallProjectType.FullStack, OverallProjectType.Website],
    },

    {
        id: 2,
        title: "SEO Technical Lead",
        company: "Graana",
        timePeriod: "05/22 to 05/23",
        descriptionDetail: [
            "Increased organic traffic from 400K to 1 million by leading technical SEO improvements.",
            "Redesigned the website to align with new Figma designs.",
            "Developed APIs and automation scripts using Node.js, improving performance and efficiency.",
            "Enhanced website and mobile view performance, achieving key milestones.",
            "Developed APIs and wrote automation scripts and Sitemaps using Node",
            "Led the SEO Technical team, improving performance and SEO ranking to attract more users.",
            "Implemented Cloudflare for redirect rules and worker scripts.",
        ],
        image: RectanglePhoto,
        // images: [WebsiteIcon, WebsiteIcon],
        technologies: ["Next", "Node", "React", "React Native", "Html/CSS"],
        description:
            "SEO Technical Lead at Graana: Increased organic traffic to 1M, redesigned website with Next.js, improved performance, developed APIs, and led SEO team to enhance ranking and user engagement.",
        ProjectType: [
            OverallProjectType.FullStack,
            OverallProjectType.Website,
            OverallProjectType.AndroidiOS,
        ],
    },
    {
        id: 3,
        title: "Software Engineer",
        company: "Elixir Technology",
        timePeriod: "12/19 to 04/22",
        descriptionDetail: [
            "Developed Tango Designer, creating advanced bill designs using React and Canvas.",
            "Built Storybook documentation and Tango Component Library for streamlined developer usage.",
            "Automated test cases using Puppeteer and worked on Java backend using factory design patterns.",
            "Fixed bugs and created APIs on the Java backend for Tango, utilizing the factory design pattern.",
            "Performed Scrum Master responsibilities and acted as Shift Lead for the Customer Migration Support team.",
        ],
        image: RectanglePhoto,
        images: [],
        technologies: [
            "React",
            "Canvas",
            "Storybook",
            "Puppeteer",
            "Java",
            "Html/CSS",
        ],
        description:
            "Software Engineer at Elixir Technology: Developed Tango Designer with React and Canvas, created Storybook documentation, built APIs, automated tests, and led Scrum teams while resolving bugs and enhancing system performance.",
        ProjectType: [OverallProjectType.FullStack, OverallProjectType.Website],
    },
    {
        id: 4,
        title: "MERN Stack Developer",
        company: "Artbot LLC",
        timePeriod: "08/19 to 12/19",
        descriptionDetail: [
            "Developed a platform similar to YouTube, enabling video uploads, earning, and streaming.",
            "Built and maintained backend APIs using Node Express.",
            "Implemented IPFS for cost-effective and efficient video storage using blockchain technology.",
            "Deployed the website on Digital Ocean and managed logs using Rancher.",
        ],
        image: RectanglePhoto,
        images: [],
        technologies: ["React", "Node", "Express", "IPFS", "Html/CSS"],
        description:
            "MERN Stack Developer at Artbot LLC: Developed a YouTube-like platform with React.js, built backend APIs with Node Express, implemented IPFS for video storage, and deployed on Digital Ocean with Rancher for DevOps.",
        ProjectType: [OverallProjectType.FullStack, OverallProjectType.Website],
    },
];

export const SkillArr: SkillArrType[] = [
    {
        id: 111,
        title: "React Icon",
        image: ReactIcon,
    },
    {
        id: 222,
        title: "React Native Icon",
        image: ReactNativeIcon,
    },
    {
        id: 333,
        title: "Next Icon",
        image: NextIcon,
    },
    {
        id: 444,
        title: "Javascript Icon",
        image: JavascriptIcon,
    },
    {
        id: 555,
        title: "Typescript Icon",
        image: TypeScriptIcon,
    },
    {
        id: 666,
        title: "Lerna Icon",
        image: LernaLogo,
    },
    {
        id: 777,
        title: "Storybook Icon",
        image: StorybookIcon,
    },
];

export const SkillArrSecond: SkillArrType[] = [
    {
        id: 888,
        title: "Progressive Web app",
        image: PwaIcon,
    },

    {
        id: 999,
        title: "SQL",
        image: SqlIcon,
    },
    {
        id: 1010,
        title: "MongoDb Icon",
        image: MongodbIcon,
    },
    {
        id: 1111,
        title: "Node Icon",
        image: NodeIcon,
    },
    {
        id: 1212,
        title: "Nest Icon",
        image: NestIcon,
    },
    {
        id: 1313,
        title: "Express Icon",
        image: expressIcon,
    },
];

// export const ProjectCardDetails: CardDetailType[] = ;

export const Socials: SocialArrType[] = [
    {
        id: 5000,
        value: "bhatti.asad99@gmail.com",
        title: "Email",
        image: (
            <Mail
                size={'24px'} />
        ),
        link: "mailto:bhatti.asad99@gmail.com",
    },

    {
        id: 5001,
        value: "+92 334 8506479",
        title: "Phone",
        image: (
            <PhoneIcon
                size={'24px'}
            />
        ),
        link: "https://wa.me/923450538250",
    },
    {
        id: 5002,
        value: "Pakistan",
        title: "Country",
        image: (
            <MapPin
                size={'24px'}
            />
        ),
        link: "#",
    },
    {
        id: 5003,
        value: "bhatti.asad99@gmail.com",
        title: "Linkedin",
        image: (
            <LinkedinIcon
                size={'24px'}
            />
        ),
        link: "https://www.linkedin.com/in/muhammad-usama-691699185/",
    },
    {
        id: 5004,
        value: "bhatti.asad99@gmail.com",
        title: "Github",
        image: (
            <GithubIcon
                size={'24px'}
            />
        ),
        link: "https://github.com/usama86",
    },
];

export const CertificateCardDetails: CertificateDataType[] = [
    {
        id: 1909,
        title: "React Js",
        image: ReactCertificate,
        link: "https://www.hackerrank.com/certificates/34855d16681c",
    },
];
///test
