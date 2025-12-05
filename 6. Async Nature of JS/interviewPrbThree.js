console.log("Hello world")
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`Timer done-${i}`)
  }, 10)
}

for (let i = 0; i < 10000000000; i++) {
  //some task
}

console.log("END")
