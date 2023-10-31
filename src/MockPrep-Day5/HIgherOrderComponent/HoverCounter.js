import HigherOrderCompo from "./HigherOrderCompo"

function HoverCounter(props){
    return(
        <button onMouseEnter={()=>  props.propsFun()}>Button Hover {props.propsState} Times</button>
    )
}
export default  HigherOrderCompo(HoverCounter, 10)