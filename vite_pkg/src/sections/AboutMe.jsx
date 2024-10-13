import avatar from '../../public/avatar.webp';

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={avatar} alt="Your Avatar" width="200" />
      <p>This is a short bio about yourself.</p>
    </section>
  );
};

export default AboutMe;
