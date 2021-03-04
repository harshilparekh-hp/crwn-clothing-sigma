import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { ReactComponent as ShoppingCartIcon } from '../../assets/logo/shopping-bag.svg';
import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';

const cartIcon = ({ toggleCartHiddens, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHiddens}>
      <ShoppingCartIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,

  // itemCount: cartItems.reduce(
  //   (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
  //   0
  // ),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddens: () => dispatch(toggleCartHidden()), //here toggleCartHiddens is a function which gets called on onClick event.
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
