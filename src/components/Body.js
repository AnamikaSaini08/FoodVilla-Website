import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard  from './Restaurant';
import Shimmer from './Shimmer';
import {filterData} from '../../utils/Helper';
import useOnline from "../../utils/useOnline";
import {useContext} from 'react';
import UserContext from '../../utils/UserContext';

const Body = ()=>{
    const [allRestraunts , setallRestruants] = useState([]);
    const [filteredRestaurants , setfilteredRestaurants] = useState([]);
    const [searchText , setSearchText] = useState("");

    const {user , setUser} = useContext(UserContext);

    useEffect( ()=>{
        //API Call
        getRestaurants();
    } , []);

    async function getRestaurants()
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        //Optional Chaining
        setallRestruants(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();

    if(!isOnline){
        return <h1>Oops! you are offline !!</h1>
    }

    const NoResultFound = ()=>{
        return(
            <h1>No result Found</h1>
        )
    };

    return allRestraunts?.length===0 ? <Shimmer/> : (
    <>
        <div className=''>
            <input type="text" className='p-2 m-2 bg-gray-200'
             placeholder='Search'
             value={searchText}
             onChange={ (e)=>{ setSearchText(e.target.value)}}
             />

             <button className='p-2 m-2 bg-purple-900 text-white rounded-md' 
                    onClick = {()=>{ 
                        //filter the data
                         const data = filterData( searchText , allRestraunts);
                        //update the state
                        setfilteredRestaurants(data);
                    }}
            >Search</button>
            <input value={user.name} onChange = { (e)=>{
                setUser({
                    name : e.target.value,
                    email: "manisha@gmail.com"
                })
            }}/>
        </div>
        <div className='flex flex-wrap'>
        {
            filteredRestaurants?.length === 0 ? <NoResultFound/> :filteredRestaurants.map( (restaurant) =>{
                return <Link to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data}/></Link>
            })
        }
        </div>
    </>
    );
};

export default Body;