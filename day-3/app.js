const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

var corsOption = {
  origin: "https://localhost:3000",
};

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "helo world!" });
});

require("./routes/routes")(app);

app.listen(3000, () => {
  console.log("Server is running . . .");
});
