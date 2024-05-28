import React, {useEffect, useState} from "react";
type iProps = {
    name: string
}

export const Child: React.FC<iProps> = ({name}) => {
    const [state, setState] = useState(false)

    useEffect(() => {
        // mount
        console.log('mount')
        return () => {
            // unmount
            console.log('unmount')
        }
    }, []);

    // did update
    useEffect(() => {
        console.log('did update for each time')
    });

    useEffect(() => {
        console.log(`did update only for name ${name}`)
    }, [name]);

    useEffect(() => {
        console.log(`did update only for state ${state}`)
    }, [state])

    return (
        <div>
            <div>name: {name}</div>
            <div>state: {state}</div>
            <button onClick={() => setState(!state)}>Toggle State</button>
        </div>
    )
}