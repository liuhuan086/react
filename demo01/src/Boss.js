import React, {Component} from 'react'
import {CSSTransition} from "react-transition-group";

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.toDoSth = this.toDoSth.bind(this)
    }

    render() {
        return (
            <div>
                <CSSTransition
                in={this.state.isShow}
                timeout={2000}
                classNames="boss-text"
                >
                    <div>Boss</div>
                </CSSTransition>
                <div>
                    <button onClick={this.toDoSth}>召唤Boss</button>
                </div>
            </div>
        )
    }

    toDoSth() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default Boss