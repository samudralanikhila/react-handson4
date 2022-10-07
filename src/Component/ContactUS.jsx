import React from "react";
import Home from "./Home";
import "./styling.css"
class ContactUs extends React.Component{
    render(){
        return(
            <div>
                <Home/>
                <div className="contact">Contact Us</div>
            </div>
            
        )
    }
}
export default ContactUs