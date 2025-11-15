import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Team.css'

function Team() {
  const teamMembers = [
    {
      name: 'Aljay Ganoria ',
      role: 'Project Manager | Lead Developer | UI/UX Designer & Technical Writer',
      image: '/assets/img/jay.png',
      description: 'Oversees project management, leads software development across frontend and backend systems, designs user interfaces, and creates comprehensive technical documentation for the EcoSprinkle platform.',
      social: {
        github: 'seirrozyx11',
        linkedin: '#',
        email: 'aljayganoria13@gmail.com.com'
      }
    },
    {
      name: 'Joshua Moral',
      role: 'Hardware Developer | QA Specialist & General Solder',
      image: '/assets/img/wawaw.png',
      description: 'Develops and assembles hardware components, performs quality assurance testing across all systems, and handles precision soldering for ESP32 and sensor integrations.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'jmoral@acdeducation.com'
      }
    }
  ]

  return (
    <section className="section team">
      <div className="container">
        <h2 className="section-title"></h2>
        <p className="team-subtitle">
          <span className="innovator-text">GENESIX The Innovators</span> Behind{' '}
          <span className="ecosprinkle-text">
            EcoSprinkle
          </span>
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="image-placeholder">
                    <span className="member-initial">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                
                <div className="member-social">
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={member.social.email}>
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Container Below Team Members */}
        <div className="additional-content">
          <div className="content-container">
            <h2 className="content-title">GeneSix: Our Identity and Mission</h2>
            <div className="content-text">
              <p>
                GeneSix is a student-led innovation team from Assumption College of Davao dedicated to creating practical, technology-driven solutions for real-world needs. As a group focused on sustainable, user-centered design, GeneSix develops smart systems, web and mobile applications, IoT-based solutions, and various academic projects that reflect creativity, teamwork, and modern problem-solving. Our mission is to build efficient and impactful technologies, while our vision is to be recognized as a reliable and forward-thinking student innovation team committed to improving everyday life through accessible and meaningful system development.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team