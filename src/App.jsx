import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CanvasBackground from './components/CanvasBackground/CanvasBackground'
import Pufferfish from './pages/projects/pufferfish/pufferfish'
import Social from './pages/projects/social/social'
import Queen from './pages/projects/queen/queen'
import Pinball from './pages/projects/pinball/pinball'
import Games from './pages/games/games'
import Blogs from './pages/blogs/blogs'
import ArtSpace from './pages/artSpace/artSpace'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <CanvasBackground />
          </div>
        } />
        <Route path="/pufferfish" element={
          <div className="App">
            <Pufferfish />
          </div>
        } />
        <Route path="/social" element={
          <div className="App">
            <Social />
          </div>
        } />
        <Route path="/queen" element={
          <div className="App">
            <Queen />
          </div>
        } />
        <Route path="/pinball" element={
          <div className="App">
            <Pinball />
          </div>
        } />
        <Route path="/games" element={
          <div className="App">
            <Games />
          </div>
        } />
        <Route path="/blogs" element={
          <div className="App">
            <Blogs />
          </div>
        } />
        <Route path="/artspace" element={
          <div className="App">
            <ArtSpace />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
