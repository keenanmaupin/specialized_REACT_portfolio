import { useState } from 'react';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  const [currentSection, setCurrentSection] = useState('AboutMe');

  const renderSection = () => {
    switch (currentSection) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <header>
        <h1>Your Name</h1>
        <nav className={currentSection}>
          <div className="hamburger" onClick={() => document.querySelector('nav').classList.toggle('active')}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul>
            <li onClick={() => handleNavClick('AboutMe')}>About Me</li>
            <li onClick={() => handleNavClick('Portfolio')}>Portfolio</li>
            <li onClick={() => handleNavClick('Contact')}>Contact</li>
            <li onClick={() => handleNavClick('Resume')}>Resume</li>
          </ul>
        </nav>
      </header>
      <main>{renderSection()}</main>
      <footer>
        <p>GitHub | LinkedIn | Twitter</p>
      </footer>
    </div>
  );
};

export default App;
