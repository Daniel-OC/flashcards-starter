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
			// console.log('Good Work! Let\'s keep studying!')
			return 'Correct'
		} else {
			// console.log('Sorry, looks like this is one you should study!')
			return 'Incorrect'
		}
	}
}

module.exports = Turn;