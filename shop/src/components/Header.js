import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import Order from './Order';
const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(element => summa += Number.parseFloat(element.price));
  return(<div>
          {props.orders.map(el => (
              <Order onDelete ={props.onDelete} key = {el.id} item ={el} />
          ))}
          <p className='summa'>Summ: {new Intl.NumberFormat().format(summa)}$</p>
        </div>)
}

const showNothing  = () =>{
  return (
    <div className='empty'>
        <h2>Not goods</h2>
    </div>
  )
}
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className = 'logo'> House Staff </span>
            <ul className='nav'>
                <li>About</li>
                <li>Customer Service</li>
                <li>Account</li>
            </ul>
            <FaShoppingBag onClick = {() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            { cartOpen && (
              <div className='shop-cart'>
                  {props.orders.length > 0 ?
                    showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'>

        </div>
    </header>
  )
}

