import React from "react";
import mycv from "./../assets/Amira BADAWI (2).pdf";
import Button from "../button";

class About  extends React.Component{
render(){
    return (
        <>
       <div className="d-flex justify-content-center py-4">
      
    
       <h1 className="text-info mb-4">About Me</h1>
  
       
<div><p className="mx-4 text-light">Bachelor<br/>

• Faculty of: Computer and Artificial Intelligence (BSN)
<br/>
•  Department: computer science<br/>

• Fresh graduate in 2022 with a very good) GPA: (3.15)<br/>

• Distinction in the graduation project (A+) </p>       
     <a className="mx-4" href= {mycv}  download>

     <Button  className="btn btn-outline-info" btnname="Download my cv"  /> 

         </a>
</div>
       </div>

        </>
    )
}
}
export default About;