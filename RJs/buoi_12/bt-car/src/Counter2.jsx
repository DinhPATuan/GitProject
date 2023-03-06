import React from "react";
import { useCounter } from "./Hookcounter";

const Counter2 = () =>{
    const [increase,add] = useCounter(1);
    const [increase2,add2] = useCounter(1);

    return(
        <div>
            <h1>Num1: {increase}</h1>
            <button onClick={() =>add(2)}>Add Num1</button>
            <h1>Num1: {increase2}</h1>
            <button onClick={() => add2(2)}>Add Num2</button>
        </div>
    )
}

export default Counter2;