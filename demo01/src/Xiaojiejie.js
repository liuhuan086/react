// import React, {Component} from 'react'
import React, {Component, Fragment} from 'react'
import './style.css'
import XiaojiejieItem from "./XiaojiejieItem";
import axios from 'axios'
import Boss from './Boss'
// TransitionGroup可以控制多DOM
import {CSSTransition, TransitionGroup} from "react-transition-group";

class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //数据驱动，那就在这里填入数据
            inputValue: "",
            // list: ["基础按摩", "精油推背", "全身按摩"]
            // 数据初始化完毕

            list: []
        }
    }

    // 将axios在componentDidMount生命周期函数中
    // 第一次进入页面，需要页面数据的时候，就写到这里面，它只加载一次，
    // 我们再update的时候，是不会再发生改变的
    componentDidMount() {
        axios.get('https://easy-mock.com/mock/5f97fd83799531652701fe83/react/xjaojiejie')
            //then就是一个回调函数，当获取数据之后，就返回一个ajax，就相当于参数
            .then((res) => {
                console.log('axios 获取成功：' + JSON.stringify(res))
                this.setState({
                    list: res.data.data
                })
            })
            .catch((error) => {
                console.log('获取数据失败：' + error)
            })
    }

    // UNSAFE_componentWillMount() {
    //     console.log('组件将要挂载到页面的时刻')
    // }
    //
    // componentDidMount() {
    //     console.log("组件挂载完成")
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log("1、shouldComponentUpdate")
    //     return true
    // }
    //
    // UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log("2、UNSAFE_componentWillUpdate")
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("4、componentDidUpdate")
    // }


    render() {
        // console.log('3、render开始渲染')
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
                    <input
                        id="test"
                        className={"input"}
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => {
                            this.input = input
                        }}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>

                <ul ref={(ul) => {
                    this.ul = ul
                }}
                >
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames="boss-text"
                                        unmountOnExit
                                        key={index + item}
                                    >
                                        <
                                            XiaojiejieItem
                                            // avname={'波多野结衣'}
                                            key={item + index}
                                            content={item}
                                            index={index}
                                            deleteItem={this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                {/*</div>*/}

                <Boss/>

            </Fragment>
        )
    }

    // 在render函数外部实现事件绑定的方法
    // e是默认的传递的参数
    // inputChange(e) {
    //     // console.log(e)
    //     /*
    //     *
    //     * SyntheticBaseEvent {_reactName: "onChange", _targetInst: null, type: "change", nativeEvent: InputEvent, target: input, …}
    //     * bubbles: true
    //     * cancelable: false
    //     * currentTarget: null
    //     * defaultPrevented: false
    //     * eventPhase: 3
    //     * isDefaultPrevented: ƒ functionThatReturnsFalse()
    //     * isPropagationStopped: ƒ functionThatReturnsFalse()
    //     * isTrusted: true
    //     * nativeEvent: InputEvent {isTrusted: true, data: "s", isComposing: false, inputType: "insertText", dataTransfer: null, …}
    //     * target: input
    //     * timeStamp: 101620.88000000222
    //     * type: "change"
    //     * _reactName: "onChange"
    //     * _targetInst: null
    //     * __proto__: Object
    //     *
    //     * */
    //
    //     // 但是通过这种方式，在页面上看不到数据有任何的变量
    //     console.log(this)
    //     // 下面会报错，this的指向是错误的，需要使用bind方法进行绑定才可以
    //     // this.state.inputValue = e.target.value
    //
    //     // 同时数据的改变也不能用上面这种方式
    //     this.setState({
    //         inputValue: e.target.value
    //     })
    // }

    inputChange(e) {
        this.setState({
            inputValue: this.input.value
        })
    }

    // 增加列表
    addList() {
        this.setState({
                // ... 三个点表示扩展运算符，相当于把上面list中的元素全都以 点 来代替
                list: [...this.state.list, this.state.inputValue],
                // 通过这种方式输入框中的值就会被清空，否则会出现在输入框中
                inputValue: ""
            },
            /* 通过回调函数的形式，就可以将结果进行同步 */
            () => {
                console.log(this.ul.querySelectorAll('li').length)

            })
        /* 发现下面打印的长度总是少一个 */
        // console.log(this.ul.querySelectorAll('li').length)
        /*
        *
        * setState是一个异步的方法，不是同步的方法，虚拟DOM渲染也是需要时间的，
        * 因为console是实时刷新的，还未等setState执行完毕（还未渲染完成）就将结果输出，
        * 因此打印的是上一次渲染后的结果。
        *
        * */
    }

    // 删除列表
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie