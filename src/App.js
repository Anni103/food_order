import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from './pages/Menu';
import About from './pages/About';
/*import Shop from "./pages/Shop";*/
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/shop" element={<Shop />} />*/}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />



      </Routes>
    </Router>
  );
}

export default App;
