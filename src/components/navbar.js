import {Component} from 'react'
const NavBar = props => {
    return (
      <div className="nav-bar">
        <span>&lt;</span>
        <div className="title">666{props.children}</div>
      </div>
    )
  }
  
  export default class App extends Component {
    render() {
      return (
        <div>
          <NavBar>标题666</NavBar>
          <br />
          <NavBar>
            <button>cs</button>
          </NavBar>
          <br />
          <NavBar>
            <span style={{ color: 'red' }}>花哨的标题</span>
          </NavBar>
        </div>
      )
    }
  }