const chai = require('chai')
const Card = require('../src/Card.js')
const Turn = require('../src/Turn.js')
const expect = chai.expect



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
		expect(turn.userGuess).to.be.equal(guess)
		expect(turn.currentCard).to.be.deep.equal(card)
	})

	it('should only accept guess as a string', function() {
		const turn = new Turn(1, card);
		//because in the function, we'll only instantiate it if it's a string
		expect(turn.guess).to.be(null)

		const turnTwo = new Turn('Fish', card)
		expect(turn.guess).to.be('string')
	})
	
	//LIKELY UNNECESSARY CUZ THIS WILL BE A PORTION OF THE GAME W/O ANY USER INPUT, THIS IS ALL UNDER THE DEVELOPER'S PURVIEW
	//IF NECESSARY, NEEDS TO BE BROKEN INTO TWO TESTS, ONE THAT TESTS AN OBJECT, ONE THAT TESTS A NON OBJECT
	// it('should only accept an object for the card', function() {
	// 	const turn = new Turn(guess, card);
	// 	expect(card).to.be.an('object')
	// })

	it('should have a returnGuess method', function() {
		const turn = new Turn();
		expect(turn.returnGuess).to.be.a('function')
	})

	it('should return the guess', function() {
		const turn = new Turn("Fish", card)
		expect(turn.returnGuess()).to.equal("Fish")
	})

	it('should have a returnCard method', function() {
		const turn = new Turn();
		expect(turn.returnCard).to.be.a('function')
	})

	it('should return the card object', function() {
		const card = new Card();
		const turn = new Turn(guess, card);
		expect(turn.returnCard()).to.equal(card)
	})


	it('should have an evaluateGuess method', function() {
		const card = new Card();
		const turn = new Turn(guess, card);
		expect(turn.evaluateGuess).to.be.a('function')
	})

	it('should require a guess to run', function() {
		const turn = new Turn(guess, card);
		expect(turn.evaluateGuess()).to.equal(null)
	})

	it('should return true if the user\'s guess was correct', function() {
		const card = new Card(1,"What's the best pizza?",["Cheese", "Sausage", "Wax/For Show"], "Cheese")
		const turn = new Turn("Cheese", card)
		expect(turn.evaluateGuess()).to.equal(true)
	})

	it('should return false if the user\'s guess was incorrect', function() {
		const card = new Card(1,"What's the best pizza?",["Cheese", "Sausage", "Wax/For Show"], "Cheese")
		const turn = new Turn("Sausage", card)
		expect(turn.evaluateGuess()).to.equal(false)
	})

	it('should have a giveFeedback method', function() {
		const turn = new Turn(guess,card);
		expect(turn.giveFeedback).to.be.a('function')
	})
	
	it('should return "correct!" if the user\'s guess was correct', function() {
		const card = new Card(1,"What's the best pizza?",["Cheese", "Sausage", "Wax/For Show"], "Cheese")
		const turn = new Turn("Cheese", card)
		expect(turn.giveFeedback()).to.equal('Correct!')
	})
	
	it('should return "incorrect" if the user\'s guess was incorrect', function() {
		const card = new Card(1,"What's the best pizza?",["Cheese", "Sausage", "Wax/For Show"], "Cheese")
		const turn = new Turn("Sausage", card)
		expect(turn.giveFeedback()).to.equal('Incorrect!')
	})
	
})