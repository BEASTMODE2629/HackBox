
const CARD = `
  id
  text
  prompt
  cardType
  numPrompts
`

const PLAYER = `
  id
  username
  score
  hand {
    ${CARD}
  }
`

export const ROOM = `
  id
  code
  numRounds
  gameType
  deck {
    ${CARD}
  }
  players {
    ${PLAYER}
  }
`