const express = require('express')
const cors = require('cors')
const path = require('path')
const sequelize = require("./util/database");
const Messages = require("./models/messages");
require("dotenv").config({ path: ".env" })
const msgRouter = require('./routes/msgroutes')
const app = express()

const port = process.env.PORT || 8091

app.use(cors())
app.use(express.json())

app.use('/api/v1/messages', msgRouter)


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../build")));
//   app.get("/", (req, res) => {
//     res.sendFile(
//       path.join(__dirname, "../build", "../build/index.html"),
//       function (err) {
//         if (err) {
//           res.status(500).send(err);
//         }
//       }
//     );
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.json("Server up and running");
//   });
// }

app.use(express.static(path.join(__dirname, "../build")));
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../build", "../build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});


// app.listen(port, () => {
//   console.log(`Server has started on port ${port}`)
// })

(async () => {
  try {
    await sequelize.sync({
      force: false,
    });
    app.listen(port, () => {
      console.log(`Server has started on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
})();