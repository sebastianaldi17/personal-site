import { faGithub, faInstagram, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faMusic } from "@fortawesome/free-solid-svg-icons";

export const Data: {
    heroProjects: { icon: IconDefinition, link: string, buttonText: string }[],
    workExperience: [Date, Date][],
    about: string[],
    socials: { icon: IconDefinition, link: string }[],
    timeline: {
        header: string,
        boldText: string,
        normalText: string,
        chips: string[],
    }[],
    skills: {
        sections: {
            sectionName: string,
            skills: {
                skillName: string,
                isProfessional: boolean,
            }[]
        }[]
    },
    quotes: {
        author: string,
        quote: string,
    }[],
} = {
    heroProjects: [
        {
            icon: faBlog,
            link: "https://basblog.netlify.app/",
            buttonText: "My blog"
        },
        {
            icon: faMusic,
            link: "https://maichartlist.netlify.app/",
            buttonText: "MaiChartList"
        }
    ],
    workExperience: [
        [new Date(2021, 2, 28), new Date(2024, 7, 2)],
        [new Date(2024, 9, 28), new Date()],
    ],
    about: [
        "I started my programming journey on the year 2017. The last 2 digits of that year is the reason for my GitHub username.",
        "When I was a kid, I liked to play video games. I thought to myself, since I enjoy video games, I should enjoy creating games! I was naïve, but at least I do enjoy programming.",
        "I became a backend developer because I hated making user interfaces, but that won't stop me from learning frontend development. As a matter of fact, this site is made using React and Tailwind."
    ],
    socials: [
        {
            icon: faGithub,
            link: "https://github.com/sebastianaldi17/",
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/sebastianaldi17/",
        },
        {
            icon: faInstagram,
            link: "https://www.instagram.com/bas_or_aldi/",
        },
    ],
    timeline: [
        {
            header: "October 2024 - Present",
            boldText: "Software Engineer - Backend @ Cosmart",
            normalText: "Designed, developed and maintained microservices for order creation & lifecycle.",
            chips: ["TypeScript", "NestJS", "Golang", "PostgreSQL", "RabbitMQ", "AWS", "Docker"]
        },
        {
            header: "April 2021 - August 2024",
            boldText: "Software Engineer - Backend @ Tokopedia",
            normalText: "Developed and managed microservices related to live stream creation and management.",
            chips: ["Golang", "GRPC", "PostgreSQL", "NSQ", "GCP", "Docker", "New Relic"]
        },
        {
            header: "August 2017 - July 2021",
            boldText: "Bachelor of Computer Science @ Universitas Pelita Harapan",
            normalText: "Assisted a lecturer in smart classroom research, participated in programming competitions, joined various organizations, and graduated with 3.71 GPA.",
            chips: ["Python", "JavaScript", "Java", "MySQL"]
        },
    ],
    skills: {
        sections: [
            {
                sectionName: "Languages",
                skills: [
                    {
                        skillName: "Indonesian",
                        isProfessional: true,
                    },
                    {
                        skillName: "English",
                        isProfessional: true,
                    },
                    {
                        skillName: "Japanese",
                        isProfessional: false,
                    },
                ]
            },
        ]
    },
    quotes: [
        {
            author: "Lamb",
            quote: "Tomorrow is a hope, never a promise.",
        },
        {
            author: "",
            quote: "Memento mori, memento vivere."
        },
    ]
}