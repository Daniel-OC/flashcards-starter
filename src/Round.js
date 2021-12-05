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
		this.turnCount ++
		this.currentCard = this.deck.cards[this.turnCount]		
		return turn.giveFeedback()
	}
	calculateTotalCorrect() {
		let totalCorrect = this.turnCount - this.incorrectGuesses.length
		return totalCorrect
	}
	calculatePercentCorrect() {
		let totalCorrect = this.calculateTotalCorrect()
		let percentCorrect = totalCorrect / this.turnCount * 100
		return percentCorrect
	}
	endRound() {
		let totalCorrect = this.calculateTotalCorrect()
		let percentCorrect = this.calculatePercentCorrect()
		console.log(`The round is over! You got ${totalCorrect}/${this.turnCount} (${parseFloat(percentCorrect).toFixed(2)}%) correct!`)
		return `The round is over! You got ${totalCorrect}/${this.turnCount} (${parseFloat(percentCorrect).toFixed(2)}%) correct!`

	}
}

module.exports = Round;