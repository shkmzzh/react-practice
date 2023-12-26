import './app.scss'
import { CartCounter } from './countContext'
export const GoodsItem = ({ id, name, state, price, picture, orderNum, changeGoodsState }) => {
  return (
    <div className="my-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="input"
            checked={state}
            onChange={(e) => changeGoodsState(id, e.target.checked)}
          />
          <label className="custom-control-label" htmlFor="input">
            <img src={picture} alt="" />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{name}</div>
        <div className="bottom">
          <span className="price">¥ {price}</span>
          <span>
            <CartCounter id={id} orderNum={orderNum}></CartCounter>
          </span>
        </div>
      </div>
    </div>
  )
}
