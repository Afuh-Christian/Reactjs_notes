


import React from 'react'
import './Default.css'

export default function Default() {
  return (
    <section>
    <div className="pic_cover">     
            <img className="pic" src="logo192.png"/>
    </div>


     <div className="wrapper">
            <div className="item">
                <div className = "subitem"><img src="logo192.png" className="b"/></div>
                <div className="ww">name</div>
            </div>
            <div className="item">
                <div className = "subitem"><img src="logo192.png" className="b"/></div>
                <div className="ww">name</div>
            </div>
            <div className="item">
                <div className = "subitem"><img src="logo192.png" className="b"/></div>
                <div className="ww">name</div>
            </div>
            <div className="item">
                <div className = "subitem"><img src="logo192.png" className="b"/></div>
                <div className="ww">name</div>
            </div>
            <div className="item">
                <div className = "subitem"><img src="logo192.png" className="b"/></div>
                <div className="ww">name</div>
            </div>
            <div className="item">
                <div className = "subitem"><img src="logo192.png" className="b"/></div>
                <div className="ww">name</div>
            </div>
            <div className="item">
                <div className = "subitem"><img src="logo192.png" className="b"/></div>
                <div className="ww"  style={{backgroundColor: "aliceblue"}} >name</div>
            </div>
            <div className="item">
                <div className = "subitem"><img src="logo192.png" className="b"/></div>
                <div className = "ww">name</div>
            </div>
            
    </div> 

    <div className="more">
       <button className="btn"><div className="more_a"> shop </div></button>
    </div>

    <div className="Text">
        <div className="Text_message">
            <div className="Text_words">
            askdfjaksdfjakdjf ksdjfaksdjf
            kfjaskdfjaksdjfa;ksdjfa;skdjf
            aksdjfaksldjfaksdjfaksdjfkasdjf
            aksldfjaksldjfkasdjfkasjdfkasdf
            askdjfkasdjfkasjdfkasjdfklajsdfka
            sdjfaksdjfkasdjfaksjdfkasjdfka
            aksdjfaksdfjkasdjfkasjdfkajsdf
            aksjdfkasjdfkajsdfkjaksldfjlasd
            akjsdfjasldkfjaksdfjlaksdjfalskdf
            jkasldfjlaksjdfklasjdflkajsdflkasjdfklaj
            aksdflkasjdflkajsdlfajsdlfkjalsdkfj
            kasjdflajsdklfjalskdfjalksdjflaksdjf
            kajsdflajsldkfjaklsdfjaklsdjfakldf
            kajsdfklajsdlfjadlkjklfajslfjasdf
        </div>
        </div>
    </div>

    <div className="help_about">
        <div className="help" onclick="HelptogglePopup()">Help</div>
        <div className="about" onclick="AbouttogglePopup()">About</div>
    </div>



    <div className="Chrisdev_cover">
        <div className="Chrisdev">
            <div className="Chrisdev_a">Developer@</div>
        </div>
    </div>

   </section>
  )
}
