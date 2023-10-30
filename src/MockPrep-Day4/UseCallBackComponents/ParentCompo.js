import React, { useState, useCallback } from "react";
import TitleCompo from "./TitleCompo";
import CountCompo from "./CountCompo";
import ButtonCompo from "./ButtonCompo";

export default function ParentCompo() {
    const [age, setAge] = useState(22);
    const [salary, setSalary] = useState(0);

    const incrementAge =useCallback( () => {
        setAge(age + 1);
    }, [age]);


    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000);
    }, [salary]);
    
    return (<>
        <TitleCompo />
        <CountCompo text={'Age'} count={age} />
        <ButtonCompo text={'increment Age'} clickFun={incrementAge}/>
        <CountCompo text={'Salary'} count={salary} />
        <ButtonCompo text={'increment Salary'} clickFun={incrementSalary}/>

    </>)
}
