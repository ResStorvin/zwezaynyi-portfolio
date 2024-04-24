import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/services/Services.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scroll/ScrollUp.jsx";


const App = () => {
  return (
    <>
      < Header />
      <main className="main">
        < Home />
        < About />
        < Skills />
        < Services />
        < Qualification />
        < Contact />
      </main>
      < Footer />
      < ScrollUp />
    </>
  )
}
export default App