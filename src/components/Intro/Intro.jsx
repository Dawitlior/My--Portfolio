import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy1 from "../../img/boy1.jpeg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../featurs/FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../contexts/Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "black" }}>Hy! I Am</span>
          <span>Lior Dawit</span>
          <span>
              Motivated Full-Stack Developer. <br />
              A sociable person with teamwork skills. <br /> Looking for a first position
              within tech sector where I can contribute to the organization's goals,
               and improve my professional abilities.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Dawitlior"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/lior-dawit-07464b236/"><img src={LinkedIn} alt="" /></a>
          <a href=""><img src={Instagram} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        {/* <img src={boy1} alt="" /> */}
        {/* animation */}
        <motion.img initial={{ left: "-36%" }} whileInView={{ left: "-24%" }} transition={transition} src={glassesimoji} alt="" />

        <motion.div initial={{ top: "-4%", left: "74%" }} whileInView={{ left: "68%" }} transition={transition} className="floating-div" >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div initial={{ left: "9rem", top: "18rem" }} whileInView={{ left: "0rem" }} transition={transition} className="floating-div" >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem", }}>
        </div>
      </div>
    </div>
  );
};

export default Intro;
