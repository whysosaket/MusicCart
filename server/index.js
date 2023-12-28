const express = require("express");
var cors = require("cors");
const connectDB = require("./database");
const r = require("./routes/index");

// connecting to database
connectDB();

// setting up express server
const app = express();
let port = process.env.PORT;
if (port == null || "") {
  port = 9000;
}

app.use(cors());
app.use(express.json());


// Avialable Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/link', require('./routes/link'));
app.use(r());

// app.route("/").get((req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log("Server started at port: " + port);
});