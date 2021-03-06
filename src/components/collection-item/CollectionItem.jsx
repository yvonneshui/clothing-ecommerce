import React from 'react'
import './CollectionItem.styles.scss'
import Button from '../custom-button/Button'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart-action'

function CollectionItem({item,addItemFunc}) {
	const {name,price,imageUrl}=item
	return (
		<div className="collection-item">
			<div 
			className="image"
			style={{
				backgroundImage:`url(${imageUrl})`
			}}
			/>
			<div className="collection-footer">
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			<Button inverted onClick={()=>addItemFunc(item)}>Add to Cart</Button>
		</div>
	)
}

const mapDispatchToProps=(dispatch)=>({//create functions that dispatch when called, and pass those functions as props to your component.
	addItemFunc:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)