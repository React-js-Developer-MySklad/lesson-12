import {Component} from "react";

export class StateExample extends Component<{}, {counter: number}> {

    state = {
        counter: 0
    }

    constructor(props: {}) {
        super(props);
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState(state => ({counter: state.counter + 1}))
    }

    render() {
        return (
            <div>
                <div>{this.state.counter}</div>
                <button onClick={this.increment}>
                    Counter
                </button>
            </div>
        )
    }
}