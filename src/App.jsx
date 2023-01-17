import { useState } from 'react'
// import { useHistory } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import LandingPage from './components/landingPage';
import Home from './components/Home';
import UserProfil from './components/userProfil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  // const landingPage = useHistory();
  // const toLandingPage = () => {
  //   landingPage.push('./components/landingPage');
  // }

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/user-profil" element={<UserProfil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
