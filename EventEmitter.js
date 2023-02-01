const EvenEmitter = require("events");
const CustomEmitter = new EvenEmitter();
CustomEmitter.on("response", (name, id) => {
  console.log(`Hello ${name} id: ${id}`);
});
CustomEmitter.on("response", () => {
  console.log("sheesh");
});
CustomEmitter.emit("response", "Phat", "2030045");
