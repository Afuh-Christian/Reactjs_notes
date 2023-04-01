import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import StyleNavbar from "../components/StyleNavbar"


const SharedLayout = () =>{
    return(
        <>
<StyleNavbar/>
<section className='section'>
<Outlet/>
</section>
        </>
    )
}

export default SharedLayout