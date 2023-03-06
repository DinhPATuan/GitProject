import React, { useEffect } from "react";

const Timer = () =>{
    const [count,setCount] = React.useState({number:10})

    useEffect(() =>{
        const intervalID = setInterval(()=>{
            if(count.number > 0){
                const myCount = {...count};
                myCount.number = myCount.number - 1;
                setCount({
                    ...count,
                    number: myCount.number
                });
            }
            else{
                alert("Time's up")
                return clearInterval(intervalID)
            }
        },1000);

        return() => {
            clearInterval(intervalID);
        }

    },[count])

    return(
        <div>
            <h1>Time: {count.number}</h1>
        </div>
    )

}
export default Timer;