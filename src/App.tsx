import React from 'react';
import logo from './logo.svg';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
// import './css/TriviaCard.css';
// import './css/Header.css';
// import { QuestionCard } from './Components/QuestionCard';
import { Header } from './Components/Header';
import { LeaderBoard } from './Components/LeaderBoard';
import { Home } from './Components/Home';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
{/* <QuestionCard question={'Who is the best grand circus staff member?'} answers={["Olaposi","Spencer","Jonathan","Bron"]} correctAnswerIndex={2} onAnswerSelected={function (isCorrect: boolean): void {
      } }/> */}
      <Home></Home>
      <Header></Header>
      <Routes>
        <Route path="/LeaderBoard" element={<LeaderBoard />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
