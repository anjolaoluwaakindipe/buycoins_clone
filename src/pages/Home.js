import React, { useState } from "react";
import Hero from "../components/Hero";
import MobileMenu from "../components/MobileMenu";
import Nav from "../components/Nav";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <Nav setMenuOpen={setMenuOpen} />
            {menuOpen ? <MobileMenu setMenuOpen={setMenuOpen} /> : ""}
            <Hero />
        </div>
    );
}

export default Home;
