/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const GameCode = require("./models/gamecode");
const Word = require("./models/word");
const History = require("./models/history");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/gamecodes", (req, res) => {
  GameCode.find({code: req.query.code}).then((word) => {res.send(word)});
});

router.get("/words", (req, res) => {
  Word.find({word: req.query.word}).then((wor) => res.send(wor));
});

router.get("/allGameCodes", (req,res) => {
  GameCode.find({}).then((words) => res.send(words));
});

router.get("/allWords", (req, res) => {
  Word.find({}).then((words) => res.send(words));
});

router.get("/history", (req, res) => {
  let code = req.body.code
  History.aggregate([
    //{$match: {user : [req.query.id]}},
    {$set: {curr : 'hi'}}
  ]).then(() => {
  History.find({user : req.query.id}).then((obj) => res.send(obj));
  });

  /*History.findOneAndUpdate(
    {user: req.query.id},
    { $set: { curr : [{$getField : [code]}] }},
    {
      returnNewDocument: true,
      new: true,
      strict: false
    }
  )*/

});

router.post("/gamecodes", (req, res) => {
  const newGameCode = new GameCode({
    code: req.body.code,
    word: req.body.word,
  })
  newGameCode.save().then((gamecode) => res.send(gamecode));
});

router.post("/history", (req, res) => {
  let code = req.body.code;
  const newHistory = new History({
    user: req.body.id,
    [code] : req.body.ws,
    curr: "default"
  });
  newHistory.save().then((history) => res.send(history));
});

router.post("/updateHistory", (req,res) => {
  let code = req.body.code
  History.findOneAndUpdate(
    {user: req.body.id},
    { $set: { [code] : req.body.ws }},
    {
      returnNewDocument: true,
      new: true,
      strict: false
    }
  )

  /*History.aggregate( [
    {
       $addFields: {
          (req.body.code) : (req.body.ws)
       }
    }
] )*/

});
//figure this out, updationg collecitions usung update function


// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
