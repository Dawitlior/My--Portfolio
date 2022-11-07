import Navbar from "./components/Pages/Navbar/Navbar";
import Intro from "./components/Pages/Intro/Intro";
import Services from "./components/Pages/Services/Services";
import "./App.css";
import Experience from "./components/Pages/Experience/Experience";
import Works from "./components/Pages/Works/Works";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Testimonial from "./components/Pages/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import { useContext } from "react";
import Footer from "./components/featurs/Footer/Footer";
import { themeContext } from "./contexts/Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
