function PicturesGallery() {
  const pictures = [
    {
      id: 1,
      title: "The Living Bridge",
      description: "The Living Bridge at the University of Limerick.",
      image: "/images/living-bridge.jpeg",
    },
    {
      id: 2,
      title: "University of Limerick",
      description: "The University of Limerick coat of arms.",
      image: "/images/ul-coat-of-arms.jpg",
    },
    {
      id: 3,
      title: "University Campus",
      description: "A building on the University of Limerick campus.",
      image: "/images/university-building.jpg",
    },
  ]

  return (
    <main className="page">
      <h1>Pictures Gallery</h1>

      <p>
        A selection of images relating to my studies at the
        University of Limerick.
      </p>

      <div className="gallery-grid">
        {pictures.map((picture) => (
          <figure className="gallery-card" key={picture.id}>
            <img src={picture.image} alt={picture.title} />

            <figcaption>
              <h2>{picture.title}</h2>
              <p>{picture.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  )
}

export default PicturesGallery