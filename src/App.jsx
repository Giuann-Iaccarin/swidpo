import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import LessonsPage from './pages/LessonsPage'
import VideoPage from './pages/VideoPage'
import ShopPage from './pages/ShopPage'
import ProfilePage from './pages/ProfilePage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
