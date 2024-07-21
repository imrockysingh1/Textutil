import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import Alert  from './components/Alert';
import React ,  { useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App(props) {
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
  })
  setTimeout(() => {
        setAlert(null);
  }, 2000);
}

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#272640'
      showAlert(" Dark Mode Enabled",'success');
      setInterval(() => {
        document.title="Install Textutils Now"
      }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(" Light Mode Enabled",'success');
      setInterval(() => {
        document.title="Install Textutils Now "
        
      }, 1500);
    }
  }
  const customThemeRed=()=>{
    setMode('red')
    document.body.style.backgroundColor='red'
  }

  const customThemeGreen=()=>{
    setMode('green')
    document.body.style.backgroundColor='green'
  }
  const customThemeBrown=()=>{
    setMode('brown')
    document.body.style.backgroundColor='brown'
  }
  
  const [mode,setMode]=useState('light');         //Wheter dark mode is enabled or not
  return (
    
    <>
     <Router basename='textutils'>
    <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} customThemeRed={customThemeRed} customThemeGreen={customThemeGreen} customThemeBrown={customThemeBrown}/>
    {/* <Navbar /> */}
    <Alert alert={alert}/> 
   
    <Routes>

          <Route exact path="/about" element={<About  mode={mode} toggleMode={toggleMode} customThemeRed={customThemeRed} customThemeGreen={customThemeGreen} customThemeBrown={customThemeBrown}/>}/>
          <Route  exact path="/" element={<TextForms  showAlert={showAlert} heading="Enter the text to analyze " mode={mode}></TextForms>}/>
        </Routes>
        </Router>
        
      </>
  );
}

export default App;
