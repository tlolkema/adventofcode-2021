import { depths } from './data'

const depthWindows = depths.map(
  (value, index) => value + depths[index + 1] + depths[index + 2],
)

const increased = depthWindows.filter(
  (value, index) => value < depthWindows[index + 1],
).length

console.log(increased)
