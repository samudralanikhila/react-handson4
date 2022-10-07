import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./styling.css"

class AddingStudent extends React.Component{
    render(){
        return(
            <div>
                <Home/><br></br><br></br>
                <div className="add1">
                    <div>
                        <label>Name</label><br></br>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div>
                        <label>Age</label><br></br>
                        <input type="text" name="Age" placeholder="Age"/>
                    </div>
                </div><br></br><br></br>
                <div className="add1">
                    <div>
                        <label>Course</label><br></br>
                        <input type="text" name="Course" placeholder="Course"/>
                    </div>
                    <div>
                        <label>Batch</label><br></br>
                        <input type="text" name="Batch" placeholder="Batch"/>
                    </div>
                </div><br></br>
                <div className="add2">
                <div><Link to='/Student' style={{textDecoration: 'none'}}><button className="btn1">Cancle</button></Link></div>
                <button className="btn2">Submit</button>
                </div>
            </div>
        )
    }
}
export default AddingStudent