import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import useScrollToTop from './hooks/useScrollToTop';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import Dining from './pages/Dining';
import RestaurantDetails from './pages/RestaurantDetails';
import Spa from './pages/Spa';
import Experiences from './pages/Experiences';
import Events from './pages/Events';
import Weddings from './pages/Weddings';
import Meetings from './pages/Meetings';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Offers from './pages/Offers';
import FAQ from './pages/FAQ';
import Admin from './pages/Admin';

const App = () => {
  useScrollToTop();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Rooms />} path="/rooms" />
          <Route element={<RoomDetails />} path="/rooms/:roomId" />
          <Route element={<Booking />} path="/booking" />
          <Route element={<Dining />} path="/dining" />
          <Route element={<RestaurantDetails />} path="/dining/signature-atelier" />
          <Route element={<Spa />} path="/spa" />
          <Route element={<Experiences />} path="/experiences" />
          <Route element={<Events />} path="/events" />
          <Route element={<Weddings />} path="/weddings" />
          <Route element={<Meetings />} path="/meetings" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogPost />} path="/blog/the-art-of-arrival" />
          <Route element={<Offers />} path="/offers" />
          <Route element={<FAQ />} path="/faq" />
          <Route element={<Admin />} path="/admin" />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
