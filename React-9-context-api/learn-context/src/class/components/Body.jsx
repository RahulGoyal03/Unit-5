import React,{useContext} from 'react';
import { CartContext } from '../contexts/CartContext';

const Body = () => {
    const {handleCartUpdate} = useContext(CartContext)
    return (
        <div>
            <button onClick={() => handleCartUpdate(1)}>Add to cart</button>
        </div>
    )
}

export default Body
