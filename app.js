const { readFile } = require("fs");
const getText = (path) => {
  return new Promise((resolve, rejects) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        rejects(err)
      } else {
        resolve(data)
      }
    });
  });
};
const start = async() =>{
  try {
    const first = await getText("./content/firstfile.txt");
    const second = await getText("./content/secondfile.txt");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
}
start()
// getText("./content/firstfile.txt")
// .then((result)=> console.log(result))
// .catch((err) => console.log(err))
