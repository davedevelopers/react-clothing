import {createSelector} from 'reselect';

// Input selector that takes input
const selectCart = state => state.cart;

// Output selector 
export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart=>cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((accumulated, cartItem)=>accumulated+cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((accumulated, cartItem)=>accumulated+cartItem.quantity*cartItem.price, 0)
)