const chai = require('chai')
const Turn = require('../src/Card')
const expect = chai.expect

const Turn = require('../src/Turn.js')

describe('Turn', function() {

	it('should be a function', function() {
		const turn = new Turn();
		expect(Turn).to.be.a('function')
	})

	it('should create an instance of Test', function(){
		const turn = new Turn();
		expect(turn).to.be.an.instanceOf(Turn);
	})

	it('should accept an argument for the user\'s guess and the current card object', function() {
		const turn = new Turn(guess, card);
		expect(guess).to.be.arguments
		expect(card).to.be.arguments
	})

	it('should only accept guess as a string')
	it('should only accept an object for the card')
	it('should have a returnGuess method')
	it('should return the guess')
	it('should return the card object')
	it('should have an evaluateGuess method')
	it('should require a guess to run')
	it('should return true if the user\'s guess was correct')
	it('should return false if the user\'s guess was incorrect')
	it('should have a giveFeedback method')
	it('should return "correct!" if the user\'s guess was correct')
	it('should return "incorrect" if the user\'s guess was incorrect')
	
})