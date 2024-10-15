import avatar from '../assets/file.jpg';


const AboutMe = () => {
  return (
    <section>
      <h2 style = {{marginLeft: '120px'}}>~About Me~</h2>
      <p>- Here is a quick scope of my most recent Heald Position and Motive</p>
      <ul>
        <li> Most recent Company: Kratos Defense </li>
        <li> Duration: 4 years </li>
        <li> Most recent Position: Avionic Advanced Manufactoring Technician </li>
        <li> City: Sacramento,  State: California</li>
      </ul>
      <hr></hr>
      <br></br>
      <p>
        - I am a highly skilled and experienced avionic Advanced Manufacturing Technician with a strong focus on the development of innovative solutions for Un-Manned airial Combat Drones.
        My passion for technology and technological exploration has led me to pursue my career in aviation and furthing my knowledge of how software developments can open new doors within this field.
      </p>
      <hr></hr>
      <br></br>
      <img class= 'avatar' src= {avatar}
                alt="Keenan's Avatar" style={{ width: '500px', height: '600px', borderRadius: '30%', padding: '20px'}} />
      <br></br>
      <hr></hr>
      <p>
        - I am currently a full time student, focusing primarily on developing and maintaining both Front and Back-end knowledge of Software Development. My goal is to continue to contribute to the success 
        of this new Career choice and pursue new hights I once believed unatainable. Hvaing the expeirance of using the languages:.
        <ul>
          <li>HTML5, CSS3, JavaScript </li>
          <li>React.js, Node.js, Express.js </li>
          <li>SQL, MongoDB </li>
        </ul>
        - Tools:.
        <ul>
          <li>VS Code, Git, Postman, Slack-Overflow, </li>
          <li>pgAdmin and Insomnia</li>
        </ul>
        - I am eager to learn and grow as a software developer and always strive to improve my skills and knowledge.
        - I am also looking forward to collaborating with other developers to create innovative solutions for my next career driven mission.
      </p>
      <hr></hr>
    </section>
  );
};

export default AboutMe;
