const chai = require('chai')
const data = require('../src/data.js')
const Round = require('../src/Round.js')
const Turn = require('../src/Turn.js')
const Card = require('../src/Card.js')
const Deck = require('../src/Deck.js')
const expect = chai.expect

describe('Round', function() {

	let cards = data.prototypeData.map((info) => new Card(info.id, info.question, info.answers, info.correctAnswer))
	let deck;
	let round;
	
	
	beforeEach(() => {
		deck = new Deck(cards)
		round = new Round(deck)	
		
	})

	it('should have a returnCurrentCard function', function() {
		expect(round.returnCurrentCard).to.be.a('function')
	})
	it('should return the card currently being played', function() {
		round.currentCard = deck.cards[0]
		expect(round.returnCurrentCard()).to.equal(deck.cards[0])
	})
	it('should have a takeTurn method', function() {
		expect(round.takeTurn).to.be.a('function')
	})
	// it('should create a new instance of the Turn class', function() {
		
	// 	round.takeTurn()
	// 	expect(turn).to.be.an('object')
	// })
	it('should update the turns count', function() {
		let turnCount1 = round.turnCount
		round.takeTurn()
		console.log(round.turnCount)
		let turnCount2 = round.turnCount
		expect(turnCount2 - turnCount1).to.equal(1)
	})
	it('should take the next card in as the current card', function() {
		let turnCount1 = round.currentCard.id
		round.takeTurn()
		let turnCount2 = round.currentCard.id
	})
	it('should record an incorrect guess in the array incorrectGuesses', function() {
		expect(round.incorrectGuesses.length).to.be.equal(0)
		console.log(round.takeTurn("array"))
		round.takeTurn("array")
		expect(round.incorrectGuesses.length).to.be.equal(1)
	})
	// it('should tell the user if they got the answer wrong', function() {
	// 	expect(round.takeTurn("array")).to.be.equal("Sorry, looks like this is one you should study!")
	// })
	// it('should tell the user if they got the answer right',function(){
	// 	expect(round.takeTurn("object")).to.be.equal("Good work! Let's keep studying!")
	// })
	it('should have a function called calculatePercentCorrect', function() {
		expect(round.calculatePercentCorrect).to.be.a('function')
	})
	it('should calculate what percentage of the guesses the user got correct',function() {
		for (let i = 0; i < deck.cards.length; i++) {
			round.takeTurn("")
		}
		expect(round.calculatePercentCorrect()).to.equal("You got 0% correct!")
	})
	it('should have an endRound method', function() {
		expect(round.endRoud).to.be.a('function')
	})
	it('should tell the user when the round is over, as well as their score', function() {
		for (let i = 0; i < deck.cards.length; i++) {
			round.takeTurn("")
		}
			expect(round.endRound()).to.be.equal('The round is over! You got 0/30 (0%) correct!')
	});
})


