import React, {ChangeEvent, useEffect, useState} from "react";
import {Child} from "./child/Child";

export const LifecycleExample: React.FC = () => {
    const [state, setState] = useState('')

    return (
        <div>
            <input value={state} onChange={(e: ChangeEvent<HTMLInputElement>) => setState(e.target.value)}/>
            <Child name={state}/>
        </div>
    )
}