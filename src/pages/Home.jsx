import React from "react";
import Navbar from '../components/Navbar';
import Hero from "./Hero";
import GridCard from "./GridCard";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
 return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      
      <Hero/>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <GridCard/>
      </div>
      <Testimonials/>
      <Footer/>
    </div>
 );
};

export default Home;
