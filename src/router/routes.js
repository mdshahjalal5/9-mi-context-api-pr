import { createBrowserRouter } from "react-router-dom";
import { productsAndCartLoader } from "../productsAndCartLoader";
import { Root } from "../components/Root";
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Shop from '../components/Shop';
import ErrorPage from '../components/ErrorPage'
import Cart from '../components/Cart'
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        loader:productsAndCartLoader,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/', 
                element:<Home/>,
            }, 
            {
                path:'/about',
                element:<About/>
            }, 
            {
                path:'/shop', 
                element:<Shop/>,
            }, 
            {
                path:'cart',
                element:<Cart/>
            }, 
            {
                path:'home', 
                element:<Home/>
            }
        ],
    }
]);