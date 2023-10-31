import React, {useState} from 'react';
function HigherOrderCompo(OriginalCompo, incrementVal){

    function NewComponent(){

        const [state, setState] = useState(0);

        const incrementState = ()=>{
            
            setState(state + incrementVal);
        }
        return <OriginalCompo propsState={state} propsFun= {incrementState} />
    }

    return NewComponent
}
export default HigherOrderCompo
