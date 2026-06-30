function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}
function partition(arr, pivot, low, high) {
  let i = low - 1
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++
      swap(arr, i, j)
    }
  }
  swap(arr, i + 1, high)
  return i + 1
}
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivot = arr[high]
    let partitionIndex = partition(arr, pivot, low, high)
    quickSort(arr, low, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, high)
  }
  return arr
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}

module.exports = {
  bubbleSort,
  quickSort,
  insertionSort,
}
