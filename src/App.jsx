import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Education from "./pages/Education"
import ProfessionalKnowledge from "./pages/ProfessionalKnowledge"
import PicturesGallery from "./pages/PicturesGallery"
import VideoGallery from "./pages/VideoGallery"
import Blog from "./pages/Blog"
import Messaging from "./pages/Messaging"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route
          path="/professional-knowledge"
          element={<ProfessionalKnowledge />}
        />
        <Route path="/pictures" element={<PicturesGallery />} />
        <Route path="/videos" element={<VideoGallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/messaging" element={<Messaging />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App