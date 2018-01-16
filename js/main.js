
/* 
   Leave the arrays below outside the flipCard function
   because we want to be sure that the arrays have global scope
*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!');
		} else {
			alert('Sorry, try again.');
	}	
}


var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[0]);
if (cardsInPlay.length === 2) {
		
checkForMatch();
	}
}
	 

	flipCard(0);
	flipCard(2);

	




	


	

	







/*

var cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push("cardTwo");
console.log("User flipped " + cardTwo);


var cardOne[0]=1;

cardOne and cardTwo are getting pushed to cardsInPlay with jsbin

cardsInPlay.push("cardTwo");
cardsinPlay;
 
} if else { ("cardOne" === "cardTwo");

*/