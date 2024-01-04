import React ,{useEffect, useState} from 'react';
function Hook() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Counter : ${counter}`;
    });
    return(
        <div>
            <p> You clicked {counter} times</p>
            <button onClick={() => {setCounter(counter + 1)}} >Click Me</button>
        </div>
    )
}
export default Hook;