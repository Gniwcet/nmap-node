const express = require("express")
const { exec } = require("child_process")
const bodyParser = require("body-parser")
const { Nmap } = require("../models/nmap.model")

const nmapRouter = express()
nmapRouter.use(bodyParser.json())

nmapRouter.post("/nmap", async (req, res, next) => {
  if (!req.body.query) {
    return
  }

  const query = req.body.query.split(" ")

  const nmapProcess = exec(query[0], query.slice(1))

  nmapProcess.stdout.on("data", async (result) => {
    const nmap = new Nmap({
      queryString: req.body.query,
      queryOutput: result.toString(),
    })

    const response = await nmap.save()

    return res.status(201).json(response)
  })
})

nmapRouter.get("/nmap", async (req, res, next) => {
  try {
    const queries = await Nmap.find({})

    return res.status(200).json(queries)
  } catch (error) {
    res.status(500).json(error)
    next(error)
  }
})
module.exports = nmapRouter
