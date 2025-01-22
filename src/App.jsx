// App.jsx
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/Notfound';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Projectsview from './Pages/Projectsview';
import StoryMe from './Pages/StoryMe';
import './App.css';
import DownloadCV from './Components/DownloadCv';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/downloadcv' element={<DownloadCV />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/projectview' element={<Projectsview />} />
        <Route path='/story' element={<StoryMe />}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

