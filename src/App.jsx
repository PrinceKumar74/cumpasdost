import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/pages/Header/Header"
import Footer from "./components/pages/Footer/Footer"
import Home from "./components/pages/Home/Home.jsx"
import Marketing from "./components/pages/DigitalMarketing/Marketing.jsx"
import Design from "./components/pages/Design/Design.jsx"
import About from "./components/pages/About/About.jsx"
import Seo from "./components/pages/Seo/Seo.jsx"
import Policies from "./components/pages/Policies/Policies.jsx"
import Development from "./components/pages/Development/Development.jsx"
import WhatsApp from "./components/pages/WhatsappIcon/Whatsapp.jsx" 
import ContactUs from "./components/pages/Contact/ContactUs.jsx"
function App() {
  

  return (
  <Router>
    <Header/>
    <WhatsApp/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      
      <Route path="services/digital-marketing" element={<Marketing />} />
      <Route path="services/ui-ux-design" element={<Design />} />
      <Route path="/about" element={<About />} />
      <Route path='services/seo' element={<Seo />} /> 
      <Route path='policies' element ={<Policies/>}/>
      <Route path='services/web-development' element={<Development/>}/>
      <Route path='contact' element={<ContactUs/>}/>
    </Routes>
    <Footer/>
  </Router> 
  )
}

export default App
