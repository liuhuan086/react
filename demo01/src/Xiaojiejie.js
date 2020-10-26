// import React, {Component} from 'react'
import React, {Component, Fragment} from 'react'
import './style.css'
import XiaojiejieItem from "./XiaojiejieItem";

class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //数据驱动，那就在这里填入数据
            inputValue: "Ryan",
            list: ["基础按摩", "精油推背", "全身按摩"]
            // 数据初始化完毕
        }
    }

    render() {
        return (
            // <div>
            <Fragment>
                <div>
                    {/*
                        点击标签之后，鼠标聚焦到输入框中，
                        使用htmlFor是为了区分JavaScript中的关键词for
                    */}
                    <label htmlFor={"test"}>增加服务</label>

                    {/* 完成上面的数据绑定 */}
                    {/* input说明状态有变化，这时就需要事件绑定，onChange*/}
                    {/*<input value={this.state.inputValue} onChange={this.inputChange}/>*/}
                    {/* 下面用this.state.inputValue = e.target.value会报错，需要进行绑定 */}
                    <input id="test" className={"input"} value={this.state.inputValue}
                           onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>

                <ul>
                    {
                        <XiaojiejieItem />
                    }
                </ul>
                {/*</div>*/}
            </Fragment>
        )
    }

    // 在render函数外部实现事件绑定的方法
    // e是默认的传递的参数
    inputChange(e) {
        // console.log(e)
        /*
        *
        * SyntheticBaseEvent {_reactName: "onChange", _targetInst: null, type: "change", nativeEvent: InputEvent, target: input, …}
        * bubbles: true
        * cancelable: false
        * currentTarget: null
        * defaultPrevented: false
        * eventPhase: 3
        * isDefaultPrevented: ƒ functionThatReturnsFalse()
        * isPropagationStopped: ƒ functionThatReturnsFalse()
        * isTrusted: true
        * nativeEvent: InputEvent {isTrusted: true, data: "s", isComposing: false, inputType: "insertText", dataTransfer: null, …}
        * target: input
        * timeStamp: 101620.88000000222
        * type: "change"
        * _reactName: "onChange"
        * _targetInst: null
        * __proto__: Object
        *
        * */

        // 但是通过这种方式，在页面上看不到数据有任何的变量
        console.log(this)
        // 下面会报错，this的指向是错误的，需要使用bind方法进行绑定才可以
        // this.state.inputValue = e.target.value

        // 同时数据的改变也不能用上面这种方式
        this.setState({
            inputValue: e.target.value
        })
    }

    // 增加列表
    addList() {
        this.setState({
            // ... 三个点表示扩展运算符，相当于把上面list中的元素全都以 点 来代替
            list: [...this.state.list, this.state.inputValue],
            // 通过这种方式输入框中的值就会被清空，否则会出现在输入框中
            inputValue: ""
        })
    }

    // 删除列表
    DeleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie