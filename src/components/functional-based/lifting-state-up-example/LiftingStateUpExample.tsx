import React, {useState} from "react";
import {Child} from "./child/Child";

export const LiftingStateUpExample = () => {
    const [name, setName] = useState<string | undefined>('')
    return (
        <div>
            <div>Name: {name}</div>
            <Child
                name={name}
                onChange={name => setName(name)}/>
        </div>
    )
}