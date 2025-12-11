import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'

import 'animate.css';
import 'aos/dist/aos.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <div className="container mx-auto px-4 max-w-7xl">
      <Navbar />
      <div id="beranda">
        <App />
      </div>
      <Footer />
    </div>
  </StrictMode>
)