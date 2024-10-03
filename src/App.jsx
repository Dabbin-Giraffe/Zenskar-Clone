import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Content from './components/Content/Content';
import Login from './components/Login/Login';
import { Routes, Route } from "react-router-dom";
import Demo from './components/Demo/Demo';

const App = () => {


  return (
    // <>
    //   <Navbar />
    //   <Demo />
    //   <Footer />
    // </>
    <Routes>
      <Route path="/"
        element={
          <div>
            {/* <Navbar /> */}
            <Content />
            <Footer />
          </div>}
      />
      <Route path='/login' element={
        <>
          <Login />
        </>
      } />
      <Route
        path='/demo'
        element={
          <>
            <Navbar />
            <Demo />
            <Footer />
          </>
        }
      />

    </Routes>
  )
}

export default App