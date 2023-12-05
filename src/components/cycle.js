import { Component } from 'react'
import Content from './cycleson.js'
export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), opacity: 1.0, count: 0 }
  }

  // 进入页面时立即调用
  componentDidMount() {
    console.log('1111111')
    this.timerID = setInterval(() => {
      this.tick()
      let opacity = this.state.opacity
      opacity -= 0.5
      if (opacity < 0.1) {
        opacity = 1.0
      }
      this.setState({
        opacity: opacity
      })
    }, 1000)
  }

  // 页面不渲染时销毁
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  setNewNumber() {
    this.setState({
      count: this.state.count + 1
    })
    this.setState(
      (state) => ({}),
      () => {console.log('这个回调函数会在状态更新后并且 DOM 更新后执行')}
    )
  }

  render() {
    return (
      <div>
        <h1>Hello, Runoob! {this.state.count}</h1>
        <button onClick={()=>this.setNewNumber()}>点我啊</button>
        <h2 style={{ opacity: this.state.opacity }}>现在时间是：{this.state.date.toLocaleTimeString()}</h2>
        <Content myNumber={this.state.count}></Content>
      </div>
    )
  }
}
