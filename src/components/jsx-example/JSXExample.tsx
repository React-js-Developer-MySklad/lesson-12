import React, {PropsWithChildren, ReactNode, useState} from "react";

type iProps = {
    children: ReactNode
}

export const JSXExample: React.FC<iProps> = ({children}) => {

    const items = [{id: 1, name: 'bob'}]
    const [boolValue, setBoolValue] = useState(true)

    return (
        <>
            {boolValue && <div>condition rendering</div>}
            <button onClick={() => setBoolValue(!boolValue)}>Toggle</button>
            <ul>
            {
                items.map(item => {
                    return (
                        <li key={item.id}>item.name</li>
                )})
            }
            </ul>

            <div>{children}</div>
        </>
    )
}