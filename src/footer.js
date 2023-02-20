import React from "react";
import Button from "./button";
class Footer extends React.Component {
   
    constructor(props){
        super()
    }
render(){
    return (

        <>
       
       <footer className="bg-dark text-light text-center text-lg-start">

  <div className="text-center p-2 "  >
    © 2020 Copyright:
    <a className="text-dark" style={{textDecoration:"none"}} href="https://mdbootstrap.com/">{this.props.name}.com</a>
    <Button className="btn btn-outline-danger"  btnname="contact me" bg="white"  /> 

  </div>

</footer>

        </>
    )
}

}
export default Footer;