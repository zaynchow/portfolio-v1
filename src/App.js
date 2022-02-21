import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Home, Contact, About ,Projects } from './pages';

export default function App() {
  return (
    <>
      <Router>
              <NavMenu />
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
              </Routes>
      </Router>
 
    </>
  );
}
