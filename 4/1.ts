import { rawCards } from './cards'
import { draws } from './draws'

export type Square = {
  postion: number
  digit: number
  marked: boolean
}

type Card = Square[]
type Cards = Card[]
type Winners = Card[]

const createSquare = (digit, position): Square => {
  return { postion: position, digit: digit, marked: false }
}

const createCard = (rawCard): Card => {
  const card = []

  rawCard.forEach((digit, index) => {
    card.push(createSquare(digit, index))
  })

  return card
}

const createCards = (rawCards): Cards => {
  const cards = []

  rawCards.forEach((card) => {
    cards.push(createCard(card))
  })

  return cards
}

const cards = createCards(rawCards)

/*
0  1  2  3  4
5  6  7  8  9
10 11 12 13 14
15 16 17 18 19
20 21 22 23 24  
*/
const cardHasBingo = (card: Card): boolean => {
  const row1 = [0, 1, 2, 3, 4]
  const row2 = row1.map((el) => el + 5)
  const row3 = row2.map((el) => el + 5)
  const row4 = row3.map((el) => el + 5)
  const row5 = row4.map((el) => el + 5)
  const col1 = [0, 5, 10, 15, 20]
  const col2 = col1.map((el) => el + 1)
  const col3 = col2.map((el) => el + 1)
  const col4 = col3.map((el) => el + 1)
  const col5 = col4.map((el) => el + 1)

  const possibilities = [
    row1,
    row2,
    row3,
    row4,
    row5,
    col1,
    col2,
    col3,
    col4,
    col5,
  ]

  let status = false
  possibilities.forEach((possibility) => {
    if (possibility.every((index) => card[index].marked === true)) {
      status = true
    }
  })
  return status
}

const updateCards = (number) => {
  cards.forEach((card) => {
    card.forEach((square) => {
      if (square.digit == number) {
        square.marked = true
      }
    })
  })
}

const determineScore = (card: Card, lastNumber: number): number => {
  const filteredArrayNonMarked = card.filter((el) => el.marked === false)
  let sumUnMarked = 0
  filteredArrayNonMarked.forEach((el) => {
    sumUnMarked += el.digit
  })
  return sumUnMarked * lastNumber
}

const winners: Winners = []
let finished = false
let score = 0

draws.forEach((num) => {
  if (finished == false) {
    updateCards(num)
    cards.forEach((card) => {
      if (cardHasBingo(card) == true) {
        winners.push(card)
        score = determineScore(card, num)
        finished = true
      }
    })
  }
})

console.log(score)
