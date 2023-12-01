import { Component } from 'react'
export default class Mike extends Component {
  setMsg = () => {
    this.props.getMsgA('唱跳REP,打篮球')
  }
  render() {
    return <div>mike
            {this.props.children}
        <button onClick={this.setMsg}>坤坤有话说</button>
    </div>
  }
}
