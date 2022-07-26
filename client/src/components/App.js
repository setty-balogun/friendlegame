import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Create from "./pages/Create.js";
import Play from "./pages/Play.js";
import NavBar from "./modules/NavBar.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [code, setCode] = useState(undefined);
  const [finishedGame, finishGame] = useState(false);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  useEffect(() => {
    let data = [0,0,0,0,0];

    console.log(gameData);
    console.log(localStorage.getItem("stats"));

    if (localStorage.getItem("stats")) {
      console.log("ooooo");
      console.log(localStorage.getItem("num_wins"));
      data = [localStorage.getItem("num_wins"), localStorage.getItem("num_losses"), localStorage.getItem("num_games"), localStorage.getItem("cur_streak"), localStorage.getItem("max_streak")];
      for (var i = 0; i < data.length; i++) {
        data[i] = parseInt(data[i]);
      }
    } else {
      console.log("!");
      localStorage.setItem("stats", "trueee");
      console.log(localStorage.getItem("stats"));

      localStorage.setItem("num_wins", 0);
      console.log(localStorage.getItem("num_wins"));
      localStorage.setItem("num_losses", 0);
      localStorage.setItem("num_games", 0);
      localStorage.setItem("cur_streak", 0);
      localStorage.setItem("max_streak", 0);
    }

    

    console.log(gameData);

    setGameData(data);

    console.log(gameData);
  }, []);

  /*useEffect(() => {
    console.log("oo!!o");
    if (gameData.length !== 0) {
      localStorage.setItem("num_wins", gameData[0]);
      localStorage.setItem("num_losses", gameData[1]);
      localStorage.setItem("num_games", gameData[2]);
      localStorage.setItem("cur_streak", gameData[3]);
      localStorage.setItem("max_streak", gameData[4]);
    }
   

    console.log(gameData);
    console.log(localStorage.getItem("num_wins"));
}, [gameData]);*/

  useEffect(() => {
    if (localStorage.getItem("checked-dm") === "true") {
      document.body.classList.add("dark-mode");
    } 
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  useEffect(() => {
    let id =  localStorage.getItem('id')
    if (!id){
      id = ''
      for (let i = 0; i < 10; i++) {
          id += String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65));
      }
      localStorage.setItem('id',id)
      
    }
  }, []);

  return (
    <>
      <div className = "setup">
        <NavBar finishedGame={finishedGame} gameData={gameData}/>
        <Router className = "App-Container" code={code}>
            <Skeleton path="/" setCode={setCode} code={code}/>
            <Create path="/create/:code" code={code} />
            <Play path="/play/:code" code={code} finishGame={finishGame} setGameData={setGameData} gameData={gameData} />
            <NotFound default />
        </Router>
      </div>
    </>
  );
};

export default App;
