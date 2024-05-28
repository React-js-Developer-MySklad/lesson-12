import {ChangeEvent, Component} from "react";

type iProps = {
    name: string
    onChange(value: string): void
}
export class Child extends Component<iProps> {
    className = 'some-class';

    render() {
        return (
            <div className='some-class' >
                <div className={this.props.name ? this.className : ''} >
                    <input
                        value={this.props.name}
                        onInput={(e: ChangeEvent<HTMLInputElement>) => this.props.onChange(e.target.value)}
                    />
                </div>
            </div>
        )
    }

}