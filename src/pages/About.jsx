
function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>

      <p>
        Welcome to the Student Information Portal!
      </p>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Purpose</h2>
          <p>
            The Student Information Portal is a simple web application
            designed to organize and display student and course information.
            It provides users with an easy way to navigate between different
            sections of the portal.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Features</h2>
          <ul>
            <li>Home page with a welcome message</li>
            <li>Students page with reusable student cards</li>
            <li>Courses page with reusable course cards</li>
            <li>Easy navigation using React Router</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Technologies Used</h2>
          <p>
            This project was developed using React, JSX, React Router,
            HTML, and CSS.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
