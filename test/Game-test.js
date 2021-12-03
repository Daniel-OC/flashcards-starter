const chai = require('chai')
const expect = chai.expect
const Round = require('../src/Round.js')
const Game = require('../src/Game.js')
const Deck = require('../src/Deck.js')
const Card = require('../src/Card.js')
const data = require('../src/data.js')


describe('Game', function() {
	const cards = data.prototypeData.map((info) => {return new Card(info.id, info.question, info.answers, info.correctAnswer)})
	let deck;
	let round;
	let game;

	beforeEach(function() {
		deck = new Deck(cards)
		round = new Round(deck)
		game = new Game
	})


	it('should keep track of the current round', function() {
		expect(game.currentRound).to.be.equal(0)
		game.start(data.prototypeData)
		expect(game.currentRound).to.equal(1)
	})
	it('have a start method', function() {
		expect(game.start).to.be.a('function')	
	})
	it('should create all the cards', function() {
		expect(game.cards).to.equal(null)
		game.start(data.prototypeData)
		expect(game.cards).to.be.an('array')
	})
	it('should put those cards in a deck', function() {
		expect(game.deck).to.equal(null)
		game.start(data.prototypeData)
		expect(game.deck.cards).to.be.an('array')
	})
	it('should create a new round', function() {
		expect(game.round).to.equal(null)
		game.start(data.prototypeData)
		expect(game.round).to.be.an('object')
	})
	it('should invoke printMessage')
	it('should invoke printQuestion')

})

