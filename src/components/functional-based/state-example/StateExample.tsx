import {useState} from "react";

export const StateExample = () => {

    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState({id: 0, name: 'Bob'})

    const increment = () => setCounter(counter => {
        return counter + 1
    });

    return (
        <div>
            <div>{counter}</div>
            <button onClick={increment}>
                Counter
            </button>
        </div>
    )
}