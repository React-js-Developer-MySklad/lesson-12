import {ChangeEvent, Component} from "react";

type iProps = {
    name: string
    onChange(value: string): void
}
export class Child extends Component<iProps> {

    render() {
        return (
            <div>
                <input
                    value={this.props.name}
                    onInput={(e: ChangeEvent<HTMLInputElement>) => this.props.onChange(e.target.value)}
                />
            </div>
        )
    }

}