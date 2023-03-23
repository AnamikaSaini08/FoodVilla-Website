import { Outlet } from "react-router-dom";

const About = ()=>{
    return(
        <div>
            <h1>About Us Page</h1>
            <p>This is swiggy copy web page. </p>
            <Outlet/>
        </div>
    );
};

export default About;