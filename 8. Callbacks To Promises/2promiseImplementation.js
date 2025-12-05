//Tasks:
//1.Write a function to download data from url
//2.Write a function to save that downloaded data in a file and return the filename
//3.Write a function to upload the file written in previous step to a newurl

function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Downloading content from the given url", url)
    setTimeout(() => {
      console.log("Downloading completed")
      const content = "ABCDEF"
      //   callbackFn(content)
      resolve(content)
    }, 4000)
  })
}

function writeFile(content) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to write the file with", content)
    setTimeout(() => {
      console.log("The file is written")
      const fileName = "file1.txt"
      resolve(fileName)
    }, 4000)
  })
}

function uploadFile(url, file) {
  return new Promise(function exec(resolve, reject) {
    console.log(
      "Uploading the file to the new url, the file is",
      file,
      "to the url:",
      url
    )
    setTimeout(() => {
      console.log("The file is uploaded")
      const response = "SUCCESS"
      resolve(response)
    }, 4000)
  })
}

// download("www.xyz.com", function processDownload(content) {
//   console.log("The first step: Downloading the file")
//   writeFile(content, function processFile(fileName) {
//     console.log("The second step: File downloaded, writing to a file")
//     uploadFile("www.filehere.com", fileName, function newUrlFunction(newUrl) {
//       console.log("The final step:File written, next uploading")
//       console.log("The file is written to url", newUrl)
//     })
//   })
// })
download("www.xyz.com")
  .then(function processDownload(data) {
    console.log("The download portion is completed and the content is :", data)
    return writeFile(data)
  })
  .then(function writeProcessor(fileName) {
    console.log(
      "The file writing process has been completed,the fileName is",
      fileName
    )
    return uploadFile("www.aayush.com", fileName)
  })
  .then(function processUpload(value) {
    console.log("The content has been uploaded to the given url", value)
  })
