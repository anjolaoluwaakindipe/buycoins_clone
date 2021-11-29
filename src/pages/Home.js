import React, { useState } from "react";
import Hero from "../components/Hero";
import MobileMenu from "../components/MobileMenu";
import Nav from "../components/Nav";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <Nav setMenuOpen={setMenuOpen} />
            {menuOpen ? <MobileMenu setMenuOpen={setMenuOpen} /> : ""}
            <Hero />
            <Section1 />
            <Section2 />
        </div>
    );
}

export default Home;
