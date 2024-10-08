import React, { useState, useEffect } from 'react';
import './Intro.scss';

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamically adjust transform to move text up and background fade effect
  const translateY = Math.min(scrollY / 3, 300); 
  const backgroundOpacity = Math.max(1 - scrollY / 500, 0); 

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div
          className="image-background"
          style={{
            backgroundImage: `url('https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/bg.jpg?raw=true')`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', 
            opacity: backgroundOpacity, 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1, 
          }}
        />
        <div className="hero-container" style={{ transform: `translateY(-${translateY}px)` }}>
          <div className="left-content">
            <p className="creative-text">Pom Dao</p>
            <h1 className="hero-title">
              FULL- <br /> STACK <br /> DEVELOPER
            </h1>
          </div>
          <div className="right-content">
            <p className="description">
              I AM POM, A FULL-STACK DEVELOPER AND UX/UI DESIGNER. PRESIDENT OF VIETNAMESE STUDENT ASSOCIATION IN GRINNELL COLLEGE
            </p>
            {/* Adding the portrait image between introduction and contact */}
            <div className="portrait-container">
              <img src="https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/portrait.png?raw=true" alt="Pom Portrait" className="portrait" />
            </div>
            <button 
              className="contact-btn" 
              onClick={() => window.location.href = 'mailto:daopomelo@gmail.com?subject=Contact from Portfolio'}>
              CONTACT ME
            </button>
            {/* Horizontal Social Icons */}
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/quynh-dao-phuong/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="icon" />
                <span className="social-name">LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/daopomelo/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" className="icon" />
                <span className="social-name">Facebook</span>
              </a>
              <a href="https://github.com/pomelohoho" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" className="icon" />
                <span className="social-name">GitHub</span>
              </a>
              <a href="mailto:daopomelo@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/email.png" alt="Email" className="icon" />
                <span className="social-name">Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-container">
          {/* Add the circular memoji */}
          <div className="memoji-container">
            <img src="https://github.com/pomelohoho/Pom-Full-stack-developer-portfolio/blob/gh-pages/memoji.jpg?raw=true" alt="Pom Memoji" className="memoji" />
          </div>
          <h2>
            Hello World, I'm <span className="highlight">Pom</span>. Nice to meet you.
          </h2>
          <p>
          I am a Full Stack Developer with a passion for building elegant, intuitive websites with great user experience. With a strong understanding of both front-end and back-end development, as well as some experience in cloud technologies, I’m eager to apply my skills in a professional setting. I’m a quick learner, a collaborative team player, and confident in my ability to contribute meaningfully to any web development team. Also, I love cats!</p>
        </div>
      </section>
    </>
  );
};

export default Intro;
