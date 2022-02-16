import { useState } from "react";

const Counter = (props) => {
const [count, setCount] = useState(0)

function addCount(){
    setCount((count +1));
}

function subCount(){

    if(count === 0){
        console.log("Let's stay positive");
    } else{
        setCount((count -1));
    }
}

function reset(){
    setCount(0);
}

    return (
        <div>
            <p>{props.range}</p>
            <p>{count}</p>
            <button className="button" onClick={addCount}> + </button>
            <button onClick={subCount}> - </button>
            <button onClick={reset}> Reset </button>

        </div>
    );

}

export default Counter;