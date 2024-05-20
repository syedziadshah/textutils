import Navbar from './component/Navbar';
import './App.css';
import TextFrom from './component/TextFrom';
import { useState } from 'react';
import Alert from './component/Alert';
import About from './component/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is Enable ", "success");
      document.title = 'textUtils dark mode';
      setInterval(() => {
        document.title = 'textUtils is amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'install textUtils now';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is Enable ", "success");
      document.title = 'textUtils white mode';
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route  exact path="/" element={<TextFrom showAlert={showAlert} heading="Try TextUtils -Word Counter ,Character Counter, Remove Extra Space" mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
