//Tasks:
//1.Write a function to download data from url
//2.Write a function to save that downloaded data in a file and return the filename
//3.Write a function to upload the file written in previous step to a newurl

function download(url, callbackFn) {
  /**
   * Downloads the content from the given url and passses the downloaded content to the given callback cb
   */
  console.log("Downloading content from the given url", url)
  setTimeout(() => {
    console.log("Downloading completed")
    const content = "ABCDEF"
    callbackFn(content)
  }, 4000)
}
function writeFile(content, fileNameCallback) {
  console.log("Starting to write the file with", content)
  setTimeout(() => {
    console.log("The file is written")
    const fileName = "file1.txt"
    fileNameCallback(fileName)
  }, 4000)
}

function uploadFile(url, file, callback) {
  console.log("Uploading the file to the new url, the file is", file)
  setTimeout(() => {
    console.log("The file is uploaded")
    // const newUrl = "www.filehere.com"
    callback(url)
  }, 4000)
}

// download("www.xyz.com", function process(content) {
//   console.log("Downloaded data is", content)
// })
// writeFile("This is the content", function whatIsFileName(value) {
//   console.log("The filename is", value)
// })
// uploadFile("www.filehere.com", "File1.txt", function newUrlFunction(newUrl) {
//   console.log("The file is uploaded in the url:", newUrl)
// })

download("www.xyz.com", function processDownload(content) {
  console.log("The first step: Downloading the file")
  writeFile(content, function processFile(fileName) {
    console.log("The second step: File downloaded, writing to a file")
    uploadFile("www.filehere.com", fileName, function newUrlFunction(newUrl) {
      console.log("The final step:File written, next uploading")
      console.log("The file is written to url", newUrl)
    })
  })
})
