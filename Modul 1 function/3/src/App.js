// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cat from './Components/Cat';

import { Sum } from './Components/Cat';
import Map from './Components/Map';
import MapStudents from './Components/MapStudents';
import { list } from './data/list';


function App() {
  // const students_list = list.map(listobject => <MapStudents name={listobject.name} age={listobject.age}/>)
  const students_list = list.map(listobject => <MapStudents {...listobject}/>)
  const array = <h1>hello</h1>
  return (
    <>
    <div className='Appcss'>
          <Cat
          pic = {require('./images/logo192.png')}
          name = "React Students"
          phone = "+237 671018950"
          email = "afuhchristian10@gmail.com"
          age = {30}
          isReal ={true}
          comments = {[{author:"Crhistian",body:"love books"}]}
            />
             <Cat
          pic = {require('./images/christian.jpg')}
          // name = "Afuh Christian Forkoum"
          // phone = "+237 671018950"
          email = "afuhchristian10@gmail.com"
          age = {22}
          isReal ={true}
          comments = {[{author:"Crhistian",body:"love books"}]}
            />
        

          <h1>{Sum(5,6)}</h1>

       <div>{array}</div>

    </div>


  <Map/>

  <div>
    {students_list}
  </div>
    </>
  );
}


export default App;
