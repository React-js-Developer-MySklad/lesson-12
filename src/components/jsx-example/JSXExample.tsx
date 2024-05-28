import React, {PropsWithChildren} from "react";

export const JSXExample: React.FC<PropsWithChildren> = ({children}) => {

    const items = [{id: 1, name: 'bob'}]
    const boolValue = false;
    return (
        <>
            {boolValue && <div>condition rendering</div>}
            {
                items.map(item => {
                    return item.name;
                })
            }

            <div>{children}</div>
        </>
    )
}