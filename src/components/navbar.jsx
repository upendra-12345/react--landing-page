import React from 'react';
import Styles from "./Navbar.module.css";
function Navbar(){
    return(
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>MyBrand</div>
            <ul className={Styles.links}>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <button className={Styles.button}>Get Started</button>
        </nav>

        
    )
    
    

}
export default Navbar;