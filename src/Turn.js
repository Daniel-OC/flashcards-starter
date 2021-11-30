class Turn {
	constructor(guess, currentCard) {
		this.userGuess = guess;
		this.card = currentCard;
	}
	returnGuess() {
		if (this.userGuess) {
			return this.userGuess
		}
	}
	returnCard() {
		return this.card
	}
	evaluateGuess() {
		if (this.userGuess === this.card.correctAnswer) {
			return true
		} else {
			return false
		}
	}
	giveFeedback() {
		if (this.evaluateGuess() === true) {
			return 'Correct!'
		} else {
			return 'Incorrect!'
		}
	}
}

module.exports = Turn;