const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/firstfile.txt", "utf-8");
    const second = await readFile("./content/secondfile.txt", "utf-8");
    await writeFile(
      "./content/result-mind.txt",
      `Bruh what is this : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

// const getText = (path) => {
//   return new Promise((resolve, rejects) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         rejects(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/firstfile.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
