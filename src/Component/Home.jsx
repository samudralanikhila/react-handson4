import { Link } from "react-router-dom";
import React from "react";
class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="flex1">
                    <div><Link to='/' style={{textDecoration: 'none'}}>Home</Link></div>
                    <div><Link to='/Student' style={{textDecoration: 'none'}}>Student</Link></div>
                    <div><Link to='/ContactUS' style={{textDecoration: 'none'}}>Contact</Link></div>
                </div>
            </div>
        )
    }
}
export default Home