import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import "./styling.css"
class Student extends React.Component{
    render(){
        return(
            <div>
                <Home/>
                <div className="flex2">
                    <div>Student Details</div>
                    <div className="btn"><Link to='/AddingStudent' style={{textDecoration: 'none'}}><button className="btn">Add New Student</button></Link></div>
                </div>
                <div className="main">
                    <div className="main1">
                        <div className="name">Name</div>
                        <div>Age</div>
                        <div>Course</div>
                        <div>Batch</div>
                        <div>Change</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Student