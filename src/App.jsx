import Home from './pages/home/Home'
import Category from './pages/category/Category'
import Blog from './pages/blog/Blog.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact'
import PlaceInfo from './pages/placeInfo/PlaceInfo'
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';
import Login from './pages/login/Login'
import Signin from './pages/login/Signin'
import Beach from './components/places/Beach'
import Mountain from './components/places/Mountain'
import Waterfalls from './components/places/Waterfalls'
import Historic from './components/places/Historic'
import './App.css'
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const {pathname} =useLocation();
  useEffect(() => {
    window.scrollTo({top:0,behavior:"smooth"});
  },[pathname])
  return (
    <>
        <Routes>
          <Route path='/home/' element={<Home />}>
            <Route path='beaches' element={<Beach />} />
            <Route path='mountains' element={<Mountain />} />
            <Route path='waterfalls' element={<Waterfalls />} />
            <Route path='historic' element={<Historic />} />
          </Route>
          <Route path='/signin' element={<Signin />} />
          <Route path='/places' element={<Category />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/placeInfo' element={<PlaceInfo />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
        <Copyright />
    </>
  )
}

export default App
