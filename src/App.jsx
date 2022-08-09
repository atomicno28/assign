import React from 'react'
import './style.css'
import Header from './Navbar/Header';
import Home from './Navbar/Home';
import Overview from './overview/Overview';
// import Travel from './Navbar/Travel';
// import Page from './Navbar/Page';
// import Blog from './Navbar/Blog';
// import Contact from './Navbar/Contact';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import bg from './img/bgg.jpg';
import Footer from './Foot/Footer';
// import Error from './Error';

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <>
 <div style={{  
   backgroundImage: `url(${"https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/tour-page.jpg"})` ,
   height: '888px',
   width: '100%',
   marginBottom: '0px'
   }}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header  />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Travel' element={<Home />} />
        <Route path='/Page' element={<Home />} />
        <Route path='/Blog' element={<Home />} />
        <Route path='/Contact' element={<Home />} />
    </Routes>
    </BrowserRouter>
  
    </ThemeProvider>
     </div>
    <Overview />
     <Footer />
     </> )
}

export default App