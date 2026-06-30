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

// import { readFile } from "fs/promises"
// console.log(import.meta.url)
// console.log(process.cwd())
// // const pathToFile =
// //   "/home/aayush/Desktop/Advanced_Backend/11. FileIoInNode" + "/index.html"
// // const pathToFile = process.cwd() + "/index.html"

// const pathToFile = new URL("./index.html", import.meta.url).pathname

// const data = await readFile(pathToFile)
// console.log(data.toString())
//======================================================================================================
//ES File moduling : Doesnt work
// import { readFile } from "fs/promises"
// const pathToFile = __dirname + "/index.html"
// console.log(__dirname) //__dirname is only availabe for commonjs module

//Commmon JS moduling : works

// async function readGivenFile(pathToFile) {
//   const data = await readFile(pathToFile)
//   console.log(data.toString())
// }

// const { readFile } = require("fs/promises")
// const pathToFile = __dirname + "/index.html"
// readGivenFile(pathToFile)
// // const data = await readFile(pathToFile) // Adding this line, doesnt work again
// // console.log(data.toString()) //__dirname is only availabe for commonjs module

import { readFile, writeFile } from "fs/promises"
console.log(import.meta.url)
console.log(process.cwd() + "/index.html") //way1

const pathToFile = new URL("./index.html", import.meta.url) //way2
const data = await readFile(pathToFile, "utf8")
console.log(data.toString())

const obj = {
  name: "Aayush",
  message: "How is it going",
}

let template = data

for (const [key, value] of Object.entries(obj)) {
  template = template.replaceAll(`{{${key}}}`, value)
}
const outputFile = new URL("./output.html", import.meta.url)
await writeFile(outputFile, template)
