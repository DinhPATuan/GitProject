import React from "react";
const Counter = () =>{
    const [increase,setIncrease] = React.useState({number: 0});
    const add = () => {
        const myIncrease = {...increase}
        myIncrease.number = myIncrease.number + 1 ;
        setIncrease({
            ...increase,
            number: myIncrease.number
        });
        console.log(increase.number);
    }

    return(
        <div>
            <p>Number {increase.number}</p> 
            <button onClick={add}>+1</button>
        </div>
    );
    }

export default Counter;