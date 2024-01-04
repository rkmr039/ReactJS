import React, {useState} from 'react';
export default function UseStateHook() {

    function getInitial() {
        console.log('rendered');
        return 4;
    }
    const [counter, setCounter] = useState(() => getInitial());

    function decrementCounter() {
        setCounter((prevCounter) => prevCounter - 1);
        console.log(counter);
    }

    function incrementCounter() {
        setCounter(prevCounter => prevCounter + 1);
    }
    
    return(
        <>
            <button onClick={decrementCounter}>-</button>
            <span>{counter}</span>
            <button onClick={incrementCounter}>+</button>
        </>
    )
}