import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
    const [textBtn, settextBtn] = useState("Dark Mode");
    
    const darkMode=()=>{
        if(mode==="light"){
            setMode("dark");
            settextBtn("Light Mode")
            document.body.style.color="white"
            document.body.style.backgroundColor="grey"
            showAlert("Dark Mode Enabled","success")
        }
        else{
            setMode("light")
            settextBtn("Dark Mode")
            document.body.style.color="black"
            document.body.style.backgroundColor="white"
            showAlert("Light Mode Enabled","success")
        }
    }
  const [alert, setAlert] = useState(null);
  const showAlert=(text,type)=>{
      setAlert({
        msg:text,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
  }
  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} txtbtn={textBtn} darkMode={darkMode}/>
      <Alert alert={alert}/>
      
      {/* <Switch>
          <Route path="/about">
           <About mode={mode}/>
          </Route>
          <Route path="/"> */}
            <TextForm showalert={showAlert}/>
          {/* </Route>
      </Switch>
    </Router>  */}
    </>
  );
}

export default App;
