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
		expect(guess).to.be.arguments
	})

	
})