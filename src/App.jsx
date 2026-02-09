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
import Services from "./components/pages/Services/Services.jsx"
import Ai from "./components/pages/Ai/Ai.jsx"
import SeoHead from "./seo/SeoHead.jsx"

function App() {
  

  return (
  <Router>
    <div className="min-h-screen bg-[var(--cd-bg)] text-[var(--cd-text)]">
      <Header />
      <WhatsApp />
      <main className="min-h-[calc(100vh-4rem)]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SeoHead
                  title="Web Design, Development & Digital Marketing"
                  description="Campus Dost is a full-service digital agency offering web design, web development, branding, SEO and digital marketing."
                  canonicalPath="/"
                />
                <Home />
              </>
            }
          />

          <Route
            path="services/digital-marketing"
            element={
              <>
                <SeoHead
                  title="Digital Marketing Services"
                  description="Performance-focused digital marketing services: strategy, ads, social, and growth marketing with Campus Dost."
                  canonicalPath="/services/digital-marketing"
                />
                <Marketing />
              </>
            }
          />
          <Route
            path="services/ui-ux-design"
            element={
              <>
                <SeoHead
                  title="UI/UX Design Services"
                  description="Modern UI/UX design for websites and apps—clean, conversion-friendly, and brand-aligned design by Campus Dost."
                  canonicalPath="/services/ui-ux-design"
                />
                <Design />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <SeoHead
                  title="About Us"
                  description="Learn about Campus Dost—our story, values, and how we help brands grow with design, development, and marketing."
                  canonicalPath="/about"
                />
                <About />
              </>
            }
          />
          <Route
            path="services/seo"
            element={
              <>
                <SeoHead
                  title="SEO Services"
                  description="SEO services to improve rankings, traffic, and leads: technical SEO, on-page optimization, and content strategy."
                  canonicalPath="/services/seo"
                />
                <Seo />
              </>
            }
          />
          <Route
            path="policies"
            element={
              <>
                <SeoHead
                  title="Policies"
                  description="Read Campus Dost policies, terms, and client responsibilities."
                  canonicalPath="/policies"
                />
                <Policies />
              </>
            }
          />
          <Route
            path="services/web-development"
            element={
              <>
                <SeoHead
                  title="Web Development Services"
                  description="Fast, responsive, and scalable web development services—modern websites built for performance and conversions."
                  canonicalPath="/services/web-development"
                />
                <Development />
              </>
            }
          />
          <Route
            path="contact"
            element={
              <>
                <SeoHead
                  title="Contact Us"
                  description="Contact Campus Dost for web design, development, SEO and digital marketing. Get a quick quote and consultation."
                  canonicalPath="/contact"
                />
                <ContactUs />
              </>
            }
          />
          <Route
            path="services"
            element={
              <>
                <SeoHead
                  title="Services"
                  description="Explore Campus Dost services: web development, UI/UX design, SEO, and digital marketing."
                  canonicalPath="/services"
                />
                <Services />
              </>
            }
          />
          <Route
            path="/ai"
            element={
              <>
                <SeoHead
                  title="AI Solutions"
                  description="AI-powered solutions and automation to help your business scale—built and integrated by Campus Dost."
                  canonicalPath="/ai"
                />
                <Ai />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router> 
  )
}

export default App
