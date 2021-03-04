import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
          CONTACT
        </Link>
        {console.log('from header', currentUser)}
        {currentUser ? (
          <Link className='option' to='/shop' onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <div>
            <Link to='/signin' className='option'>
              SIGN IN
            </Link>
            <Link to='/signup' className='option'>
              SIGN UP
            </Link>
          </div>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // createStuructureSelector will pass the state in the selector, no need to pass it explicitly
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
