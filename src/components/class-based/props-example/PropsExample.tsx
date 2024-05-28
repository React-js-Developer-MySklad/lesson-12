import {Component} from "react";

export class PropsExample extends Component<{counter: number}> {
    constructor(props: {counter: number}) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.counter}</div>
        )
    }
}