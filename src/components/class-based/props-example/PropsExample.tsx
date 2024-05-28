import {Component, PureComponent} from "react";

type iProps = {
    counter: number
}

export class PropsExample extends PureComponent<iProps> {

    constructor(props: iProps) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.counter}</div>
        )
    }
}