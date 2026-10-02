import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="home">
      <section>
        <p>Software Engineer</p>

        <h1>Thomas Leavy</h1>

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