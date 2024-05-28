import {Component, PureComponent} from "react";

export class StateExample extends PureComponent<{}, {counter: number, user: {id: number, name: string}}> {

    state = {
        counter: 0,
        user: {
            id: 0,
            name: '123'
        }
    }

    constructor(props: {}) {
        super(props);
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((state, props) => {
            return {
                counter: state.counter + 1,
                user: { ...this.state.user, name: '123'}
            }
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.counter}</div>
                <div>{this.state.user.name}</div>
                <button onClick={this.increment}>
                    Counter
                </button>
            </div>
        )
    }
}