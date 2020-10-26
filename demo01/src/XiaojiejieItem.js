import React, {Component} from "react";
import "./style.css";

// import Xiaojiejie from "./Xiaojiejie";

class XiaojiejieItem extends Component {
    // state = {}
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <li onClick={this.handleClick}>
                {/*这种方式是写死的，不能实现参数传递*/}
                {/*小姐姐*/}
                {this.props.content}
            </li>
        );
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

export default XiaojiejieItem