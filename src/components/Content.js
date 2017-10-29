import React, {Component} from 'react';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textContent: this.props.textContent
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.textContent}</p>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.textContent !== this.state.textContent) {
        this.setState({ textContent: nextProps.textContent });
      }
    }
}