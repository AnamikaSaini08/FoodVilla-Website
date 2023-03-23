import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Footer = ()=>{
    const {user} = useContext(UserContext);
    return(
        <h1 className="text-red-900 font-bold">This site is developed by {user.name}</h1>
    );
};

export default Footer;