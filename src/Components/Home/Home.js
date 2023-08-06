import React from "react";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import Contact_us from "./Contact_us/Contact_us"
import Footer from "../Footer/Footer";
import Slider from "./Contact_button/slider";
// import './home.css'


function Home() {
  return (
    <div className="home">
      <Header />
      <Experience />
      <Slider/>
      <Contact_us />
      <Footer />
    </div>
  );
}
export default Home;
