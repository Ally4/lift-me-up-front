import { useState } from 'react'
// import { useHistory } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import LandingPage from './components/landingPage';
import Home from './components/Home';
import UserProfil from './components/userProfil';
import BusinessProfil from './components/businessProfil';
import About from './pages/About';
import Nav from './components/Header/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  // const landingPage = useHistory();
  // const toLandingPage = () => {
  //   landingPage.push('./components/landingPage');  
  // }

  return (

    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/user-profil" element={<UserProfil />} />
        <Route path="/business-profil" element={<BusinessProfil />} />
        <Route path="/nav" element={<Nav />} />
        {/* <Route path="/about" element={<About />} />  */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
