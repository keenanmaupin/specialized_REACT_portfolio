import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact">
      <h2 style = {{marginLeft: '120px'}}>~Contact~</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="First-Name & Last-Name 🔫"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email 🪙💰"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <hr></hr>
        <textarea
          name="message"
          placeholder='Your Message -"Its a stick-up"'
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <hr></hr>
      <hr></hr>
    </section>
  );
};

export default Contact;
