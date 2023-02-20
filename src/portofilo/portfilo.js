import Portfolioitem from "./portfilioitem";
function Portfolio(){
return(
    <>
    <h2 className="text-warning text-center">Portfolio</h2>
    <div className="row justify-content-around text-center">
<Portfolioitem title="todo by fire base" body="i use bootstrab and fire base"/>
<Portfolioitem title="todo by fire angular" body="i use bootstrab and angular"/>
<Portfolioitem title="simulate facebook  home page" body="i use css3 and Html5"/>
<Portfolioitem title="e-commerce" body="i use bootstrab and Angular"/>
<Portfolioitem title="design my cv" body="i use angular"/>
<Portfolioitem title="todo by fire base" body="i use bootstrab and fire base"/>
    </div>
    </>
)
}
export default Portfolio;