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
            link: "https://blog.sebastianaldi.com/",
            buttonText: "My blog"
        }
    ],
    workExperience: [
        [new Date(2021, 2), new Date(2024, 7)],
        [new Date(2024, 9), new Date()],
    ],
    about: [
        "When I was a kid, I liked to play video games. I thought to myself, since I enjoy video games, I should enjoy creating games! I was naïve, but I'm still grateful that I ended up becoming a programmer.",
        "I do still wish to make my own game someday, I've learned C# and Unity but finding an idea and any required assets would prove to be the hardest challenge.",
        "I am open to learn anything that is required for my daily work, may it be frontend development, DevOps, cloud engineering, or anything else.",
        "I have a strong sense of responsibility and ownership over my work, and I am always looking for ways to improve my skills and knowledge.",
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
            boldText: "Software Engineer - Fullstack @ Cosmart",
            normalText: "Designed, developed and maintained various interfaces and microservices for order creation & lifecycle.",
            chips: ["TypeScript", "NestJS", "Golang", "PostgreSQL", "RabbitMQ", "AWS", "GCP", "Terraform", "Docker", "React.js", "Tailwind", "Next.js"]
        },
        {
            header: "March 2021 - August 2024",
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
                sectionName: "Programming languages",
                skills: [
                    {
                        skillName: "Golang",
                        isProfessional: true,
                    },
                    {
                        skillName: "Typescript",
                        isProfessional: true,
                    },
                    {
                        skillName: "Python",
                        isProfessional: false,
                    },
                    {
                        skillName: "Java",
                        isProfessional: false,
                    },
                ]
            },
            {
                sectionName: "Backend frameworks",
                skills: [
                    {
                        skillName: "NestJS",
                        isProfessional: true,
                    },
                    {
                        skillName: "Spring",
                        isProfessional: false,
                    },
                ]
            },
            {
                sectionName: "Databases",
                skills: [
                    {
                        skillName: "PostgreSQL",
                        isProfessional: true,
                    },
                    {
                        skillName: "MySQL",
                        isProfessional: true,
                    },
                    {
                        skillName: "Redis",
                        isProfessional: true,
                    },
                    {
                        skillName: "Cassandra",
                        isProfessional: false,
                    },
                    {
                        skillName: "Firestore",
                        isProfessional: false,
                    },
                ]
            },
            {
                sectionName: "Message queues",
                skills: [
                    {
                        skillName: "NSQ",
                        isProfessional: true,
                    },
                    {
                        skillName: "RabbitMQ",
                        isProfessional: true,
                    },
                ]
            },
            {
                sectionName: "Cloud",
                skills: [
                    {
                        skillName: "AWS",
                        isProfessional: true,
                    },
                    {
                        skillName: "GCP",
                        isProfessional: true,
                    },
                    {
                        skillName: "Terraform",
                        isProfessional: true,
                    },
                ]
            },
            {
                sectionName: "Monitoring",
                skills: [
                    {
                        skillName: "NewRelic",
                        isProfessional: true,
                    },
                    {
                        skillName: "Datadog",
                        isProfessional: true,
                    },
                ]
            },
            {
                sectionName: "Frontend",
                skills: [
                    {
                        skillName: "React",
                        isProfessional: true,
                    },
                    {
                        skillName: "Next.js",
                        isProfessional: true,
                    },
                    {
                        skillName: "Tailwind",
                        isProfessional: true,
                    },
                    {
                        skillName: "Material UI",
                        isProfessional: false,
                    },
                    {
                        skillName: "Vue",
                        isProfessional: false,
                    },
                    {
                        skillName: "Expo",
                        isProfessional: false,
                    },
                ]
            },
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
        // life
        {
            author: "Marthe Troly-Curtin",
            quote: "Time you enjoy wasting is not wasted time.",
        },
        {
            author: "Steve Jobs",
            quote: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
        },
        // programming
        {
            author: "Felienne Hermans",
            quote: "Confusion is part of programming."
        },
        {
            author: "Arthur C. Clarke",
            quote: "Any sufficiently advanced technology is indistinguishable from magic."
        },
        // friendship
        {
            author: "Edna Buchanan",
            quote: "Friends are the family we choose for ourselves."
        },
        {
            author: "Misty Copeland",
            quote: "Anything is possible when you have the right people there to support you."
        },
        // learning
        {
            author: "Benjamin Franklin",
            quote: "Tell me and I forget, teach me and I may remember, involve me and I learn."
        },
        {
            author: "Anthony J. D'Angelo",
            quote: "Develop a passion for learning. If you do, you will never cease to grow."
        },
        // fiction
        {
            author: "Lamb",
            quote: "Tomorrow is a hope, never a promise.",
        },
        {
            author: "Saitama",
            quote: "I'll leave tomorrow's problems to tomorrow's me.",
        },
    ]
}