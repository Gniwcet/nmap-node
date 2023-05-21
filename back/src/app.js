const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const nmapRouter = require("./controllers/nmap")

const app = express()
const port = 8080

mongoose
  .connect("mongodb://127.0.0.1:27017/nmap-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
  })
  .then(() => console.log("Connexion à la base de données réussie !"))
  .catch((err) => console.log("Erreur lors de la connexion", err))

app.use(bodyParser.json())
app.use(cors({ origin: true }))

app.use("/api", nmapRouter)

app.listen(port, () => {
  console.log("Server is listening...")
})
