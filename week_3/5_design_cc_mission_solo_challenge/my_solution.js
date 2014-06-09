// This is a solo challenge

// Your mission description: Achilles and Mortality
// First find out if you have a hero by challenges (2)
// 
// Second have Achilles march, dodge, attack, and then win
// 

// Pseudocode
// The challenges are first to use the selct function in figuring out the multiples of 5 in an array.
// Next the challenge is to use the max function in another array.
// Next we have the mission: Objects- Achilles, arrow, Hector, and Victory.
// The methods are marchTall, dodgeDuck, fastAttack, and battleMeditation.
// After each method is entered a script is printed out.

// Initial Code

var numbers =  [2,7,10,25,27,49,50,99,100];


var select = function(array, func) {
  var results = [];

  for (var i=0; i < array.length; i++) {
    if (func(array[i])) {
      results.push(array[i]);
    }
  }

  return results;
};

var firstHero = function(x) { return x % 5 === 0};

// var numsHero = select(numbers, firstHero);
// numsHero;



var max = function(array) {
  var biggest = array[0];

  for (var i=0; i < array.length; i++) {
    if (array[i] > biggest) {
      biggest = array[i];
    }
  }

  return biggest;
};

var numberz = [1,100,1000]

// max(numbers)


"1. If you are a Hero select the multiples of 5 from numbers! numbers =  2,7,10,25,27,49,50,99,100 2. If you are a really good Hero what is max of these numberz? numberz = 1,100,1000"

var Achilles = true

var Arrow = true

var Hector = false

var Victory = true

var marchTall = function() {
	if (Achilles === true) {
		console.log("Strength and Honor");
	}
}

var dodgeDuck = function() {
	if (Arrow === true) {
		console.log("Fortes fortuna adiuuat");
	}
}

var fastAttack = function() {
	if (Hector === false){
		console.log("If at first you don't succeed");
	}
}

var battleMeditation = function() {
	if (Victory === true){
		console.log("Integer vitae, scelerisque purus, Non eget Mauri jaculis, nec arcu!");
	}
}




// Refactored Code


var max = function(array) {
  var biggest = array[0];

  for (var i=0; i < array.length; i++) {
    if (array[i] > biggest) {
      biggest = array[i];
    }
  }

  return biggest;
};

var numberz = [1,100,1000]

// max(numbers)


"1. If you are a Hero select the multiples of 5 from numbers! numbers =  2,7,10,25,27,49,50,99,100 2. If you are a really good Hero what is max of these numberz? numberz = 1,100,1000"

var Achilles = true

var Arrow = true

var Hector = false

var Victory = true

var marchTall = function() {
	if (Achilles === true) {
		console.log("Strength and Honor");
	}
}

var dodgeDuck = function() {
	if (Arrow === true) {
		console.log("Fortes fortuna adiuuat");
	}
}

var fastAttack = function() {
	if (Hector === false){
		console.log("If at first you don't succeed");
	}
}

var battleMeditation = function() {
	if (Victory === true){
		console.log("Integer vitae, scelerisque purus, Non eget Mauri jaculis, nec arcu!");
	}
}






// Reflection
// I have to say this challenge was pretty intimidating. There are a lot of things to do. 
// I wanted to do so much more and make things work a lot better but I didn't have the time.
// This challenge was a little confusing because I wasn't sure what part the user new or could read
// vs. what I am supposed to tell him in order to complete the mission. 
// I am having trouble with calling functions. It would be great if I knew how to ask questions and 
// then get the answer I am looking for and sending it back.
// I learned some new skills like using the select function and max function along with their need 
// for using the callback function. 
// I enjoyed testing out my challenge to see if it worked. The tedious part was just looking for 
// missed or errors in the syntax of the code. 