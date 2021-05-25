import { createSelector } from 'reselect';

const selectCart = (state) => state.cart; //this is input selector

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
); //this is output selector which returns modified selector. This is called "Memoize Selector".

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
