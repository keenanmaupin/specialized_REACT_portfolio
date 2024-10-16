import { useState } from 'react';
import AboutMe from './sections/AboutMe.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Contact from './sections/Contact.jsx';
import Resume from './sections/Resume.jsx';

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
        <h1><bolder> Keenan Maupin </bolder></h1>
        <nav className={currentSection}>
          <div className="hamburger" onClick={() => document.querySelector('nav').classList.toggle('active')}>
            <div>Here is where I can add ass much text as I need to descibe what theis landing page is going to be </div>
            <div> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, recusandae voluptatibus doloribus pariatur fugiat assumenda modi soluta. Suscipit, cum nihil corrupti ex eligendi quo, eaque, sunt nulla placeat iure beatae.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis impedit illo vero et odit veritatis, cum facilis quisquam necessitatibus est culpa neque dicta natus, voluptatem atque? Eaque rerum molestiae maiores.</div>
          </div>
            <a src= "">
              <ul className= "hamburgerPosition">
                <li onClick={() => handleNavClick('AboutMe')}>[About Me]</li>
                <li onClick={() => handleNavClick('Portfolio')}>[Portfolio]</li>
                <li onClick={() => handleNavClick('Contact')}>[Contact]</li>
                <li onClick={() => handleNavClick('Resume')}>[Resume]</li>
              </ul>
            </a>
        </nav>
      </header>
      <main>{renderSection()}</main>
      <footer>
        <p><a src = 'https://github.com/keenanmaupin'>&copy; <bolder>🌿🌱GitUp</bolder></a> | <a src='https://www.linkedin.com/in/keenan-maupin-84b14a333/'><bolder>🌻Linked_in🌿</bolder> </a>|<a src='maupin.keenan97@gmail.com'><bolder>🌿Email🌱🌿....🐌</bolder></a></p>
      </footer>
    </div>
  );
};

export default App;
