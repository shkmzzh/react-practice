import axios from 'axios'
import { useEffect, useState } from 'react'
import { CartHeader } from './cartHeader'
import { CartFooter } from './cartFooter'
import { GoodsItem } from './GoodsItem'
import { CountContext } from './count-context'
import './app.scss'
const http = axios.create({ baseURL: 'http://localhost:5000' })
export const App = () => {
  const [goodsList, setGoodsList] = useState([])
  const [checkAll, setCheckAll] = useState(false)
  useEffect(() => {
    const loadData = async () => {
      const res = await http.get('/goodsList')
      console.log(res)
      setGoodsList(res.data)
    }
    loadData()
  }, [])
  const changeGoodsState = async (id, state) => {
    const newGoodsList = goodsList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          state
        }
      }
      return item
    })
    setGoodsList(newGoodsList)
    setCheckAll(newGoodsList.every((item) => item.state))
    await http.patch(`/goodsList/${id}`, { state })
  }
  const changeChAll = (bol) => {
    setCheckAll(bol)
    console.log(bol)
    setGoodsList(
      goodsList.map((item) => {
        return { ...item, state: bol }
      })
    )
    goodsList.forEach((item) => {
      http.patch(`/goodsList/${item.id}`, { state: bol })
    })
  }
  const totalCount = goodsList.reduce((count, item) => {
    if (item.state) {
      return (count += item.orderNum)
    }
    return count
  }, 0)
  const totalPrice = goodsList.reduce((count, item) => {
    if (item.state) {
      return (count += item.orderNum * item.price)
    }
    return count
  }, 0)
  const changeCount = async (id, count) => {
    setGoodsList(
      goodsList.map((item) => {
        if (item.id === id) {
          return { ...item, orderNum: count }
        }
        return item
      })
    )
    await http.patch(`/goodsList/${id}`, { orderNum: count })
  }
  return (
    <CountContext.Provider value={{changeCount}}>
      <div className="app">
        <CartHeader>我爱说实话</CartHeader>
        {goodsList.map((item) => (
          <GoodsItem key={item.id} {...item} changeGoodsState={changeGoodsState}></GoodsItem>
        ))}
        <CartFooter checkAll={checkAll} changeChAll={changeChAll} totalCount={totalCount} totalPrice={totalPrice}></CartFooter>
      </div>
    </CountContext.Provider>
  )
}
