import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer";
import Publishing from "./page/Publishing";
import Seo from "./page/Seo";
import Php from "./page/Php";
import AOS from 'aos';
import React from "./page/React";
import ScrollToTop from "./components/ScrollToTop";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => { 
    AOS.init({offset: -500});
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <main>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/publishing" element={<Publishing />}></Route>
          <Route path="/seo" element={<Seo />}></Route>
          <Route path="/php" element={<Php />}></Route>
          <Route path="/react" element={<React />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
