import { createRoot } from 'react-dom/client'
import './index.css'

// import {BTN} from './components/button.js'
// import Comments from './components/comments'
// import {Upload} from './components/upload.js'
// import Parent from './components/Parent'
// import Main from './components/main.js'
// import Navbar from './components/navbar.js'
// import Clock from './components/cycle.js'
import TodoMVC from './TodoMVC/index'
const el = (
  <>
    <TodoMVC></TodoMVC>
  </>
)

createRoot(document.getElementById('root')).render(el)
