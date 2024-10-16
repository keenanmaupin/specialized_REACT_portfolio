import { useState } from "react";
import AboutMe from "./sections/AboutMe.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Contact from "./sections/Contact.jsx";
import Resume from "./sections/Resume.jsx";

const App = () => {
	const [currentSection, setCurrentSection] = useState("AboutMe");

	const renderSection = () => {
		switch (currentSection) {
			case "AboutMe":
				return <AboutMe />;
			case "Portfolio":
				return <Portfolio />;
			case "Contact":
				return <Contact />;
			case "Resume":
				return <Resume />;
			default:
				return <AboutMe />;
		}
	};

	const handleNavClick = (section) => {
		setCurrentSection(section);
	};

	return (
		<div class='neutralBackground'>
				<header class = 'header' >
					<h1 style= {{color:"black"}} >
						<bolder>Keenan Maupin </bolder>
					</h1>
					<nav className={currentSection}>
						<div
							className="hamburger"
							onClick={() =>
								document.querySelector("nav").classList.toggle("active")
							}
				>
				</div>
						<ul className="hamburgerPosition">
							<a src="" >
								<li onClick={() => handleNavClick("AboutMe")}>[About Me]</li>
							</a>
				<br></br>
							<a src="">
								<li onClick={() => handleNavClick("Portfolio")}>[Portfolio]</li>
							</a>
				<br></br>
							<a src="">
								<li onClick={() => handleNavClick("Contact")}>[Contact]</li>
							</a>
				<br></br>
							<a src="">
								<li onClick={() => handleNavClick("Resume")}>[Resume]</li>
							</a>
						</ul>
					</nav>
				</header>
			<main>{renderSection()}</main>
			<footer style={{cursor: 'pointer'}}>
				<p>
					<a src="https://github.com/keenanmaupin">
						&copy; <bolder>🌿🌱GitUp</bolder>
					</a>{" "}
					|{" "}
					<a src="https://www.linkedin.com/in/keenan-maupin-84b14a333/">
						<bolder>🌻Linked_in🌿</bolder>{" "}
					</a>
					|
					<a src="maupin.keenan97@gmail.com">
						<bolder>🌿Email🌱🌿....🐌</bolder>
					</a>
				</p>
				<h3>
                <p style={{color:'red', fontFamily:'initial'}}>"GET HIM ON OUR TEAM !"</p>
                </h3>
                []...[]...[]...<a href="https://emoji.gg/emoji/1640-do-not-disturb"><img src="https://cdn3.emoji.gg/emojis/1640-do-not-disturb.gif" width="64px" height="64px" alt="Do_Not_Disturb"></img>        </a>
			</footer>
		</div>
	);
};

export default App;
