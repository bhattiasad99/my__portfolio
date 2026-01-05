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
import {
    CardDetailType,
    OverallProjectType,
    ProjectType,
} from "@/utils/types";

type DataType = {
    name: string;
    designation: string;
    profileImage: string;
    subTitle: string;
    description: React.ReactNode;
    office: string;
    responseTime: string;
    callWindow: string;
    calendlyUrl: string;
    projects: CardDetailType[];
    jobExperience?: JobEntry[];
}


type JobPosition = {
    title: string;
    period: string;
    summary: string;
};

type JobEntry = {
    id: string;
    company: string;
    location: string;
    title: string;
    labelSubtitle?: string;
    period: string;
    summary: string;
    highlights: string[];
    positions?: JobPosition[];
};

export const DATA: DataType = {
    name: "Asad Z. Bhatti",
    designation: "Full-Stack Developer",
    profileImage: '/HomePage/ProfilePic.jpg',
    subTitle: 'I\'m a Software Engineer.',
    description: <>
        <p>Software Developer & Team Lead at Ziel Global Ltd.</p>
        <p>
            Senior full-stack engineer specializing in building and scaling SaaS platforms using React, Next.js, NestJS, TypeScript, and AWS.
            Strong expertise in system design, performance, security, and end-to-end delivery, from architecture to CI/CD and production reliability.
            Experienced in leading teams, shipping scalable products, and turning complex business needs into clean, maintainable software.
        </p>
    </>,
    office: "Islamabad, PK - Remote worldwide",
    responseTime: "Within 2 business days",
    callWindow: "Mon-Fri, 7am - 12pm (Eastern Time Zone)",
    calendlyUrl: "https://calendly.com/bhatti-asad99/intro-call",
    projects: [
        {
            id: 1909,
            title: "Query Builder",
            company: "Zones",
            timePeriod: "",
            descriptionDetail: [
                "Developed a user-friendly Query Builder with drag-and-drop for business analysts.",
            ],
            links: {
                videoUrl:
                    "https://www.loom.com/share/bcec05bdb4cc4561b1cde5c74a83d6ba?sid=93cea8b3-6f9b-449b-af21-c9306253b38b",
                videoType: "loom",
            },
            images: [QueryBuilder],
            // images: [WebsiteIcon, WebsiteIcon],
            technologies: ["React", "Material UI", "Nest TS", "Graphql", "Html/CSS"],
            description:
                "Developed a user-friendly Query Builder with drag-and-drop for business analysts.",
            ProjectType: [OverallProjectType.FullStack, OverallProjectType.Website],
        },
        {
            id: 2012,
            title: "Graana (Real Estate)",
            company: "Graana",
            timePeriod: "",
            descriptionDetail: [
                "Increased organic traffic from 400K to 1 million by leading technical SEO improvements.",
                "Redesigned the website to align with new Figma designs.",
                "Developed APIs and automation scripts using Node.js, improving performance and efficiency.",
                "Enhanced website and mobile view performance, achieving key milestones.",
                "Developed APIs and wrote automation scripts and Sitemaps using Node",
                "Led the SEO Technical team, improving performance and SEO ranking to attract more users.",
                "Implemented Cloudflare for redirect rules and worker scripts.",
            ],
            links: {
                webLink: [
                    {
                        type: ProjectType.Website,
                        link: "https://www.graana.com/",
                        id: 5550,
                        hoverText: "React Js",
                    },
                ],

                videoUrl:
                    "https://www.loom.com/share/8102115876f2471fb1fcf41763aeee23?sid=d3d23830-bace-4af0-abf2-69948edd9041",
                videoType: "loom",
            },
            images: [GraanaLogo, GraanaApp],
            // images: [WebsiteIcon, WebsiteIcon],
            technologies: ["Next", "Node", "React", "React Native", "Html/CSS"],
            description:
                "Graana.com is Pakistan's first online real estate marketplace, offering verified property listings for buying, selling, and renting across major cities. ",
            ProjectType: [OverallProjectType.FullStack, OverallProjectType.Website],
        },
        {
            id: 2013,
            title: "ZDP Components Library",
            description:
                "A reusable component library built with MUI, managed via Lerna and documented in Storybook.",
            descriptionDetail: [
                "Created and maintained 40+ base components with MUI.",
                "Managed multiple packages using Lerna.",
                "Used Storybook for live component previews and documentation.",
                "Components reused across 5 different apps.",
            ],
            images: [ZZdpUILogo],
            technologies: ["React", "MUI", "Lerna", "Storybook"],
            company: "Zones",
            timePeriod: "",
            links: {
                videoUrl:
                    "https://www.loom.com/share/2ae08c108cf34075b6237d111f1a709d?sid=df122629-51c1-49c6-900e-a56b967afc2b",
                videoType: "loom",
            },
            ProjectType: [OverallProjectType.Website],
        },
        {
            id: 1999,
            title: "Aqers",
            description:
                "Aqers is a comprehensive property search platform designed to cater to the needs of buyers and sellers alike.",

            descriptionDetail: [
                "Developed in Next.js.",
                "Property search website displaying properties with filters.",
                "Includes portals for buyers and sellers.",
            ],
            images: [AqersLogo],
            technologies: ["Next.js"],
            company: "Free lance",
            timePeriod: "",
            links: {
                webLink: [
                    {
                        type: ProjectType.Admin,
                        link: "https://aqers.vercel.app/",
                        id: 3701,
                        hoverText: "React Js",
                    },
                ],

                videoUrl: "https://www.loom.com/share/f4283465c1cc472787f775fb98222654",
                github: [
                    {
                        type: ProjectType.Website,
                        link: "https://github.com/usama86/aqers",
                        id: 3702,
                        hoverText: "React Js",
                    },
                ],
                videoType: "loom",
            },
            ProjectType: [OverallProjectType.Website],
        },
        {
            id: 2008,
            title: "Yamar",
            description: "Single-page app providing company information.",
            descriptionDetail: ["Single-page app providing company information."],
            images: [YamarLogo],
            technologies: ["React", "Next"],
            company: "Free lance",
            timePeriod: "",
            links: {
                webLink: [
                    {
                        type: ProjectType.Admin,
                        link: "https://yamar.vercel.app/",
                        id: 3901,
                        hoverText: "Next",
                    },
                ],

                videoUrl: "https://www.loom.com/share/e6e59d5143694459820c390d7b58e83c",
                github: [
                    {
                        type: ProjectType.Website,
                        link: "https://github.com/usama86/Yamar-Web-App",
                        id: 3902,
                        hoverText: "React Js",
                    },
                ],
                videoType: "loom",
            },
            ProjectType: [OverallProjectType.Website],
        },
        {
            id: 2001,
            title: "Bulky",
            description:
                "Delivery service platform for TVs, furniture, and appliances.",
            descriptionDetail: [
                "Delivery service platform for TVs, furniture, appliances, etc.",
                "Developed in Next.js.",
            ],
            images: [BulkyLogo],
            technologies: ["Next.js"],
            company: "Free lance",
            timePeriod: "",
            links: {
                webLink: [
                    {
                        type: ProjectType.Admin,
                        link: "https://bulky-peach.vercel.app/",
                        id: 3801,
                        hoverText: "React Js",
                    },
                ],

                videoUrl: "https://www.loom.com/share/9929153d65c14a0684446e0978f0f60e",
                github: [
                    {
                        type: ProjectType.Website,
                        link: "https://github.com/usama86/Bulky",
                        id: 3802,
                        hoverText: "React Js",
                    },
                ],
                videoType: "loom",
            },
            ProjectType: [OverallProjectType.Website],
        },
        {
            id: 2009,
            title: "Sentrataiment",
            description: "Streaming app for movies, music, and food ordering.",
            descriptionDetail: [
                "A movie and music streaming app with food ordering.",
                "Developed using React Native, React (admin panel), and Node Express.",
            ],
            links: {
                webLink: [
                    {
                        type: ProjectType.Admin,
                        link: "https://sentratainment.vercel.app/",
                        id: 3601,
                        hoverText: "React Js",
                    },
                ],

                videoUrl:
                    "https://www.loom.com/share/d4927d3fc9214f38bcebdf327604ac3e?sid=1deb6c6e-a07c-4454-8c70-cd977edf3d0f",
                github: [
                    {
                        type: ProjectType.Admin,
                        link: "https://github.com/usama86/sentratainment",
                        id: 3501,
                        hoverText: "React Js",
                    },
                    {
                        type: ProjectType.Mobile,
                        link: "https://github.com/usama86/Sentratainment-Travel-App",
                        id: 3502,
                        hoverText: "React Native",
                    },
                    {
                        type: ProjectType.Backend,
                        link: "https://github.com/usama86/Sentertainment-backend",
                        id: 3503,
                        hoverText: "Node Express",
                    },
                ],
                videoType: "loom",
            },
            images: [SentraLogo],
            technologies: ["React Native", "React", "Node Express"],
            company: "Free lance",
            timePeriod: "",
            ProjectType: [
                OverallProjectType.Website,
                OverallProjectType.FullStack,
                OverallProjectType.AndroidiOS,
            ],
        },
        {
            id: 20100,
            title: "Elixir Tango+",
            description:
                "Elixir Tango+ is a SaaS platform for designing, generating, and managing data-driven documents and workflows.",
            descriptionDetail: [
                "Elixir Tango+ is a SaaS Platform for Customer Communications that Fully Empowers Non-technical Users.",
                "It is a complete end to end document generating solution that is used to Conceptualise, design and communicate  workflows and data driven documents to end users in real time as well as support the full print workflow.",
            ],
            links: {
                webLink: [
                    {
                        type: ProjectType.Website,
                        link: "https://elixir.com/product",
                        id: 5555,
                        hoverText: "React Js",
                    },
                ],

                videoUrl: "1_EhyjcX0WAGXSA07xCyCFzzS_VfudBv1",
                videoType: "googleDrive",
            },
            images: [ElixirLogo],
            technologies: [
                "React",
                "Canvas",
                "Storybook",
                "Puppeteer",
                "Java",
                "Html/CSS",
            ],
            company: "Elixir Technologies",
            timePeriod: "",
            ProjectType: [OverallProjectType.Website, OverallProjectType.FullStack],
        },
        {
            id: 2011,
            title: "Artbot",
            description:
                "Built a YouTube-like platform with video uploads, earnings, IPFS storage, and Node.js backend, deployed on Digital Ocean with Rancher logs.",
            descriptionDetail: [
                "Developed a platform similar to YouTube, enabling video uploads, earning, and streaming.",
                "Built and maintained backend APIs using Node Express.",
                "Implemented IPFS for cost-effective and efficient video storage using blockchain technology.",
                "Deployed the website on Digital Ocean and managed logs using Rancher.",
            ],

            images: [ArtbotLogo],
            technologies: ["React", "Node", "Express", "IPFS", "Html/CSS"],
            company: "Artbot",
            timePeriod: "",
            ProjectType: [OverallProjectType.FullStack, OverallProjectType.Website],
        },
        {
            id: 2000,
            title: "JobTask",
            description: "Service ordering platform for ordering various services.",
            descriptionDetail: [
                "Service ordering platform where users can order various services.",
                "Developed frontend in Next.js, application on React Native, and backend in Node Express.",
            ],
            images: [JobTaskLogo, JobTaskApp],
            technologies: ["Next.js", "React Native", "Node Express"],
            company: "Free lance",
            timePeriod: "",
            links: {
                videoUrl: "1jNTe1czXnS2xZpKDQoAzWaYydrLWtxhR",
                videoType: "googleDrive",
            },
            ProjectType: [
                OverallProjectType.FullStack,
                OverallProjectType.Website,
                OverallProjectType.AndroidiOS,
            ],
            //https://drive.google.com/file/d/1jNTe1czXnS2xZpKDQoAzWaYydrLWtxhR/view?usp=sharing
        },
        {
            id: 2069,
            title: "dmv-ez",
            description:
                "A platform that streamlines the driver's license application process across US states",
            descriptionDetail: [
                "A platform that streamlines the driver's license application process across US states",
                "Developed using React",
            ],
            links: {
                videoUrl:
                    "https://www.loom.com/share/7c9711683ad64ae2aa2ce41a04703410?sid=5b586b2e-8397-449e-be0c-d779478155be",
                videoType: "loom",
            },
            images: [DMVlogo],
            technologies: ["React"],
            company: "Free lance",
            timePeriod: "",
            ProjectType: [OverallProjectType.Website],
        },
        {
            id: 2003,
            title: "Atomic Vault UI Admin Side",
            description:
                "Stock admin panel with CRUD functionality and API integration.",
            descriptionDetail: [
                "Developed stock admin panel with CRUD functionality.",
                "Implemented API integration using MERN stack.",
            ],
            images: [AtomicLogo],
            technologies: ["React"],
            company: "Free lance",
            timePeriod: "",
            links: {
                videoUrl: "https://www.loom.com/share/053e8a6b2f0c48b3927d62ea57230963",
                github: [
                    {
                        type: ProjectType.Website,
                        link: "https://github.com/usama86/atomic-mine",
                        id: 3804,
                        hoverText: "React Js",
                    },
                ],
                videoType: "loom",
            },
            ProjectType: [OverallProjectType.Website],
        },
        {
            id: 2006,
            title: "Store Walk (Progressive Web App)",
            description: "Progressive web app replicating Google Form logic.",
            descriptionDetail: [
                "MERN stack app with Material UI.",
                "Replicated Google Form logic and emailed responses as PDFs.",
            ],
            images: [StoreWalkLogo],
            technologies: ["MERN", "Material UI"],
            company: "Free lance",
            timePeriod: "",
            ProjectType: [OverallProjectType.FullStack, OverallProjectType.Website],
        },

        // {
        //   id: 2004,
        //   title: "Grab-A-Bite",
        //   description: "Food delivery app similar to Food Panda with admin panel.",
        //   descriptionDetail: [
        //     "Cross-platform food delivery application similar to Food Panda.",
        //     "Developed with MERN and React Native.",
        //     "Admin panel developed using Next.js.",
        //   ],
        //   images: [WebsiteIcon, WebsiteIcon],
        //   technologies: ["MERN", "React Native", "Next.js"],
        //   company: "Free lance",
        //   timePeriod: "",
        // },
        {
            id: 2005,
            title: "TYFT (Find Food Truck Application)",
            description:
                "App for finding food trucks, ordering food, and managing registrations.",
            descriptionDetail: [
                "Cross-platform app to find food trucks, order food, and manage registrations.",
                "Developed using MERN and React Native.",
            ],
            images: [TyftLogo],
            technologies: ["MERN", "React Native"],
            company: "Free lance",
            timePeriod: "",
            links: {
                webLink: [
                    {
                        type: ProjectType.Mobile,
                        link: "https://apps.apple.com/pk/app/tyft/id6739187254",
                        id: 3901,
                        hoverText: "App Store",
                    },
                ],

                videoUrl: "1qaVeI9WgAUh9X_EY26OyFfPbmAwB6dV4",
                github: [
                    {
                        type: ProjectType.Mobile,
                        link: "https://github.com/usama86/tyft",
                        id: 3699,
                        hoverText: "React Native",
                    },
                    {
                        type: ProjectType.Admin,
                        link: "https://github.com/usama86/tyft-website",
                        id: 3698,
                        hoverText: "React Js",
                    },

                    {
                        type: ProjectType.Backend,
                        link: "https://github.com/usama86/Tyft_backend",
                        id: 3697,
                        hoverText: "Node Express",
                    },
                ],
                videoType: "googleDrive",
            },
            ProjectType: [
                OverallProjectType.FullStack,
                OverallProjectType.Website,
                OverallProjectType.AndroidiOS,
            ],
        },

        {
            id: 2010,
            title: "Nomadiq",
            description:
                "A platform centralizing resident operations like rent payments and maintenance requests.",
            descriptionDetail: [
                "A platform centralizing resident operations like rent payments and maintenance requests.",
                "Developed using React Native, React (admin panel), and Node Express.",
            ],
            links: {
                videoUrl: "1zVA-jtxaXmz7v1rM996F0MFZmm7JTSQ1",
                videoType: "googleDrive",
            },
            images: [NomadiqLogo],
            technologies: ["React Native", "React", "Node Express"],
            company: "Free lance",
            timePeriod: "",
            ProjectType: [OverallProjectType.AndroidiOS],
        },
        {
            id: 2002,
            title: "Fitness App (Block App)",
            description: "Fitness app for athletes to create diet and workout plans.",
            descriptionDetail: [
                "Developed for athletes to create custom diet and workout plans tailored to events they register for.",
                "Used React Native and React Node Express.",
            ],
            images: [FitnessAppLogo],
            technologies: ["React Native", "React", "Node Express"],
            company: "Free lance",
            timePeriod: "",
            ProjectType: [OverallProjectType.AndroidiOS],
        },
    ],
    jobExperience: [
        {
            id: "ziel-global",
            company: "Ziel Global",
            location: "Islamabad, Pakistan - Hybrid",
            title: "Senior Software Developer",
            labelSubtitle: "Senior Software Developer",
            period: "2021 - Present",
            summary:
                "Led architecture and development of enterprise-grade ERPs, internal platforms, and AI-driven applications with a focus on clean architecture, real-time functionality, and measurable performance gains.",
            highlights: [
                "Built scalable systems serving 20K+ monthly users with 90+ Lighthouse scores and sub-2s page loads.",
                "Engineered NestJS microservices with REST/GraphQL, PostgreSQL, Redis, and WebSockets.",
                "Delivered AI-assisted features that improved efficiency and decision-making.",
                "Implemented CI/CD pipelines, containerized deployments, and automated testing.",
                "Developed shared permissions packages for dynamic RBAC across teams.",
            ],
            positions: [
                {
                    title: "Senior Software Developer",
                    period: "Nov 2024 - Present",
                    summary:
                        "Led architecture and delivery of ERPs, internal platforms, and AI-driven tools using Next.js, React, NestJS, Stripe, Recurly, and PostgreSQL.",
                },
                {
                    title: "Engineering Operations Manager",
                    period: "Jan 2023 - Nov 2024",
                    summary:
                        "Oversaw cross-functional delivery, defined engineering KPIs, and drove CI/CD, QA automation, and release governance.",
                },
                {
                    title: "Frontend Developer",
                    period: "Mar 2022 - Jan 2023",
                    summary:
                        "Built responsive, component-based UIs in React and improved performance with code splitting and accessibility best practices.",
                },
            ],
        },
        {
            id: "nisa-nursing-home",
            company: "Nisa Nursing Home",
            location: "Adyala Road, Rawalpindi - Hybrid",
            title: "Technical Consultant",
            labelSubtitle: "Technical Consultant",
            period: "Nov 2021 - Jun 2025",
            summary:
                "Engineered a custom ERP platform that unified hospital departments and improved PHC compliance from 52% to 93%.",
            highlights: [
                "Architected a full-stack ERP with NestJS, React, and PostgreSQL.",
                "Implemented real-time workflows with WebSockets and Redis.",
                "Built RBAC, audit trails, SOP monitoring, and risk dashboards.",
                "Delivered executive reporting for compliance metrics and KPIs.",
            ],
        },
        {
            id: "software-apprenticeship",
            company: "Software Apprenticeship",
            location: "Islamabad, Pakistan",
            title: "Full Stack Developer",
            labelSubtitle: "Full Stack Developer",
            period: "Apr 2021 - Feb 2022",
            summary:
                "Built a stock brokerage admin panel and delivered a TypeScript Express backend for a fitness app with structured data planning.",
            highlights: [
                "Built a stock brokerage admin panel with MERN and Material UI.",
                "Delivered a TypeScript Express backend for a mobile fitness app.",
                "Designed ERDs and automated Excel-to-plan workflows.",
            ],
        },
    ]
}