const Portfolio = () => {
    return (
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-items">
          {/* Replace these with your actual projects */}
          <div>
            <h3>Project Title 1</h3>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">Deployed App</a>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
          <div>
            <h3>Project Title 2</h3>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">Deployed App</a>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
          {/* Repeat for more projects */}
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  