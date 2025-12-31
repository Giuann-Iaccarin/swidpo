import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage'
import LessonsPage from './pages/LessonsPage'
import VideoPage from './pages/VideoPage'
import ShopPage from './pages/ShopPage'
import ProfilePage from './pages/ProfilePage'
import './App.css'
import NotFound from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/videos/:id" element={<VideoPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
