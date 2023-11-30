import { createRoot } from 'react-dom/client'
import './index.css'

// import {BTN} from './components/button.js'
// import Comments from './components/comments'
import {Upload} from './components/upload.js'
const el = (
  <>
    <Upload></Upload>
  </>
)

createRoot(document.getElementById('root')).render(el)
