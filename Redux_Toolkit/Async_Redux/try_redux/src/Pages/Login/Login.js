


import './Login.css' 

import React from 'react'

export default function Login() {
  return (
    <section >
    
    <div class="login_body">
        <div class="login_cover">
            <form action="" enctype="multipart/form-data">
            <div class="name">
            <div>Username:</div>
            <div ><input class="name_in" type="text" placeholder="    Username"/></div>
            </div>
            
            <div class="phone">
            <div>Phone num:</div>
            <div ><input class="phone_in" type="number" placeholder="6*******"/></div>
           </div>
            
            <div class="password">
            <div>Password:</div>
            <div><input class="password_in" type="password" placeholder="********" /></div>
            </div>

            <div class="profile_pic">
                <div>Photo:</div>
                <div><input class="profile_pic_in" type="file"/></div>
            </div>

            <div class="submit_form"><button class="submit_btn_in" type="submut">login</button></div>
        </form>
        </div>
    </div>

    <script>
 
    </script>
 </section>
  )
}
