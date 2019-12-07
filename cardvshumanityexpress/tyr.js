const fs = require("fs");
const jokeSource = fs.readFileSync("./subs-and-punchs.json");
console.log(JSON.parse(jokeSource));