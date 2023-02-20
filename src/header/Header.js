import React from "react";
import headimage from "./../assets/queen.jpg";
import './header.css';
import mypic from "./../assets/me.PNG";
import Button from "../button";
class Header extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
            <>            
<div  className="text-center py-4 text-light " style={{backgroundImage: `url(${headimage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" ,height:"600px" }}>
<div className=" head" >
<h1>AMIRA DIAB</h1>
<p>FRONTEND DEVELOPER</p>
<Button className="btn btn-outline-warning" btnname="contact me"  /> 
</div>
<img className=" mypic" src={mypic}/>
</div>
            </>
        )
    }
}
export default Header;