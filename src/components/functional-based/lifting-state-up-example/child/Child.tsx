import React, {ChangeEvent} from "react";

type iProps = {
    name: string
    onChange: (name: string) => void
}

export const Child: React.FC<iProps> = ({name, onChange}) => {
    return (
        <input
            value={name}
            onInput={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        />
    )
}