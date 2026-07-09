import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Home from './pages/home/home'
import About from './pages/about/about'
import Tools from './pages/tools/tools'
import Projects from './pages/projects/projects'
import Laboratory from './pages/laboratorty/laboratory'
import Learning from './pages/learning/learning'
import Blogs from './pages/blogs/blogs'
import SidebarMobile from './components/sidebar_mobile/sidebar_mobile'

export default function App(){
  return(
    <div className="app">
      <Navbar />
      <div className="app-content">
        <SidebarMobile />
        <div className="app-links">
          <Sidebar />
        </div>
        <div className="app-information">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/laboratory' element={<Laboratory />} />
            <Route path='/learning' element={<Learning />} />
            <Route path='/blogs' element={<Blogs />} />
          </Routes>
        </div>
      </div>
    
    </div>
  )
}