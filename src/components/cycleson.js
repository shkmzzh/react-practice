import { Component } from 'react' // 导入React组件库中的Component模块

export default class Content extends Component {
  // 声明一个名为Content的类组件并继承自React的Component基类
  componentWillMount() {
    // 在组件将要被渲染到DOM之前调用的生命周期方法
    console.log('组件将安装！')
  }
  componentDidMount() {
    // 在组件已经被渲染到DOM后调用的生命周期方法
    console.log('组件DID安装 !')
  }
  componentWillReceiveProps(newProps) {
    // 在组件接收到新的props时调用的生命周期方法
    console.log('组件将收到 props !')
  }
  shouldComponentUpdate(newProps, newState) {
    // 决定组件是否需要重新渲染的生命周期方法
    return true // 总是返回true，表示需要重新渲染
  }
  componentWillUpdate(nextProps, nextState) {
    // 在组件将要被重新渲染前调用的生命周期方法
    console.log('组件将会更新！')
    
  }
  componentDidUpdate(prevProps, prevState) {
    // 在组件已经被重新渲染后调用的生命周期方法
    console.log('组件确实更新了！')
  }
  componentWillUnmount() {
    // 在组件将要被从DOM中移除前调用的生命周期方法
    console.log('组件将卸载！')
  }

  render() {
    // 渲染组件的方法
    return (
      <div>
        我爱说实话
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}
