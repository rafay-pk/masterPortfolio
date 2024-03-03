import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  projectsHeader,
} from "../../portfolio.js";
import "./Projects.css";
import "./TheRealProject.css";
import ProjectsImg from "./ProjectsImg";
import ProjectList from "./ProjectList";
import Tooltip from "../Tooltip/Tooltip";

const projects = [
  {
    title: 'Bank Information System',
    type: 'Semester Project - C++',
    description: 'I was the team lead dividing the work and then integrating it back into the complete program. I also wrote the filing part and the menu UI part of the program.',
    role: 'Team Lead',
    responsibilities: 'Dividing the work, integrating the program, writing filing part, writing menu UI part'
  },
  {
    title: 'PTCL Management System',
    type: 'Semester Project - MSSQL',
    description: 'A management system for telephone subscribers and their billing. I designed the project.',
    role: 'Project Designer',
    responsibilities: 'Designing the project'
  },
  {
    title: 'Transport Management System',
    type: 'Semester Project - C#, MSSQL',
    description: 'I helped in bugfixes in the code and the presentation of the final project.',
    role: 'Bugfix Contributor',
    responsibilities: 'Assisting in bugfixes, aiding in presentation'
  },
  {
    title: 'Flow Chart to Code',
    type: 'Semester Project - C++',
    description: 'A tool I wrote to convert simple Activity Flow Diagrams (Flow Charts) into C++ code.',
    role: 'Project Developer',
    responsibilities: 'Writing code for the tool'
  },
  {
    title: 'MyOLX',
    type: 'Semester Project - HTML, PHP, MySQL',
    description: 'A retail website. I helped with the backend that connected to the database.',
    role: 'Backend Developer',
    responsibilities: 'Developing backend connecting to database'
  },
  {
    title: 'Get an android camera to recognize a room',
    type: 'Final year project',
    description: 'I wrote the core in Matlab that saved room data and compared the new image from the camera to recognize which room it is in.',
    role: 'Core Developer',
    responsibilities: 'Writing core in Matlab, room data saving, image comparison'
  },
  {
    title: 'Class 500',
    type: 'Internship project',
    description: 'I was a tester. I used Microsoft Project and Excel sheets for managing, Mirantis for bug reporting and Photoshop to compare screen shots with mock-ups.',
    role: 'Tester',
    responsibilities: 'Using Microsoft Project, Excel sheets for managing, Mirantis for bug reporting, Photoshop for comparing screenshots'
  },
  {
    title: 'Alarm Buddy',
    type: 'Internship project',
    description: 'A shared alarm between friends. Except for UI image elements that a designed made for me, I coded all the rest.',
    role: 'Lead Developer',
    responsibilities: 'Coding all except UI image elements'
  },
  {
    title: 'Zakat and Ushr Calculator',
    type: 'Internship project',
    description: 'I made it alone to familiarize myself with Android development.',
    role: 'Sole Developer',
    responsibilities: 'Developing the entire project alone'
  },
  {
    title: 'Ayat-e-Qul',
    type: 'Android',
    description: 'Partnered with a UI designer to make a collection of Ayats starting with "Qul". Playable in multiple reciters and language translations.',
    role: 'Android Developer',
    responsibilities: 'Developing Android application, collaboration with UI designer'
  },
  {
    title: 'Broadband Remote Access Server',
    type: '',
    description: 'A PPPoE server and internet provider. I was part of the core team of developers.',
    role: 'Core Developer',
    responsibilities: 'Part of the core development team'
  },
  {
    title: 'Packet switch',
    type: '',
    description: 'A Layer 3 switch for fast traffic switching. I am a part of the core team of developers.',
    role: 'Core Developer',
    responsibilities: 'Part of the core development team'
  },
  {
    title: 'Call Capture',
    type: '',
    description: 'Lawful capturing of VoIP calls for analysis. I helped design some test-cases and set-up the local testing environment.',
    role: 'Test Case Designer',
    responsibilities: 'Designing test cases, setting up local testing environment'
  },
  {
    title: 'Encrypted Search',
    type: '',
    description: 'Research project in collaboration with CyberSecurity Students. I coded their ideas in C, C++ and Python and optimized and helped them integrate them into a single working solution.',
    role: 'Research Developer',
    responsibilities: 'Coding ideas, optimization, integration'
  }
];


const Project = ({ project }) => {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <h3>{project.type}</h3>
      <p><strong>Role:</strong> {project.role}</p>
      <p><strong>Responsibilities:</strong> {project.responsibilities}</p>
      <p>{project.description}</p>
    </div>
  );
};

class Projects extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          {/* <Fade top duration={2000} distance="40px"> */}
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
                <img src="http://ghchart.rshah.org/AbduSami-bK" alt="AbduSami-bK's Github chart" className="contrib" />
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom duration={2000} distance="40px">
          <div className="App">
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </Fade>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
