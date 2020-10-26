import React, {Component} from "react"

// 上面句等同于下面两句，先引入，然后设置中括号中的为导入的方法
// import React from 'react'
// const Component = React.Component


// class App extends Component {
//     render() {
//         //相当于在js中写html格式的代码
//         return (
//             <div>
//                 Hello World
//             </div>
//         )
//     }
// }

class App extends Component {
    render() {
        //相当于在js中写html格式的代码
        return (
            <ul className="my-list">
                <li>Hello</li>
                <li>World</li>
            </ul>

        // var child1 = React.createElement("li", null, "Hello")
        // var child2 = React.createElement("li", null, "World")
        // var root = React.createElement("ul", {className: "my-list"}, child1, child2)
    )
    }
}

export default App