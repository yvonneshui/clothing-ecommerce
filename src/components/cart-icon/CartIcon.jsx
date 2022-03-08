import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from '../../redux/cart/cart-action'
import { selectCartItemCount } from '../../redux/cart/cart-selector'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './CartIcon.styles.scss'

function CartIcon({toggleCartHiddenFunc,itemCount}) {
	return (
		<div className="cart-icon" onClick={toggleCartHiddenFunc}>
			<ShoppingIcon className='shopping-icon'/>
			<span className="item-count">{itemCount}</span>
		</div>
	)
}
///Dispatching Actions to props
const mapDispatchToProps=dispatch=>({
	toggleCartHiddenFunc:()=>dispatch(toggleCartHidden())
})

//passing state to props
const mapStateToProps=createStructuredSelector({
	itemCount:selectCartItemCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)