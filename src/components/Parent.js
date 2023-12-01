import { Component } from 'react'
import { Child } from './Child'
class Parent extends Component {
  state = {
    money: 100
  }
  addNum = () => {
    this.setState({
      money: this.state.money + 1
    })
  }
  delNum=()=>{
    this.setState({
        money:this.state.money-1
    })
  }
  render() {
    return (
      <div>
        <h1>我是父组件{this.state.money}</h1>
        <button onClick={this.addNum}>+1</button>
        {/* 将数据传递给子组件 */}
        <Child money={this.state.money} DelNum={this.delNum}></Child>
      </div>
    )
  }
}

export default Parent
