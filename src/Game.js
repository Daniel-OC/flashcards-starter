const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round.js')
const Deck = require('../src/Deck.js')
const Card = require('../src/Card.js')

class Game {
  constructor() {
		this.currentRound = 0;
		this.cards = null;
		this.deck = null;
		this.round = null;


	}
	start(startingCards) {
		this.currentRound++;
		this.cards = startingCards.map((info) => {return new Card(info.id, info.question, info.answers, info.correctAnswer)})
		this.deck = new Deck(this.cards)
		this.round = new Round(this.deck)
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