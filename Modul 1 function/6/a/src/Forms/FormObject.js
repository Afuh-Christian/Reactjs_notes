import React, { useState } from "react";

export default function FormObject(){

    const [userObject, setUserObject ] = useState({
        firstname:"",
        lastname:"",
        email:"",
        comments:"",
        isFriendly:false,
        employment:"",
        favColor:""
    }) 
// //............function for forms........takes event object...containing the whole form
//     function Handlechange(event){
//         setUserObject((prevObject) => {
//          return {
//             ...prevObject,
//             [event.target.name] : event.target.value
//          }
//         })
//     }

//............function for forms........takes event object...containing the whole form
function Handlechange(event){
    setUserObject((prevObject) => {
        const {name,value,type,checked} = event.target
     return {
        ...prevObject,
        [name] :   type === "checkbox"? checked : value
     }
    })
}

function formSubmit(event){
    event.preventDefault()
    console.log(userObject)
}


    return(
        <div>
            <h1>Form Object</h1>
             <form onSubmit={formSubmit}>
             <span><input
                 type="text" 
                placeholder="Enter firstname"
                name= "firstname"
                value={userObject.firstname}
                onChange={Handlechange}
                /></span>
                <span> <input 
                type= "text"
                placeholder = "Enter lastname"
                name = "lastname"
                value={userObject.lastname}
                onChange={Handlechange}
                /></span>
                <span> <input 
                type= "email"
                placeholder = "Enter email"
                name = "email"
                value={userObject.email}
                onChange={Handlechange}
                /></span>
        {/* .....................textarea........................... */}
                <span> <textarea
                placeholder = "Enter comments"
                name = "comments"
                value={userObject.comments}
                onChange={Handlechange}
                /></span>

{/* ..............checkbox............................... */}
                <div>
                <h4>checkbox</h4>
                <input
                type="checkbox"
                id="friendly"
                name="isFriendly"
                checked={userObject.isFriendly}
                onChange={Handlechange}
                />
                <label htmlFor="friendly"> You are Friendly</label>
                    </div>
                    <div>
        
        {/* .....................radio.................................. */}
                        <h4>radio</h4>
        <fieldset style={{
                    display:"flex"
                    ,flexDirection:"column"
                }}>
        <div> <input
                type="radio"
                id="unemployed" 
                name="employment"
                value="Unemployed"
                checked={userObject.employment === "Unemployed"}
                onChange={Handlechange}
               
                />
                <label htmlFor="unemployed">Unemployed</label></div>
                <div>  <input
                type="radio"
                id="part_time" 
                name="employment"
                value="Part Time"
                checked={userObject.employment === "Part Time"}
                onChange={Handlechange}
                />
                <label htmlFor="part_time">Part Time</label></div>
                <div>  <input
                type="radio"
                id="full_time" 
                name="employment"
                value="Full Time"
                checked={userObject.employment === "Full Time"}
                onChange={Handlechange}
                />
                <label htmlFor="full_time">Full Time</label></div>
               
                </fieldset>
                    </div>
{/* ..................Select and option............................. */}
                    <div>
                        <h1>Select and option</h1>
                        <select id="favColor"
                        value={userObject.favColor}
                        name="favColor"
                        onChange={Handlechange}
                        >
                            <option value="" >--choose--</option>
                            <option value="red"
                            
                            >Red</option>
                            <option value="orange"
                            
                            >Orange</option>
                            <option value="yellow"
                            
                            >Yellow</option>
                            <option value="green"
                            
                            >Green</option>
                            <option value="blue"
                           
                            >Blue</option>
                            <option value="violet"
                             
                            >Violet</option>
                        </select>
                    </div>

                    <div><input
                     style={{
                        backgroundColor:"bisque"
                    }}
                    type="submit" value="submit"></input></div>
            </form>


            <p>firstname: {userObject.firstname}</p>
            <p>Lastname: {userObject.lastname}</p> 
            <p>Email:  {userObject.email}</p> 
            <p>Comments: {userObject.comments}</p> 
           <p>Personality: {userObject.isFriendly && <>I am Friendly</> ||<> I am Not a nice person</>}</p>
            <p>Employment: {userObject.employment}</p>
            <p>Color Selected: {userObject.favColor}</p>
        </div>


        
    )

  
}
