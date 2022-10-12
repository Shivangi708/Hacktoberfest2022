import React from "react";
import Home from "./components/Home/Home1";
import Course from "./components/allcourses/Courses";
import About from "./components/Allabout/Aboutus";
import Team from './components/AllTeam/Team';
import Pricing from "./components/allPricing/Pricing";
import Journal from "./components/alljournal/Journal";
import Contact from "./components/AllContact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ReactDOM from "react-dom/client";

function App() {
  return (
<>

<Home/>

{/* <About/>
<Team/>
<Pricing/>
<Journal/>
<Contact/> */}

{/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Course/>} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />}/>
          <Route path="pricing" element={<Pricing />}/>
          <Route path="journal" element={<Journal />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter> */}

</>

    );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
