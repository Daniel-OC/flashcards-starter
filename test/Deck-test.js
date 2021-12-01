const chai = require('chai')
const Card = require('../src/Card.js')
const Deck = require('../src/Deck.js')
const expect = chai.expect

describe('Deck', function() {
	let deck;

	beforeEach(function() {
		deck = new Deck()
	})

	it('should be initialized with an array of cards', function() {
		expect(deck.cards).to.be.an('array')
	})
	it('should be full of Card objects', function() {
		expect(deck.cards[0]).to.be.an('object')
		expect(deck.cards[deck.cards.length]).to.be.an('object')
	})
	it('should know how many cards are in the deck', function() {
		expect(deck.cardCount).to.be.equal(deck.cards.length)
	})

})