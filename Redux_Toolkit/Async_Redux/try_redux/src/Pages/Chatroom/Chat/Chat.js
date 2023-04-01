

import React from 'react'
import './Chat.css'
import { useRef } from 'react'

export default function Chat() {

    const navRef = useRef()

    // const showNavbar = () => {
        
    // }
    

//    navRef.current.classList.scroll({top: navRef.current.classList.scrollHeight, behavior: "smooth"})
   
   


  return (

        <section>
    <div ref={navRef}   className="message_body">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        {/* <!-- <div className = "message_content"> --> */}
        {/* <!--sending message--> */}
        <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>

         {/* <!--receiver message--> */}
        <div className="message_cover_reciever">
            <div className="message_reciever">Hi I would love to have one of your products </div>
        </div>
        
           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>

           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>
        
         {/* <!--receiver message--> */}
         <div className="message_cover_reciever">
            <div className="message_reciever">Hi I would love to have one of your products </div>
        </div>
         {/* <!--receiver message--> */}
         <div className="message_cover_reciever">
            <div className="message_reciever">Hi I would love to have one of your products </div>
        </div>
           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>

           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>
        

         {/* <!--receiver message--> */}
         <div className="message_cover_reciever">
            <div className="message_reciever">Hi I would love to have one of your products </div>
        </div>

         {/* <!--receiver message--> */}
         <div className="message_cover_reciever">
            <div className="message_reciever">Hi I would love to have one of your products </div>
        </div>
           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>

         {/* <!--receiver message--> */}
         <div className="message_cover_reciever">
            <div className="message_reciever">Hi I would love to have one of your products </div>
        </div>
           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>
   {/* <!--receiver message--> */}
   <div className="message_cover_reciever">
    <div className="message_reciever">Hi I would love to have one of your products </div>
</div>
           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>
 {/* <!--receiver message--> */}
 <div className="message_cover_reciever">
    <div className="message_reciever">Hi I would love to have one of your products </div>
</div>
           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>
 {/* <!--receiver message--> */}
 <div className="message_cover_reciever">
    <div className="message_reciever">Hi I would love to have one of your products </div>
</div>
           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">hello this is ziiface .... how may  I be of service</div>
        </div>
                 {/* <!--receiver message--> */}
 <div className="message_cover_reciever">
    <div className="message_reciever">1</div>
</div>
           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">2</div>
        </div>
         {/* <!--receiver message--> */}
 <div className="message_cover_reciever">
    <div className="message_reciever">Ok thanks </div>
</div>
           {/* <!--sending message--> */}
           <div className="message_cover_sender">
            <div className="message_sender">your welcome</div>
        </div>
         




    {/* <!-- </div> --> */}

    </div>
    <div class="message_submit"><form action="">
        <input id="text_id"
         class="message_text"
          type="text" placeholder="        Type message.."
          />
        <button  class="message_send_btn" type="submit"><i id="m_send" class="material-icons">send</i></button>
    </form></div>

    </section>
   
        



  )
}
