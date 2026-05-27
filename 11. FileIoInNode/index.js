// import { readFile } from "fs/promises"
// // const { readFile } = require("fs/promises")

// async function readGivenFile(pathToFile) {
//   const data = await readFile(pathToFile)
//   console.log(data.toString())
// }

// // console.log(__dirname)
// const pathToFile = __dirname + "/index.html"
// readGivenFile(pathToFile)
// console.log(pathToFile)
// // const data = await readFile(pathToFile)
// // console.log(data.toString())

import { readFile } from "fs/promises"
console.log(import.meta.url)
console.log(process.cwd())
// const pathToFile =
//   "/home/aayush/Desktop/Advanced_Backend/11. FileIoInNode" + "/index.html"
// const pathToFile = process.cwd() + "/index.html"

const pathToFile = new URL("./index.html", import.meta.url).pathname

const data = await readFile(pathToFile)
console.log(data.toString())
