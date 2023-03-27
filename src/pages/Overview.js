import Resume from '../components/Resume';
import { AppBar, Toolbar, Typography } from '@mui/material';

const resumeData = {
    name: `Conleth Kennedy`,
    title: `Lead Full Stack Engineer`,
    summary: `I am an accomplished IT professional with over 8 years of experience in software engineering, automation testing, system integration, and databases. My current focus is on C#/JS applications in the cloud, and I am passionate about solving complex problems in this area. I have strong skills in API and distributed application development, and I am committed to delivering high-quality results. I am a dependable team player who can adapt quickly to new environments and technologies. I am experienced in managing teams and mentoring junior developers, and I take pride in delivering successful projects on time and within budget. My experience in both start-up and enterprise environments has given me a unique perspective on development practices and the importance of agile methodologies.`,
    experience: [
        {
            company: `Forward Security`,
            position: `Lead Full Stack Engineer`,
            date: `May 2022 - Present`,
            description: `I lead the organization' commercial product offering via the Azure marketplace, focusing on leading SDLC practices and a beta release of the software suite around SAST, SCA, DAST, Cloud, and Secret scanners. Managed three engineers from an HR perspective`,
            achievements: []
        },
        {
            company: `Unum Ireland`,
            position: `Full Stack Developer II`,
            date: `January 2021 - May 2022`,
            description: `I worked as a lead developer in Unum' innovation team, in a hands-on/consultancy role developing microservices architecture for an AI project. I worked closely with a principal engineer and a company that provided data science expertise to semi-automate the STD claims process...`,
            achievements: []
        }
    ],
    education: [
        {
            institution: `Carlow IT`,
            degree: `Bachelor of Honours in Software Development`,
            date: `Summer 2020`,
            description: `Thesis was based on different methods of integration in an enterprise.`
        }
    ],
    skills: [
        `Node.js`,
        `React.js`,
        `Ruby`,
        `Python`,
        `C#`,
        `Selenium`,
        `Jest`,
        `PostgreSQL`,
        `Cassandra`,
        `GitHub Actions`,
        `Azure DevOps`,
        `Jenkins`,
        `Azure Marketplace`,
        `Docker`,
        `GraphQL`
    ]
};


function Overview() {
    return (
        <div>
                <Resume resumeData={resumeData} />
        </div>
    );
}

export default Overview;