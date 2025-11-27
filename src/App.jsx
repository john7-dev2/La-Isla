import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import ProgressBar from './components/ProgressBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Categories from './pages/Categories'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ProgressBar />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App
