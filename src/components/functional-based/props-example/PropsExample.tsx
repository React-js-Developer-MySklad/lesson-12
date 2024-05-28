import React from "react";

type iProps = {
    counter: number
}

export const PropsExample: React.FC<iProps> = ({counter}) => {
    return(
        <div>{counter}</div>
    )
}