import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { auth } from '../../firebase/firebase.util'

import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import {selectCartHidden } from '../../redux/cart/cart-selector'
import {selectCurrentUser} from '../../redux/user/user-selector'

import {HeaderContainer,LogoContainer,OptionDiv,OptionLink,OptionsContainer} from './Header.styles'

import {ReactComponent as Logo} from '../../assets/crown.svg'

function Header({currentUser,hidden}) {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo'/>
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='./shop'>
					Shop
				</OptionLink>
				{currentUser?
        <OptionLink as='div' onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>:
				<OptionLink to='/signin'>
					Sign In
				</OptionLink>}
				<CartIcon />
			</OptionsContainer>
			{
				hidden?null:
				<CartDropdown />
			}
		</HeaderContainer>
		)
}

const mapStateToProps=createStructuredSelector({//map the state in store to component props
currentUser:selectCurrentUser,
hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)