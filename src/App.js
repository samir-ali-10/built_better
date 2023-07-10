import './App.scss';
import HomePage from './views/HomePage';
import SiteNav from './layout/SiteNav';
import { Route, Routes } from 'react-router-dom';
import Services from './views/Services';
import Footer from './layout/Footer';
import About from './views/About';
import Shop from './views/Shop';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <SiteNav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
