import React from 'react'
import { useContext } from 'react'
import { toast } from 'react-toastify';
import { addToDb } from '../utils/fakeDB';
import Product from './Product';
import { CartContext, ProductsContext } from './Root'

const Shop = () => {
  const [products, initialCart] = useContext(ProductsContext);
  const [cart, setCart] = useContext(CartContext);
  console.log(cart)
  const handleAddToCart = (selectedProduct) =>{
    const isExist = cart.find(product => product.id === selectedProduct.id);
    if(isExist){
      isExist.quantity = isExist.quantity + 1;
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      setCart([...rest, isExist]);
    }
    else{
      selectedProduct.quantity = 1;
      setCart([...cart, selectedProduct]);
    }
    addToDb(selectedProduct.id);
    toast.success('Congrats added', {autoClose:500})
  }
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product} />)
        }
      </div>
    </div>
  )
}

export default Shop
