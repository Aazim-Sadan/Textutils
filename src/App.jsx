import './App.css'
import About from './components/About'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#243b5c"
      showAlert("Dark mode has been enbale", "Success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enbale", "Success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText=" About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
