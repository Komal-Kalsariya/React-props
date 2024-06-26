import { useState } from "react"

const UserProfileCard=({name,age,bio,location, profileImg})=>{

    let [follow,setfollow]=useState(false)
    
    const handlefollow=()=>{
        setfollow(!follow)
    };
    


    return(
        <div>

        <h1>Name:{name}</h1>
        <h3>Age:{age}<br/>Bio:{bio}<br />Location:{location}</h3>
        <img src={ profileImg} alt="" className="img1" />
       
       <button onClick={handlefollow} >{follow ? "Unfollow" : "follow"}</button>
      
       


        </div>
    )
}
export default UserProfileCard 