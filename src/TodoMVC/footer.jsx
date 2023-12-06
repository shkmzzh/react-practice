import PropTypes from 'prop-types'

const Footer = (props) => {
  console.log(props.ItemLeft)
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.ItemLeft.length?props.ItemLeft.length :0}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

Footer.propTypes = {
  ItemLeft: PropTypes.array
}

export default Footer
