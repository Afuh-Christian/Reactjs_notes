import React, { useState } from "react";


export default function Practice(){

    const [formdata , setFormdata] = useState({
        email:"",
        password1:"",
        password2:"",
        canJoinNews:false
    })

    function Hchage(event){
        setFormdata((prevformdata)=>{
            const {name,type,checked,value} = event.target
            return{
                ...prevformdata,
                [name] : type === "checkbox"? checked : value
            }
        })
    }




    function HandleForm(event){
        event.preventDefault()
        const {password1,password2,canJoinNews} = formdata
        if(password1===password2){
            console.log("Successfully signed up")
            if(canJoinNews){
                console.log("Thanks for signing up for the news letter")
            }else{
                console.log("Please join newspaper")
            }

            console.log(formdata)
        }else{
            return console.log("passwords do not match")
        }
       
    }


    return(
        <div>
            <h1>Practice Forms</h1>
            <form onSubmit={HandleForm}>
                <div><input 
                placeholder="Enter email"
                name="email"
                type="email"
                value={formdata.email}
                onChange={Hchage}
                /></div>
                <div><input 
                placeholder="Enter password"
                  name="password1"
                  type="password"
                value={formdata.password1}
                onChange={Hchage}
                /></div>
                <div><input 
                placeholder="Confirm passord"
                  name="password2"
                  type="password"
                value={formdata.password2}
                onChange={Hchage}
                /></div>
                <div><input 
                id="newsletter"
                  name="canJoinNews"
                  type="checkbox"
                checked={formdata.canJoinNews}
                onChange={Hchage}
                />
                <label htmlFor="newsletter">I want to Join the newsletter</label>
                </div>


               
                {/* // style={{
                //     backgroundColor:"bisque"
                // }} */}
                <input type="submit" value="submit"/>

            </form>

            <div>
                <p>email :  {formdata.email}</p>
                <p>password1 : {formdata.password1}</p>
                <p>password2 : {formdata.password2}</p>
                <p>NewsLetter : {formdata.canJoinNews && <>I will join the news</> || <></>}</p>
            </div>
        </div>
    )
}