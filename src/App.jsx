import Greeting from "./Greeting";
import UserProfileCard from "./UserProfileCard"



const App=()=>{
   let data={
    name:"Hirva",
    age:28,
    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location:"surat",
    profileImg:"https://pixy.org/src2/570/5707755.jpg",
    

   };

   
    return(
        <div>
             <Greeting name="komal"/>
            <UserProfileCard {...data}/>
          
        </div>
    )
}
export default App