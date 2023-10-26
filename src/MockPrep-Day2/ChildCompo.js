import React, {Component} from "react";
 export default class ChildCompo extends Component{
    render(){
        return(
            <>
           <h1>Counter Value : {this.props.data}</h1>
           <button onClick={this.props.fun}>Increment</button>
            </>
        )
    }
 }