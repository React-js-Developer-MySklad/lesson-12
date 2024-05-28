import {useEffect} from "react";

export const ChildWithError = () => {

    // component mount
    useEffect(() => {
        throw new Error('Component has been mounted!')

        // component unmount
        return () => {
            throw new Error('Component has been unmounted!')
        }
    }, [])


    // event handler
    const onClickHandler = () => {
        throw new Error('Something wrong with onClick handler')
    }

    return <button onClick={onClickHandler}> Click Me</button>
}