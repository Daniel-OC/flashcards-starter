const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round.js')
const Deck = require('../src/Deck.js')
const Card = require('../src/Card.js')

class Game {
  constructor() {
		this.currentRound = {}

	}
	start() {
		const cards = prototypeQuestions.map((info) => {
			let card = new Card(info.id, info.question, info.answers, info.correctAnswer)
			return card})
		let deck = new Deck(cards)
		this.currentRound = new Round(deck)
		this.printMessage(deck, this.currentRound)
		this.printQuestion(this.currentRound)
	}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;