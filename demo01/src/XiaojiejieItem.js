import React, {Component} from "react";
import "./style.css";
import PropTypes from 'prop-types'

// import Xiaojiejie from "./Xiaojiejie";

class XiaojiejieItem extends Component {
    // state = {}
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log("0、UNSAFE_componentWillReceiveProps")
    }

    componentWillUnmount() {
        console.log("++++++componentWillUnmount")
    }

    render() {
        return (
            <li onClick={this.handleClick}>
                {/*这种方式是写死的，不能实现参数传递*/}
                {/*小姐姐*/}
                {this.props.avname}-为你提供-{this.props.content}
            </li>
        );
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

XiaojiejieItem.defaultProps = {
    avname: "松岛枫"
}

export default XiaojiejieItem