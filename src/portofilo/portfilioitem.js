function Portfolioitem(props){
return(
    <>
   <div className="col-3 my-2 mx-3 text-light bg-dark ">
   <h5 className="text-info">{props.title} </h5>
    <div>{props.body}</div>
   </div>
    </>
)
}
export default Portfolioitem;