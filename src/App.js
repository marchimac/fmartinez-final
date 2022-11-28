import Navbar from "./Navbar";
import Pricing from "./pages/MyProjects";
import Home from "./pages/Main";
import About from "./pages/AboutMe";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myProjects" element={<Pricing />} />
          <Route path="/aboutMe" element={<About />} />
        </Routes>
      </div>
    </>
    
  );
}

export default App;
