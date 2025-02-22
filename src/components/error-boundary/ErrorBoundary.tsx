import {Component, ErrorInfo, PropsWithChildren} from "react";

type State = {
    error: Error
}

export class ErrorBoundary extends Component<PropsWithChildren, State> {
    constructor(props: PropsWithChildren) {
        super(props);
        this.state = { error: undefined };
    }

    // update state
    static getDerivedStateFromError(error: Error) {
        return {error}
    }

    // log error
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({error})
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return <p>Something went badly wrong</p>;
        }

        return this.props.children;
    }

}