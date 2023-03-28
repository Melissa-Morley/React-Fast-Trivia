import React from "react";
import logo from "./logo.svg";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// import './css/TriviaCard.css';
// import './css/Header.css';


import { Header } from './Components/Header';
import { LeaderBoard } from './Components/LeaderBoard';

import { Footer } from "./Components/Footer";
import { Game } from "./Components/New Components/Game";
import { GetQuestions } from "./Services/QuestionServices";
import { SetupGame } from "./Components/New Components/SetupGame";
import AuthContextProvider from "./context/AuthContextProvider";





function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <AuthContextProvider >
        <Header/>
        <Routes>
          <Route path="/" element={<Game/>}/>
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
        </Routes>
        <Footer/>
        </AuthContextProvider>
        
      </div>

    </BrowserRouter>
  );
}

export default App;
