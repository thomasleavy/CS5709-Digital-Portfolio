function Education() {
  return (
    <main className="page">
      <h1>Education</h1>

      <section>
        <a
          className="education-link"
          href="https://www.ul.ie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="education-photo"
            src={`${import.meta.env.BASE_URL}images/living-bridge.jpeg`}
            alt="The Living Bridge at the University of Limerick"
          />
        </a>
        <h2>University of Limerick</h2>
        <h3>Master of Science in Software Engineering</h3>
        <p className="education-meta">2026 – Present</p>
      </section>

      <section>
        <a
          className="education-link"
          href="https://www.ncirl.ie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="education-photo"
            src={`${import.meta.env.BASE_URL}images/nci-campus.jpg`}
            alt="National College of Ireland campus"
          />
        </a>
        <h2>National College of Ireland</h2>
        <h3>Higher Diploma in Science in Computing</h3>
        <p className="education-meta">2023 – 2025</p>
      </section>

      <section>
        <a
          className="education-link"
          href="https://www.hiberniacollege.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="education-photo"
            src={`${import.meta.env.BASE_URL}images/hibernia-college.svg`}
            alt="Hibernia College"
          />
        </a>
        <h2>Hibernia College</h2>
        <h3>Professional Master of Education</h3>
        <p className="education-meta">2019 – 2021</p>
      </section>

      <section>
        <a
          className="education-link"
          href="https://www.ul.ie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="education-photo"
            src={`${import.meta.env.BASE_URL}images/university-building.jpg`}
            alt="A building on the University of Limerick campus"
          />
        </a>
        <h2>University of Limerick</h2>
        <h3>
          Bachelor of Arts in Political Science, International Relations
          and Sociology
        </h3>
        <p className="education-meta">2015 – 2019</p>
      </section>
    </main>
  )
}

export default Education
