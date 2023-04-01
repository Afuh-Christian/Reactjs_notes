import { NavLink } from 'react-router-dom';
const StyleNavbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' 
     style={({isActive}) => {
        return {
            color:isActive? "green" : "blue"
        }
     }} 
      >Home</NavLink>
      <NavLink to='/about'
       style={({isActive}) => {
        return {
            color:isActive? "green" : "blue"
        }
     }}
      >About</NavLink>
      <NavLink to='/products'
       style={({isActive}) => {
        return {
            color:isActive? "green" : "blue"
        }
     }}
      >Products</NavLink>
      <NavLink to='/login'
       style={({isActive}) => {
        return {
            color:isActive? "green" : "blue"
        }
     }}

      >Login</NavLink>
      <NavLink to='/dashboard'
       style={({isActive}) => {
        return {
            color:isActive? "green" : "blue"
        }
     }}
      >Dashboard</NavLink>
    </nav>
  );
};
export default StyleNavbar;