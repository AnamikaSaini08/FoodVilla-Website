import { IMG_CON_URL } from "../config";

const RestaurantCard = ({name , cloudinaryImageId , cuisines , lastMileTravelString})=>(
    <div className='w-[250px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... p-5'>
         <img src={IMG_CON_URL+cloudinaryImageId}/>
         <h2>{name}</h2>
         <h3>{cuisines.join(' , ')}</h3>
         <h4>{lastMileTravelString}</h4>
     </div>
 );

 export default RestaurantCard;