// import React, {Component} from 'react'
import React, {Component, Fragment} from 'react'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //数据驱动，那就在这里填入数据
            inputValue: "Ryan",
            list: []
            // 数据初始化完毕
        }
    }

    render() {
        return (
            // <div>
            <Fragment>
                <div>
                    {/* 完成上面的数据绑定 */}
                    {/* input说明状态有变化，这时就需要事件绑定，onChange*/}
                    {/*<input value={this.state.inputValue} onChange={this.inputChange}/>*/}
                    {/* 下面用this.state.inputValue = e.target.value会报错，需要进行绑定 */}
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button>增加服务</button>
                </div>

                <ul>
                    <li>头部按摩</li>
                    <li>精油推背</li>
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
}

export default Xiaojiejie