import {IMG_CON_URL} from "../config";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";
import { addItem } from "../../utils/cartSlice";
import {useDispatch, useSelector} from 'react-redux';

const RestrauntMenu = ()=>{

    const {resId} = useParams();
    const restaurant = useRestaurant(resId); 
    const dispatch = useDispatch();
    const cartItems = useSelector(store=>store?.cart?.items);

    const addFoodItem =(item)=>{
        if(cartItems.includes(item)){
            alert("Already added");
            return;
        }
        dispatch(addItem(item));
    }
    return !restaurant ? <Shimmer/> :(
        <div className="bg-purple-100">
            <div>
                <h1 className="font-bold m-5">{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
                <img src={IMG_CON_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} className="rounded-sm ml-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 ..."/>
                <div className="text-lg ml-5 bg-purple-300 mt-5">
                    <h3>City: {restaurant?.cards[0]?.card?.card?.info?.city}</h3>
                    <h3>Rating: {restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
                    <h3>costForTwo: {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
                </div>
            </div>
            <div>
                <button className="p-2 m-5 bg-blue-700" onClick={()=>addFoodItem(restaurant?.cards[0]?.card?.card)}>Add Item</button>
            </div>
        </div>
    )
};

export default RestrauntMenu;

  