import PropTypes from 'prop-types'
import axios from 'axios'
import { every } from 'lodash'
const Main = (props) => {
  const changeDelEvent = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`)
    props.getData()
  }
  const chanegToggleState = async (id, done) => {
    await axios.patch(`http://localhost:5000/todos/${id}`, { done: !done })
    props.getData()
  }
  // let checkedValue = props.ListData.every(item=>item.done)
  const changeChecked = (val) => {
    console.log(val)
    var checkedValue = val
  }
  return (
    <section className="main">
      <input id="toggle-all" checked={checkedValue} className="toggle-all" type="checkbox" onChange={(e) => changeChecked(e.target.checked)} />
      <label
        htmlFor="toggle-all"
        onClick={() => {
          props.AllChecked(checkedValue)
        }}
      >
        Mark all as complete
      </label>
      <ul className="todo-list">
        {props.ListData.map((item) => (
          <li key={item.id} className={item.done ? 'completed' : ''}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={item.done} onChange={() => chanegToggleState(item.id, item.done)} />
              <label>{item.name}</label>
              <button
                className="destroy"
                onClick={() => {
                  changeDelEvent(item.id)
                }}
              ></button>
            </div>
            <input className="edit" />
          </li>
        ))}
      </ul>
    </section>
  )
}

Main.propTypes = {
  ListData: PropTypes.array,
  getData: PropTypes.func.isRequired,
  AllChecked: PropTypes.func
}
export default Main
