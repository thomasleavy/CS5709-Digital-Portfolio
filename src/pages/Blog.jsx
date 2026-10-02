const posts = [
  {
    id: 1,
    title: "Developing My Digital Portfolio",
    date: "October 2026",
    content:
      "This digital portfolio was developed as part of my MSc in Software Engineering at the University of Limerick.",
  },
  {
    id: 2,
    title: "Software Engineering Evolution",
    date: "October 2026",
    content:
      "This project involved analysing an existing digital portfolio before designing and developing my own portfolio using React.",
  },
]

function Blog() {
  return (
    <main className="page">
      <h1>Blog</h1>
      <p>Updates relating to my software engineering studies and projects.</p>

      <div className="blog-list">
        {posts.map((post) => (
          <article className="blog-post" key={post.id}>
            <p className="blog-date">{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Blog