const Resume = () => {
    return (
      <section>
        <h2 style = {{marginLeft: '120px'}}>~Resume~</h2>
        <p>
          <a src="https://docs.google.com/document/d/1Qf551Z1_pcMoOuwCqUF3eRydXBBAeGGgs0HQdfbZlvc/edit?tab=t.0#heading=h.v2fppoicsu1x" style={{cursor: 'pointer'}}>[Resume Hyperlink]</a>
        </p>
        <ul>
          <li>
            <strong>Name:</strong> Keenan Maupin
            <br></br>
            <strong>Email:</strong> maupin.keenan97@gmail.com
            <br></br>
            <strong>Phone:</strong> (916) 889-9454
            <br></br>
            <strong>Address:</strong> 636 Linden ave. #8 | Long Beach | Ca | 90802
          </li>
          <li>
            <strong>Proficiencies:</strong>
            <ul>
              <li>
                Adaptability | Qick at understandnig new Computal Languages | Completed UC Irvine's Full Stack Software Develpoment BootCamp 2024
              </li>
              <li>
                Mechanical Engineering expeirance | Full Stack Software Development expeirance | Ergonomic Advanced Manufacturing Technician | US ARMY
              </li>
            </ul>
          </li>
        </ul>
        <a href="./assets/resume.pdf" download="./assets/resume.pdf" >
        Download Resume PDF 💾
        </a>
        <hr></hr>
        <hr></hr>
      </section>
      
    );
  };
  
  export default Resume;
  