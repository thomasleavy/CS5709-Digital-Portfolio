import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="home">
      <section>
        <p>Software Engineer</p>

        <h1>
          <a
            className="home-name"
            href="https://github.com/thomasleavy/CS5709-Digital-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thomas Leavy
          </a>
        </h1>

        <p>
          MSc Software Engineering student at the University of Limerick
          with experience in software development, education and
          collaborative working environments.
        </p>

        <Link to="/about">About Me</Link>

        <Link to="/professional-knowledge">
          Professional Knowledge
        </Link>
      </section>
    </main>
  )
}

export default Home