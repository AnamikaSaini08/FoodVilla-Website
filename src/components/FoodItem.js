import { IMG_CON_URL } from "../config";

const FoodItem = (items)=>{
    const restro = items;
    console.log(restro)
    return(
    <div className='w-[250px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... p-5'>
        <h2>{restro?.items?.info?.name}</h2>
        <img src={IMG_CON_URL+restro?.items?.info?.cloudinaryImageId}/>
        <h2>{restro?.items?.info?.costForTwoMessage}</h2>
     </div>
 )};

 export default FoodItem;