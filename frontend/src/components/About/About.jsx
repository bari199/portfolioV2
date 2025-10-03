import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
      {/* Title */}
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme_pattern"/>
      </div>

      {/* Sections */}
      <div className='about-sections'>
        <div className="about-left">
            <img src={profile_img} alt="profile_img"/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima possimus id sed iure rem pariatur sit vitae sint voluptatibus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, beatae laborum asperiores nobis voluptatibus dolore possimus inventore.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>Next Js</p><hr style={{width:"50%"}} />
                </div>
            </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
          <div className="about-achievement">
              <h1>10+</h1>
              <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="about-achievement">
              <h1>90+</h1>
              <p>PROJECTS COMPLETED</p>
          </div>
          <div className="about-achievement">
              <h1>15+</h1>
              <p>HAPPY CLIENTS</p>
          </div>
      </div>
    </div>
  )
}

export default About
