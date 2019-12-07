"use strict";
const express = require("express");
const app = express();
const exhbs = require("express-handlebars");
const bodyParser = require("body-parser");
const fs = require("fs");
const data = fs.readFileSync("./subs-and-punchs.json");
const jokeSource = JSON.parse(data);

const subjects = jokeSource.subjects;
const punchlines = jokeSource.punchlines;

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function isValid(input) {
  if (input.length == 0 || input.trim() === "") {
    return false;
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.engine("handlebars", exhbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", {
    defaultSubj: "Clicking",
    defaultPunch: "start a fun game",
    style: "home"
  });
});
app.post("/", (req, res) => {
  const jokes = {
    subj: randomElement(subjects),
    punch: randomElement(punchlines),
    style: "home"
  };
  res.render("index", jokes);
});
app.post("/added", (req, res) => {
  const newSubject = req.body.subjectInput;
  const newPunch = req.body.punchlineInput;
  if (isValid(newPunch) === false || isValid(newSubject) === false) {
    res.render("added", {
      warningMessage: "You need a valid input",
      style: "added"
    });
    return;
  } else {
    subjects.push(newSubject);
    punchlines.push(newPunch);
    fs.writeFileSync('subs-and-punchs.json', JSON.stringify(jokeSource), (err, data)=>{
        if(err) console.log(err)
        console.log('data completed')
    })
    res.render("added", {
      newSubject,
      newPunch,
      style: "added",
      and: "and",
      areAdded: "are added"
    });
  }
});
app.listen(3001, () => {
  console.log("Server has started.");
});
