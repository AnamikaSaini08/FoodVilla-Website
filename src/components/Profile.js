import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";



const Profile = ()=>{

    const [profile , setProfile] = useState(null);

    useEffect( ()=>{
        getProfile();
    } , []);

    async function getProfile()
    {
        const data = await fetch("https://api.github.com/users/AnamikaSaini08");
        const json = await data.json();
        console.log(json);
        setProfile(json);
    }


    return setProfile=== null ? <Shimmer/> : (
        <div>
            <h1>{profile?.name}</h1>
            <img src= {profile?.avatar_url} alt="img"/>
            <h2>{profile?.bio}</h2>
        </div>
    )
}

export default Profile;