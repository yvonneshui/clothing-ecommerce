import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart,addItem,removeItem } from '../../redux/cart/cart-action'

import './CheckOutItem.styles.scss'

function CheckOutItem({cartItem,clearItemFunc,addItemFunc,removeItemFunc}) {
	const {name,imageUrl,price,quantity}=cartItem
	return (
		<div className='checkout-item'>
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={()=>removeItemFunc(cartItem)}>&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={()=>addItemFunc(cartItem)}>&#10095;</div>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={()=>clearItemFunc(cartItem)}>&#10005;</div>
		</div>

	)
}

const mapDispatchToProps=dispatch=>({//create functions that dispatch when called, and pass those functions as props to your component.
  clearItemFunc: item => dispatch(clearItemFromCart(item)),
	addItemFunc:item => dispatch(addItem(item)),
	removeItemFunc:item => dispatch(removeItem(item)),
})

export default connect (null,mapDispatchToProps)(CheckOutItem)