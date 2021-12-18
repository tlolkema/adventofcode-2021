import { commandsRaw } from './data'

const commandsArr = commandsRaw.map((rawCommand) => rawCommand.split(' '))
const commands = commandsArr.map((arr) => {
  return { cmd: arr[0], pos: Number(arr[1]) }
})

const position = {
  horizontal: 0,
  depth: 0,
  aim: 0,
}

commands.forEach((cmd) => {
  if (cmd.cmd === 'forward') {
    position.horizontal += cmd.pos
    position.depth += position.aim * cmd.pos
  } else if (cmd.cmd === 'down') {
    position.aim += cmd.pos
  } else if (cmd.cmd === 'up') {
    position.aim -= cmd.pos
  }
})

console.log(position.horizontal * position.depth)
