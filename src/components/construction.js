import React from "react";
import Logo from "../assets/images/logo.svg";

const Construction = () => {
    return(
        <div className="construction-container">
            <div className="message-container">
                <div>
                    <h3>Funfact : Do you know the process of</h3>
                    <h3>making tofu and cheese are similar?</h3>
                    <br/>
                    <h5>However unlike making tofu, web design is hard!</h5>
                    <h5>Stay tuned for new developments :)</h5>
                </div>
            </div>
            
            <div className="logo-container">
                <img src={Logo} className="bottom-logo"/>
            </div>
  
        </div>
    )
}

export default Construction