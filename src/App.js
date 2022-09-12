import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
