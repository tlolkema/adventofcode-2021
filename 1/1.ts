import { depths } from './data'

const increased = depths.filter(
  (value, index) => value < depths[index + 1],
).length

console.log(increased)
