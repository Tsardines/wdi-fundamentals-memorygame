
// the array

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push("cardOne");
cardsInPlay.push("cardTwo");
cardsInPlay;

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]){
	alert('You found a match!');
} else {
	alert('Sorry try again.');
}


console.log("User flipped " + cardOne);
 
console.log("User flipped " + cardTwo);




// var cardOne[0]=1;

// cardOne and cardTwo are getting pushed to cardsInPlay with jsbin

// cardsInPlay.push("cardTwo");
// cardsinPlay;
 

// 
// } if else { ("cardOne" === "cardTwo");