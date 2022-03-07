import React from 'react'
import {connect} from 'react-redux'
import './CartDropdown.styles.scss'

import Button from '../custom-button/Button'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart-selector'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems:selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);