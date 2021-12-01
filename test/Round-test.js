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
		let deck = new Deck(cards)
		let turn = new Turn(null, deck.shift())
		const round = new Round(deck, turn)
		
	})

	it('should have a returnCurrentCard function', function() {
		expect(round.returnCurrentCard).to.be.a('function')
	})
	it('should return the card currently being played', function() {
		expect(round.returnCurrentCard()).to.equal(deck[0])
	})
	it('should have a takeTurn method', function() {
		expect(round.takeTurn).to.be.a('function')
	})
	it('should create a new instance of the Turn class', function() {
		expect(round.takeTurn()).to.be.an('object')
	})
	it('should update the turns count', function() {
		let turnCount1 = round.turnCount
		round.takeTurn()
		let turnCount2 = round.turnCount
		expect(turnCount2 - turnCount1).to.equal(1)
	})
	it('should return the current card to the end of the deck, and update the current card', function() {
		round.takeTurn()
		expect(round.deck[0].id).to.equal(2)
		expect(round.deck[29].id).to.equal(1)
	})
	it('should record an incorrect guess in the array incorrectGuesses')
	it('should tell the user if they got the answer wrong')
	it('should tell the user if they got the answer right')
	it('should calculate what percentage of the guesses the user got correct')
	it('should tell the user when the round is over, as well as their score')


})


