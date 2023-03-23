import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import FoodItem from './FoodItem';

const Cart = ()=>{
    const cartItems = useSelector( (store)=>{
        return store?.cart?.items;
    })
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return(
        <div>
            <h1 className="font-bold">Cart Items - {cartItems.length}</h1>
            <button className="bg-pink-600 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className="flex">
            {cartItems.map( (item)=>{
                return  <FoodItem items={item} key={item?.info?.id}/>
            })}
            </div>
        </div>
    )
};

export default Cart;