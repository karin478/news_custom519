import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Company from "./components/Company";
import Person from "./components/Person";
import Country from "./components/Country";
import CustomEntity from "./components/CustomEntity";
import Price from "./components/Price";
import AboutMe from "./components/AboutMe";
import "./styles.css";
import { Link } from "react-router-dom";

// Import the CSS file for the title brand

// Create a functional component for the title brand
const TitleBrand = () => {
  return (
    // Return a div element with the title brand class and the text "News Data"
    <div className="title-brand">News Customize for you</div>
  );
};

export default () => (
  <Router>
    <Layout>
      {/* Add the title brand component above the menu */}
      <TitleBrand />
      {/* Add a div with the menu class name */}
      <div className="menu">
        {/* Use the Link component from React Router to create your links */}
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/person">Person</Link>
        <Link to="/country">Country</Link>
        <Link to="/custom-entity">Custom Entity</Link>
        <Link to="/price">Price</Link>
        <Link to="/about-me">About Me</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/person" element={<Person />} />
        <Route path="/country" element={<Country />} />
        <Route path="/custom-entity" element={<CustomEntity />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Layout>
  </Router>
);
