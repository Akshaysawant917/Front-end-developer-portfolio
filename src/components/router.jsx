import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx';
import NavB from "./nav.jsx";
import About from "./about.jsx";
import Expirience from "./expirience.jsx";
import Contact from "./contact.jsx";
import Projects from "./projects.jsx";
function Router() {
    return(
        <BrowserRouter>
          <NavB /> {/* This ensures NavB is displayed on every page */}
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/expirience" element={<Expirience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router