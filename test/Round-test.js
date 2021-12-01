const chai = require('chai')
const data = require('../src/data.js')
const Round = require('..sr/Round.js')
const Turn = require('../src/Turn.js')
const Card = require('../src/Card.js')
const Deck = require('../src/Deck.js')
const expect = chai.expect

describe('Round', function() {

	beforeEach(() => {
		const cards = data.prototypeData.map((info) => new Card(info.id, info.question, info.answers, info.correctAnswer))
		const deck = new Deck(cards)
		const round = new Round(deck)
	})

	it('should have a returnCurrentCard function')
	it('should return the card currently being played')
	it('should have a takeTurn method')
	it('should create a new instance of the Turn class')
	it('should update the turns count')
	it('should return the current card to the end of the deck, and update the current card')
	it('should record an incorrect guess in the array incorrectGuesses')
	it('should tell the user if they got the answer wrong')
	it('should tell the user if they got the answer right')
	it('should calculate what percentage of the guesses the user got correct')
	it('should tell the user when the round is over, as well as their score')


})


