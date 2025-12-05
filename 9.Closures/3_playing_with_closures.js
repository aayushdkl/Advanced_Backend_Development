function process() {
  let i = 0
  let j = [1, 2, 3]
  let k = 10
  function innerProcess() {
    i += 1
    j += 2
    return i
  }
  return innerProcess
}

x = process()
//Here it remembers i, j since they were used but it doesnot remember k because it was not used inside innerProcess()
