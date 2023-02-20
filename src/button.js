function Button(props){
return(
    <>
  <button className={props.className} style={{background:`${props.bg}` ,border:`${props.border}` }} >{props.btnname}</button>
    </>
)
}
export default Button;