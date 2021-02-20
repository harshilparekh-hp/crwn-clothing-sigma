import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
