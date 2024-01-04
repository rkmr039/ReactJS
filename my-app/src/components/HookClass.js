import React from 'react';
// import Hook from './Hooks';

class HookClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.counter} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.counter} times`;
    }
    render() {
        return(
            <div>
                <p> You clicked {this.state.counter} times</p>
                <button onClick={() => this.setState({counter : this.state.counter  +1})} >Click Me</button>
            </div>
        )
    }
}

export default HookClass;