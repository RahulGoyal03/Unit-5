import React,{useContext} from 'react'
import { CartContext } from '../contexts/CartContext'


const Cart = () => {

    const {cart} = useContext(CartContext)

    return (
        <div>
           No. of Cart Items : {cart}
        </div>
    )
}

export default Cart
