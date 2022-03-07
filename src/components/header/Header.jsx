import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.util'

import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import './Header.styles.scss'

import {ReactComponent as Logo} from '../../assets/crown.svg'

function Header({currentUser,hidden}) {
	return (
		<div className="header">
			<Link className='logo-container' to='/'>
				<Logo className='logo'/>
			</Link>
			<div className="options">
				<Link className='option' to='./shop'>
					Shop
				</Link>
				<Link className='option' to='./shop'>
					Contact
				</Link>
				{currentUser?
				<div 
				className='option' 
				onClick={()=>auth.signOut()}>
					Sign Out
				</div>:
				<Link className='option' to='/signin'>Sign In</Link>}
				<CartIcon />
			</div>
			{
				hidden?null:
				<CartDropdown />
			}
		</div>
		)
}

const mapStateToProps=(state)=>({//map the state in store to component props
currentUser:state.user.currentUser,
hidden:state.cart.hidden

})

export default connect(mapStateToProps)(Header)