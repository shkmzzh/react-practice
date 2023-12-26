import './app.scss'
import {useContext} from 'react'
import { CountContext } from './count-context'
export const CartCounter = ({id,orderNum}) => {
    const {changeCount} = useContext(CountContext)
  return (
    <div className="my-counter">
      <button type="button" className="btn btn-light" onClick={()=>{changeCount(id,orderNum-1)}}>
        -
      </button>
      <input type="input" className="form-control inp" value={orderNum} onChange={e=>{changeCount(id,e.target.value)}} />
      <button type="button" className="btn btn-light" onClick={()=>changeCount(id,orderNum+1)}>
        +
      </button>
    </div>
  )
}