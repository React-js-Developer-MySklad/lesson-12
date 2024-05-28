import React, {useState} from "react";
import {Child} from "./child/Child";

export const liftingStateUpExample = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <div>Name: {name}</div>
            <Child
                name={name}
                onChange={name => setName(name)}/>
        </div>
    )
}