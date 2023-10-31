import React from "react";


export default class MoutningPhaseCompo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            change : true
        }
        console.log("Constructor of MountingPhase");
    }
   
    render(){
        console.log("Render of MountingPhase")
        return(
           <>
          {this.state.change ? <UnMountingCompo/> : null}
        
        <button  onClick={()=> this.setState({change : !this.state.change})}>Increment</button>
           </>
        )
    }
}


class UnMountingCompo extends  React.Component{

    componentWillUnmount(){
       console.log("COMPONENT GYA RE")
    }
    render(){
        return(<p>Button pa Click kro aur main Gayab ho jaunga</p>)
    }
}