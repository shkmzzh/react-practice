import { useState } from 'react'
import { CartHeader } from './cartHeader'
import { CartFooter } from './cartFooter'
import {GoodsItem} from './GoodsItem'
import './app.scss'
export const App = () => {
    return(
        <div className='app'>
        <CartHeader>我爱说实话</CartHeader>
        <GoodsItem></GoodsItem>
        <CartFooter></CartFooter>
        </div>
    )
}
