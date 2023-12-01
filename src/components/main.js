import { Component, createRef } from 'react'
import MyContext from './MyContext';
// 实现兄弟传值
import Mike from './Mike'
import Saul from './Saul'
import Rose from './Rose'

export default class Main extends Component {
  state = {
    msg: ''
  }
  refSaul = createRef()
  getMsg = (msg) => {
    console.log(msg)
    this.setState({
      msg: msg
    })
    this.refSaul.current.kunkun()
  }
  render() {
    return (
      <MyContext.Provider value="kun66666666666666666">
        <div>
          <h1>{this.props.children}</h1>
          <Mike getMsgA={this.getMsg}></Mike>
          <Saul Msg={this.state.msg} ref={this.refSaul}></Saul>
          <Rose></Rose>
        </div>
     </MyContext.Provider>
    )
  }
}
