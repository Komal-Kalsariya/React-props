import { useState } from "react"

const UserProfileCard=({name,age,bio,location, profileImg})=>{

    let [follow,setfollow]=useState(false)
    // let [biodata,setbiodata]=useState(bio)
    // const handlebiodata=()=>{
    //     setbiodata(biodata)
    // }
    
    
    const handlefollow=()=>{
        setfollow(!follow)
    };



    return(
        <div>

        <h1>Name:{name}</h1>
        <h3>Age:{age}<br />Location:{location}</h3>
        <img src={ profileImg} alt="" className="img1" />
        <p> Bio:{bio}
            <button>readmore</button> </p>


       <button onClick={handlefollow} >{follow ? "Unfollow" : "follow"}</button>
     
      
       </div>
    )
}
export default UserProfileCard 