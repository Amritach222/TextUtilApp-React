// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
// Importing routers
// using CommonJS modules
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// let name = "Amrit Acharya"
// function getName(user){
//   return user.fname +" "+user.lname;
// }
// const users={
//   fname:"Amrit",
//   lname:"Acharya"
// }
function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const [btnColor,setBtnColor] = useState({backgroundColor:'blue',color:'white'})
  //Changing color of buttons
  const handleColorChange=(color)=>{
    if(color==='red'){
        setBtnColor({backgroundColor:'red',color:'white'})
    }
    else if(color==='yellow'){
      setBtnColor({backgroundColor:'yellow',color:'white'})

    }
    else{
      setBtnColor({backgroundColor:'green',color:'white'})
    }
  }
  // Creating a function to set alert
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    
    })
    setTimeout(() => {
       setAlert(null)
      }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#271a6f'
      showAlert("Dark mode has been enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
    return ( < >
     { // <Router>
    }
      
    <Navbar title ="TextUtils" mode={mode} about="AboutUs" toggleMode={toggleMode} chooseColor={handleColorChange}/>
    <Alerts alert={alert}/>
    {//<Switch>
    /*It is a good practice to use exact path instead using only path beacause rect uses partial matching */
         // <Route exact path="/about">
          //   <About  modes={mode} />
          // </Route>
          // <Route exact path="/">
       
          
        //   </Route>
        // </Switch>
      }
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} color={btnColor}/>
         {//</Router>
        }
   
      </ >
    );
}

export default App;