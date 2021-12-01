const chai = require('chai')
const data = require('../src/data.js')
const Card = require('../src/Card.js')
const Deck = require('../src/Deck.js')

const expect = chai.expect

describe('Deck', function() {
	let deck;
	const cards = data.prototypeData.map((info) => {return new Card(info.id, info.question, info.answers, info.correctAnswer)})


	beforeEach(function() {
		deck = new Deck(cards)
	})

	it('should be initialized with an array of cards', function() {
		expect(deck.cards).to.be.an('array')
	})
	it('should be full of Card objects', function() {
		expect(deck.cards[0]).to.be.an('object')
		expect(deck.cards[deck.cards.length]).to.be.an('object')
	})
	it('should know how many cards are in the deck', function() {
		expect(deck.countCards()).to.be.equal(30)
	})

})