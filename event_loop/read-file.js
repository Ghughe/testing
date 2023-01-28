const { readFile } = require("fs");
console.log("Stared a first task");
readFile("./content/firstfile.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("Starting next task");
