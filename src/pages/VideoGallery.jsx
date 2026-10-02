function VideoGallery() {
  return (
    <main className="page">
      <h1>Video Gallery</h1>

      <p>
        Video content relating to my academic and professional interests.
      </p>

      <div className="video-grid">
        <article className="video-card">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/alDyweV14Bw"
              title="Portfolio video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2>Featured Video</h2>

          <p>
            A video selected for inclusion in my digital portfolio.
          </p>
        </article>
      </div>
    </main>
  )
}

export default VideoGallery