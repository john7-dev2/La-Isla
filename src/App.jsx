import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import StoryHighlights from './components/StoryHighlights'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-recipe-cream">
      <Header />
      <Hero />
      <About />
      <StoryHighlights />
      <Menu />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
