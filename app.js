const { readFile } = require("fs");
const { resolve } = require("path");
const getText = (path) => {
  return new Promise((resolve, rejects) => {
    readFile("./content/firstfile.txt", "utf-8", (err, data) => {
      if (err) {
        rejects(err)
      } else {
        resolve(data)
      }
    });
  });
};
getText("./content/firstfile.txt")
.then((result)=> console.log(result))
.catch((err) => console.log(err))
