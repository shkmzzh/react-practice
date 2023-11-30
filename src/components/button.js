import { Component, createRef } from 'react'

export class BTN extends Component {
  // 创建 ref 对象
  RefText = createRef()
  state = {
    count: 10,
    msg: '练习时长两年半'
  }
  handleClick = () => {
    console.log('来了哦,嗨嗨嗨', this)
    this.setState({
      count: this.state.count + 1
    })
  }
  changeTo(e) {
    console.log(this)
    e.preventDefault()
    console.log('跳转了吗')
  }
  handleInput = (e) => {
    this.setState({
      msg: e.target.value
    })
    console.log(this.state.msg)
  }
  getText=()=>{
    console.log(this.RefText.current.value)
  }
  render() {
    return (
      <div>
        <h3>计数器: {this.state.count}</h3>
        <button onClick={this.handleClick}>点我啊</button>
        <a href="http://4399.com/" onClick={this.changeTo}>
          giao
        </a>
        <p>input 1</p>
        <input type="text" value={this.state.msg} onChange={this.handleInput} />
        <p>input 2</p>
        <input type="text" ref={this.RefText} />
        <button onClick={this.getText}>获取文本框的值</button>
      </div>
    )
  }
}
