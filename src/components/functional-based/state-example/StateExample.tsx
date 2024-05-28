import {useState} from "react";

export const StateExample = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => setCounter(counter => counter + 1);

    return (
        <div>
            <div>{counter}</div>
            <button onClick={increment}>
                Counter
            </button>
        </div>
    )
}