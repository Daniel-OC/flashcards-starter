const Turn = require("./Turn");

class Round {
	constructor(deck) {
		this.deck = deck;
		this.currentCard = deck.cards[0];
		this.turnCount = 0;
		this.incorrectGuesses = [];

	}
	returnCurrentCard() {
		return this.currentCard
	}

	takeTurn(userGuess) {
		let turn = new Turn(userGuess, this.currentCard)
		if (!turn.evaluateGuess()) {
			this.incorrectGuesses.push({ID: turn.card.id, Question: turn.card.question, UserGuess: turn.card.userGuess, ActualAnswer: turn.card.correctAnswer})
		} 
		turn.giveFeedback()
		this.turnCount ++
		this.currentCard = this.deck.cards[this.turnCount]		
	}
	calculatePercentCorrect() {
		let totalCorrect = this.turnCount - this.incorrectGuesses.length 
		console.log(this.turnCount)
		console.log(totalCorrect)
		let percentCorrect = totalCorrect / this.turnCount * 100
		return `You got ${percentCorrect}% correct!`
	}
}

module.exports = Round;