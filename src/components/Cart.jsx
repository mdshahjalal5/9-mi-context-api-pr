import React from 'react'
import { useContext } from 'react'
import { deleteShoppingCart } from '../utils/fakeDB'
import { Link } from 'react-router-dom'
import { removeFromDb } from '../utils/fakeDB'
import CartItem from './CartItem'
import { CartContext } from './Root'
import { toast } from 'react-toastify'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const removeCartItem = product=>{
    const remaining = cart.filter(prvProduct => prvProduct.id !==product.id);
    setCart(remaining)
    removeFromDb(product.id)
  }
  let price = 0;
  for(const product of cart){
    // console.log(product)
    price += product.price * product.quantity;
  }
  return (
    <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
      <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
        <h2 className='text-xl font-semibold'>
          {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
        </h2>
        <ul className='flex flex-col divide-y divide-gray-700'>
          {
            cart.map(product=> <CartItem product={product} removeCartItem={removeCartItem} key={product.id} ></CartItem>)
          }
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{price}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className='flex justify-end space-x-4'>
          <Link to='/shop'>
            <button
              type='button'
              className='px-6 py-2 border rounded-full border-cyan-400'
            >
              Back <span className='sr-only sm:not-sr-only'>to shop</span>
            </button>
          </Link>
          <button type='button' onClick={()=>{
            if(cart.length){
              setCart([]);
              deleteShoppingCart();
              toast.success('order has done', {autoClose:300})
            }
            else{
              toast.error('cart is empy please add to cart',{autoClose:300})
            }
          }}
            className='px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800'
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
