import { useState , useEffect } from "react";
import { RESTAURANT_MENU_IMAGE_URL, SELECT_RESTAURANT } from "../src/config";

const useRestaurant = (resId)=>{
    const [restaurant , setRestaurant] = useState(null);

    async function getRestaurantsMenu()
    {
        //const data = await fetch(RESTAURANT_MENU_IMAGE_URL + resId);
        const data = await fetch(SELECT_RESTAURANT+resId+"&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }

     useEffect(()=>{
        getRestaurantsMenu();
    } , []);
    return restaurant;
}; 

export default useRestaurant;