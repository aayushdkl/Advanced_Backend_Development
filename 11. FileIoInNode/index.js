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

// 3. Why "fs/promises"?

// There are 3 styles in Node.

// A. Old Callback Style
// const fs = require("fs")

// fs.readFile("index.html", (err, data) => {
//   console.log(data.toString())
// })

// Older Node style.

// Harder to manage.

// B. Promise Style
// import { readFile } from "fs/promises"

// const data = await readFile("index.html")

// Cleaner.

// Modern.

// Uses async/await.

// This is what you should learn now.

// 4. What Does readFile() Return?

// This is IMPORTANT.

// const data = await readFile("index.html")

// returns a:

// Buffer

// NOT a string.

// 5. What is a Buffer?

// A Buffer is raw binary data.

// Computers store files as bytes.

// Example:

// <Buffer 3c 68 74 6d 6c>

// Those bytes represent characters.

// Node gives raw bytes for efficiency.

// You convert it to text using:

// data.toString()
// 6. Understanding Paths

// This is the BIGGEST confusion.

// There are TWO kinds of paths.

// A. Relative Path

// Example:

// "./index.html"

// Means:

// start from current working directory

// B. Absolute Path

// Example:

// /home/aayush/Desktop/project/index.html

// Full exact location.

// Works from anywhere.

// 7. process.cwd()

// This is VERY important.

// process.cwd()

// means:

// Current Working Directory

// The folder where you ran the command.
