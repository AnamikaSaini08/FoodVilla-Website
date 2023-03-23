import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../utils/UserContext';
import { useSelector } from 'react-redux';

const Title = () => {
  return (
    <div>
       <a href="/">
            <img className= "h-28 px-2"
                alt="logo"
                src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
            />
        </a>
    </div>
  )
};

const Header = ()=>{

    const { user } = useContext(UserContext);
    const cartItems = useSelector(store=>store.cart.items);
    console.log("Cart---------",cartItems);
    return(
        <div className='flex  justify-between bg-red-50 shadow-lg'>
            <Title/>
            <h1 className='mt-12 text-red-900 text-lg font-bold '>{user.name}</h1>
            <div>
                <ul className='flex py-12'>
                    <li className='px-5'><Link to = "/"> Home </Link></li>
                    <li className='px-5'><Link to="/about">About</Link></li>
                    <li className='px-5'><Link to="/contact">Contact</Link></li>
                    <li className='px-5'><Link to="/cart">Cart- {cartItems?.length}</Link></li>
                    <li className='px-5'><Link to="/instamart">Instamart</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
