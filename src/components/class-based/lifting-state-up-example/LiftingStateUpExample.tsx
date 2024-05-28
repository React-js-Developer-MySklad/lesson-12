import {Child} from "./child/Child";
import {Component} from "react";

type iState = {
    name: string
}

export class LiftingStateUpExample extends Component<{}, iState> {

    state = {
        name: ''
    }

    render() {
        return (
            <div>
                <div>Name: {this.state.name}</div>
                <Child
                    name={this.state.name}
                    onChange={name => this.setState({name: name})}/>
            </div>
        )
    }

}