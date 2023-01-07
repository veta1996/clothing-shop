import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/card.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {NavigationContainer, NavLinksContainer, LogoContainer, NavLink} from './navigation.styles'

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className="logo"/>
            </LogoContainer>
         <NavLinksContainer>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ): <NavLink to='/auth'>
                  SIGN IN
              </NavLink>}
              <CartIcon/>
         </NavLinksContainer>
         {isCartOpen && <CartDropdown/>}
         </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;