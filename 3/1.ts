import { binaryData } from './data'

const binaryArrays = binaryData.map((binaryString) => binaryString.split(''))
const length = binaryArrays[0].length
const counts = Array(length)
  .fill(0)
  .map((value, index) => {
    return { index: index, zero: 0, one: 0 }
  })

binaryArrays.forEach((array) => {
  array.forEach((digit, index) => {
    if (digit === '0') {
      counts[index].zero += 1
    } else {
      counts[index].one += 1
    }
  })
})

let gamma = '' // 110100010101
let epsilon = '' // 001011101010

counts.forEach((item) => {
  if (item.zero > item.one) {
    gamma += '0'
  } else {
    gamma += '1'
  }
  if (item.zero < item.one) {
    epsilon += '0'
  } else {
    epsilon += '1'
  }
})

const decimalGamma = parseInt(gamma, 2)
const decimalEpsilon = parseInt(epsilon, 2)

console.log(counts, decimalGamma, decimalEpsilon, decimalGamma * decimalEpsilon)
