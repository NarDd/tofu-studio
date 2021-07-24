import React from "react";
import Logo from "../assets/logo.svg";
import ConstructionBackground from '../assets/tofumaking.jpg';

const Construction = () => {
    return(
        <div className="construction-container" style={{backgroundImage: `url(${ConstructionBackground})`}}>
            <div className="message-container">
                <div>
                    <h3>Funfact : Do you know the process of</h3>
                    <h3>making tofu and cheese are similar?</h3>
                    <br/>
                    <p>However unlike making tofu, web design is hard!</p>
                    <p>Stay tuned for new developments :)</p>
                </div>
            </div>
            
            <div className="logo-container">
                <img src={Logo} className="bottom-logo"/>
            </div>
  
        </div>
    )
}

export default Construction