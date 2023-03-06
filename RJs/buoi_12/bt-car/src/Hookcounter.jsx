import React from "react";
const useCounter = (initialNum) =>{
    const [increase,setIncrease] = React.useState(initialNum);
    const add = (addVal) => {
        setIncrease(increase + addVal);   
    }
    return[increase,add]
}

    export {useCounter}