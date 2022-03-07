import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart-action'
import { selectCartItemCount } from '../../redux/cart/cart-selector'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './CartIcon.styles.scss'

function CartIcon({toggleCartHidden,itemCount}) {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className='shopping-icon'/>
			<span className="item-count">{itemCount}</span>
		</div>
	)
}
///Dispatching Actionsto props
const mapDispatchToProps=dispatch=>({
	toggleCartHidden:()=>dispatch(toggleCartHidden())
})

//passing state to props
const mapStateToProps=state=>({
	itemCount:selectCartItemCount(state)})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)