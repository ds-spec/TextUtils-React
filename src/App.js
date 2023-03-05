<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React With Harry Bhaiyya
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [mode1, setmode1] = useState('light');
  const [mode2, setmode2] = useState('light');



  const toggleBlueMode = () => {
    if (mode2 === 'light') {
      setmode2('primary');
    }
    else {
      setmode2('light');
    }
  }



  const toggleRedMode = () => {
    if (mode1 === 'light') {
      setmode1('danger');
      document.body.style.backgroundColor = '#812020';
      showAlert('Red mode is successfully enabled', 'success');

    }
    else {
      setmode1('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is successfully enabled', 'success');
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
  }

  setTimeout(() => {
    setAlert();
  }, 1500);


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#011c24';
      showAlert('Dark mode is successfully enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Installed TextUtils successfully';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is successfully enabled', 'success');
      document.title = 'TextUtils - Light Mode';

    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title='TextUtils' aboutText='About us' mode1={mode1} toggleRedMode={toggleRedMode} mode={mode} toggle={toggleMode} mode2={mode2} toggleBlueMode={toggleBlueMode} />
      <Alert alert={alert} />

      <div className='container my-3' >
        <TextForm heading='Enter the text below' mode={mode} showAlert={showAlert} mode1={mode1} />
        {/* <Routes> */}
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/' element={} /> */}
        {/* </Routes> */}
        {/* <About /> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
>>>>>>> 1572f1b (Final commit)
