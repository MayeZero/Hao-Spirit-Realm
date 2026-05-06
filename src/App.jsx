import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CanvasBackground from './components/CanvasBackground/CanvasBackground'
import Robot from "./pages/projects/robot/robot"
import Ds from "./pages/projects/ds/ds"
import Dh from "./pages/projects/dh/dh"
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
        <Route path="/robot" element={
          <div className="Robot">
            <Robot />
          </div>
        } />
        <Route path="/ds" element={
          <div className="Ds">
            <Ds />
          </div>
        } />
        <Route path="/dh" element={
          <div className="Dh">
            <Dh />
          </div>
        } />
        <Route path="/pufferfish" element={
          <div className="Pufferfish">
            <Pufferfish />
          </div>
        } />
        <Route path="/social" element={
          <div className="Social">
            <Social />
          </div>
        } />
        <Route path="/queen" element={
          <div className="Queen">
            <Queen />
          </div>
        } />
        <Route path="/pinball" element={
          <div className="Pinball">
            <Pinball />
          </div>
        } />
        <Route path="/games" element={
          <div className="Games">
            <Games />
          </div>
        } />
        <Route path="/blogs" element={
          <div className="Blogs">
            <Blogs />
          </div>
        } />
        <Route path="/artspace" element={
          <div className="ArtSpace">
            <ArtSpace />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
