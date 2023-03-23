import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header"; 
import Body from "./components/Body";
import Footer from "./components/Footer";
import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestrauntMenu from './components/RestrauntMenu';
import Profile from './components/Profile';
import Instamart from './components/Instamart';
import UserContext from '../utils/UserContext';
import { useState } from 'react';
import {Provider} from 'react-redux';
import store from '../utils/store'; 
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Footer = ()=>(
    <h4>Footer</h4>
);

const AppLayout = ()=>{
    const [user , setUser]  = useState({
        name: "Anamika Saini",
        email : "anamika08saini08@gmail.com",
    });

    return (
        <Provider store={store}>
            <UserContext.Provider value={{
                user: user,
                setUser : setUser
            }}>
                <Header/>
                <Outlet/>
                <Footer/>
            </UserContext.Provider>
        </Provider> 
    );
}


const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout/>,
            errorElement: <Error/>,
            children:[
                {
                    path: "/",
                    element: <Body/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                    children: [
                        {
                            path: "profile",
                            element : <Profile/>
                        }
                    ]
                },
                {
                    path: "/contact",
                    element: <Contact/>,
                },
                {
                    path:"/restaurant/:resId",
                    element: <RestrauntMenu/>
                },
                {
                    path: "/instamart",
                    element: <Instamart/>
                },
                {
                    path: "/cart",
                    element: <Cart/>
                },
            ]
        },
        
    ]
);

root.render(<RouterProvider router={appRouter}/>); 