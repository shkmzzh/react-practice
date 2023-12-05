import { Component } from 'react'
import './index.css'
import Header from './header'
import Main from './main'
import Footer from './footer'

export default class TodoMVC extends Component {
  render() {
    return <section className="todoapp">

        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </section>
  }
}
