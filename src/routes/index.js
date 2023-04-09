import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Header from '../components/Header/Main'
import Footer from '../components/Footer/Main'
import About from '../components/About/Main'
import Courses from '../components/Courses/Main'
import Courcedeatils from '../components/Coursesdetails/Main'
import Event from '../components/Events/Main'
import Eventsdetails from '../components/Eventsdetails/Main'
import Gallery from '../components/Pages/Gallery/Main'
import GalleryDeatils from '../components/Pages/Gallerydetails/Main'
import Pricing from '../components/Pages/Pricing/Main'
import Teem from '../components/Pages/Team/Main'
import Faq from '../components/Pages/Faq/Main'
import Shop from '../components/Pages/Shop/Main'
import Shopdeatils from '../components/Pages/Shopdetails/Main'
import Blog from '../components/Blog/Main'
import Blogdeatils from '../components/Blogdeatils/Main'
import Contact from '../components/Contact/Main'
import Servise from '../components/Services/Main'
import Teemdeatils from '../components/Teemdeatils/Main'
import Servisedeatils from '../components/Serivcesdetails/Main'
import Home from '../components/Home/Main'

function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  return (
    <>

      <Header/>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/coursesdetails" element={<Courcedeatils/>} />
          <Route path="/events" element={<Event/>} /> 
          <Route path="/eventsdetails" element={<Eventsdetails/>} />
          <Route path="/gallery" element={<Gallery/>} /> 
          <Route path="/gallerydetail" element={<GalleryDeatils/>} />
          <Route path="/pricing" element={<Pricing/>} /> 
          <Route path="/team" element={<Teem/>} /> 
          <Route path="/teamdetails" element={<Teemdeatils/>} /> 
          <Route path="/faq" element={<Faq/>} /> 
          <Route path="/shop" element={<Shop/>} /> 
          <Route path="/shopdetails" element={<Shopdeatils/>} /> 
          <Route path="/blog" element={<Blog/>} /> 
          <Route path="/blogdetails" element={<Blogdeatils/>} /> 
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Servise/>} />
          <Route path="/servicesdetail" element={<Servisedeatils/>} />

        </Routes>

      <Footer/>

    </>
  )
}

export default Index