import { Component } from 'react'
import axios from 'axios'
import PropType from 'prop-types'
class Header extends Component {
  static props = {
    getData: PropType.func.isRequired
  }
  state = {
    todoName: ''
  }
  changeInput = (e) => {
    console.log('e', e.target.value);
    this.setState({
      todoName: e.target.value
    })
  }
  changeAddEvent = async (e) => {
   
    if (e.keyCode === 13) {
        console.log('event',e);
      const name = this.state.todoName.trim()
      if (!name) return
      await axios.post('http://localhost:5000/todos', { name, done: false })
      this.setState({ todoName: "" });
      this.props.getData()
    }
  }
  render() {
    return (
      <header className="header">
        <h1>TodoMVC</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus value={this.state.todoName} onChange={this.changeInput} onKeyUp={this.changeAddEvent} />
      </header>
    )
  }
}
export default Header
