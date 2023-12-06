import { Component } from 'react'
import './index.css'
import Header from './header'
import Main from './main'
import Footer from './footer'
import axios from 'axios'

export default class TodoMVC extends Component {
  state = {
    listData: [],
    itemLeft: []
  }
  componentDidMount() {
    this.getData()
  }
  getData = async () => {
    const res = await axios.get('http://localhost:5000/todos')
    console.log(res.data)
    this.setState(
      {
        listData: res.data,
        itemLeft: res.data.filter((item) => item.done === false)
      },
      () => {
        console.log(this.state.itemLeft)
      }
    )
  }
  allChecked = (val) => {
    console.log(val);
    debugger
    this.setState((prevState) => {
      return {
        listData: prevState.listData.map((item) => {
          return { ...item, done: val };
        })
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header getData={this.getData}></Header>
        <Main ListData={this.state.listData} getData={this.getData} AllChecked={this.allChecked}></Main>
        <Footer ItemLeft={this.state.itemLeft}></Footer>
      </section>
    )
  }
}
