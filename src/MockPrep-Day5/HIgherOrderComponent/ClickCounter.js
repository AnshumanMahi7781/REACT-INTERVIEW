import HigherOrderCompo from "./HigherOrderCompo"

function ClickCounter(props){
    return(
        <button onClick={()=> props.propsFun()}>Button Clicked {props.propsState} Times</button>
    )
}
export default HigherOrderCompo(ClickCounter, 20)