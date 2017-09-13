// Loops Lab 2

// Write a for loop that will iterate from 50 to 20. For each
// iteration, if the current number is a multiple of 3, console.log
// the value.
for (i = 50; i >= 20; i--){
	if (0 === i % 3){
		console.log(i);
	}
};

// Write out an "infinite loop" below. Don't run the loop in your
// console unless you are prepared to force quit your browser!
for (i = 50; i < 10; i++){
	console.log('Hello');
};

// Loop through this array and print every other value, starting
// with the first.
const classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];
for (i = 0; i < classmates.length; i++){
	if (0 === i % 2){
		console.log(classmates[i]);
	}
};

// Create a new array with the gluten-free options from this menu:
const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
const noGluten = [];
for (i = 0; i < menu.length; i++){
	if (i === 1 || i === 3 || i === 4){
		noGluten.push(menu[i]);
	}
};
console.log(noGluten);

// Bonus Question (Hard Mode):
// Create a new array with all the players that have a true value
// of goat (greatest of all time) from each league.
const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}];
const goatPlayers = [];
for (i = 0; i < league.length; i++){
	let sportLeague = league[i];
	let sportPlayers = sportLeague.players;
	for (x = 0; x < sportPlayers.length; x++){
		let goatStatus = sportPlayers[x].goat;
		if (goatStatus === true){
			goatPlayers.push(sportPlayers[x]);
		}
	};
};
console.log(goatPlayers);
