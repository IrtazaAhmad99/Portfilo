import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MiddleSection from "./components/MiddleSection";
import Bar from "./components/Bar";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/Testmionals";
import AboutSection from "./components/Aboutus";
import ContactSection from "./components/GetInTouch";

function App() {
  return (
    <Router>
      <div className="text-3xl font-bold">
        <Header />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Bar />
                <MiddleSection />
                <Bar />
                <ProjectSection />
                <Bar />
                <ExperienceSection />
                <Bar />
                <TestimonialsSection />
              </>
            }
          />

          {/* About Us Page */}
          <Route path="/aboutus" element={<AboutSection />} />
          <Route path="/getintouch" element ={<ContactSection/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
