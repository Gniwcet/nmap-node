const mongoose = require("mongoose")

const nmapSchema = mongoose.Schema({
  queryString: {
    type: String,
    required: true,
  },
  queryOutput: {
    type: String,
    required: true,
  },
})

const Nmap = mongoose.model("Nmap", nmapSchema)

exports.Nmap = Nmap
