import ProgressBar from 'react-bootstrap/ProgressBar';
import './skills.css';
function Skills(){
return(
    <>
<h2 className='text-info text-center'>SKILLS</h2>

<div className='text-center bg-dark '>
<div className='d-flex justify-content-center'>
<ul className='firstul text-light text-start ' >
 <li>can work with any frame work</li>
<li>I have the ability to learn more
</li>

<li>Team Work</li>
<li>Time Management</li>
<li>Leadership</li>

<li>Verbal & Written
Communication</li>
    </ul>

</div>
</div>
<h4 className='text-warning text-center'>programming languages</h4>

 <div className='d-flex justify-content-between bg-dark text-light'>
    
 <div>
  <ul>
 <li>Html</li> 
<li> sql </li>
 <li>java script</li>
 <li>Bootstrap</li>
 <li> nosql -mongo dB -fire Base </li>

<li>ECMAScript6</li> 
<li>typescript</li>
<li>c#</li>

  </ul>
    </div>
    <div className='w-50 py-4 ' >
  
    <ProgressBar variant="success"  className=' my-4 '  now={60} label={"React-js"} />
    <ProgressBar variant="warning"  className=' my-4' now={80} label={"Angular"} />
    <ProgressBar variant="danger"  className=' my-4' now={90} label={"Html5"} />
    <ProgressBar variant="info"   className=' my-4' now={70} label={"css3"} />
    <ProgressBar variant="warning" className=' my-4' now={80} label={"sass"} />
    </div>

 </div>
    </>
)
}
export default Skills;
