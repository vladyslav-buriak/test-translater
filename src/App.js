import { useEffect, useState, useRef } from "react";
import "./index.scss";
import Game from "./components/Game";
import Result from "./components/Result";
import axios from "axios";
import randomWords from "random-words";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addWord, increment } from "./redux/Game/slice";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import MyProgress from "./pages/MyProgress";
import GamePage from "./pages/GamePage";
import { Layout } from "./Layout";
import { fetchWord } from "./redux/Game/asyncActions";








function App() {

  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/my-results" element={<MyProgress />} />
          <Route path="/intarective" element={<GamePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
