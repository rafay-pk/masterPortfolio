import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import Tooltip from "../Tooltip/Tooltip";


const SkillsShowcase = () => {
  // Here you can define your skills and their ratings
  const technical_skills = [
    { name: 'C', rating: 8 },
    { name: 'C++', rating: 7 },
    { name: 'C#', rating: 5 },
    { name: 'Objective-C', rating: 3 },
    { name: 'Bash', rating: 8 },
    { name: 'Python', rating: 7 },
    { name: 'GoLang', rating: 5 },
    { name: 'Java', rating: 4 },
    { name: 'JavaScript', rating: 4 },
    { name: 'PHP', rating: 2 },
    { name: 'SQL', rating: 9 },
    { name: 'MATLAB', rating: 5 },
    { name: 'HTML', rating: 7 },
    { name: 'XML', rating: 7 },
    { name: 'PDE X', rating: 3 },
    { name: 'P4', rating: 2 },
    { name: 'MIPS Assembly', rating: 2 },
    { name: 'Intel x86 Assembly', rating: 3 },
  ];
  const interpersonal_skills = [
    { name: 'Analytical', rating: 8 },
    { name: 'Problem Solving', rating: 7 },
    { name: 'Flexibility', rating: 6 },
    { name: 'Documentation', rating: 7 },
    { name: 'Leadership', rating: 3 },
    { name: 'Collaboration', rating: 4 },
    { name: 'Creativity', rating: 9 },
    { name: 'Mathematics', rating: 7 },
    { name: 'Management', rating: 5 },
  ];
  const language_skills = [
    { name: 'English', rating: 6 },
    { name: 'Urdu', rating: 7 },
    { name: 'Punjabi', rating: 5 },
    { name: 'Arabic', rating: 2 },
  ]
  return (
    <div className="skills-showcase">
      <div className="left-section">
        <h3 className="skills-heading-text">My Technical Skills</h3>
        <div className="skills-list">
          {technical_skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-rating">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`skill-rating-bar ${i < skill.rating ? 'filled' : ''
                      }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="right-subsection">
          <h3 className="skills-heading-text">My Interpersonal Skills</h3>
          <div className="skills-list">
            {interpersonal_skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-rating">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`skill-rating-bar ${i < skill.rating ? 'filled' : ''
                        }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-subsection">
          <h3 className="skills-heading-text">My Languages</h3>
          <div className="skills-list">
              {language_skills.map((skill, index) => (
                <div key={index} className="skill">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-rating">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`skill-rating-bar ${i < skill.rating ? 'filled' : ''
                          }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Fade right duration={2000} distance="40px">
          <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        </Fade>
        <Fade bottom duration={2000} distance="40px">
          <SkillsShowcase /> {/* Add this line */}
        </Fade>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
