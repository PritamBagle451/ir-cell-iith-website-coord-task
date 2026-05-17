import { useState } from "react";
export default function Header(){
const [menuOpen,setMenuOpen]=useState(false);
    return (
        <header>
            <img src="ChatGPT_Image_May_16__2026__07_03_10_PM-removebg-preview.png"/>
            <div
                className="menu-icon"
                onClick={()=>setMenuOpen(!menuOpen)}
                >
                ☰
            </div>
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="https://ir.iith.ac.in/">Home</a>
            <a href="https://ir.iith.ac.in/about" >About Us</a>
            <a href="https://ir.iith.ac.in/opportunities">Opportunities</a>
            <a href="https://ir.iith.ac.in/international_collaborations">Collaborations</a>
            <a href="https://ir.iith.ac.in/photo_gallery">Photo Gallery</a>
            <a href="https://ir.iith.ac.in/contact" >Contact</a>
            </div>
        <a href="https://ir.iith.ac.in/">
<button>Join IR Cell</button>
</a>
        </header>
    )
}