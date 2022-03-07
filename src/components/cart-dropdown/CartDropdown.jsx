import React from 'react'

import './CartDropdown.styles.scss'

import Button from '../custom-button/Button'

function CartDropdown() {
	return (
		<div className="cart-dropdown">
			<div className="cart-items"/>
			<Button>Go TO CHECKOUT</Button>
		</div>
		)
}

export default CartDropdown