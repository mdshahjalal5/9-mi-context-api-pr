import { getStoredCart } from './utils/fakeDB'
export const productsAndCartLoader = async() =>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    const initialCart = [];
    const savedCart = getStoredCart();
    for(const id in savedCart){
        const addedProducts = products.find(product => product.id === id);
        addedProducts.quantity = savedCart[id];
        initialCart.push(addedProducts);
        
    }
    // console.log(initialCart, 'initial cart');
    return {products, initialCart};
}