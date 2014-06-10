// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.  Lovinder Pnag
//  2.  Bruno


// 0. "YOU SIGNED... WHO?!"

var willSmith = {
  name: "Will Smith",
  age: 45,
  quote: "The first step is you have to say that you can."
};
var jackNicholson = {
  name: "Jack Nicholson",
  age: 77,
  quote: "The minute that you are not leraning I believe you're dead."
};
var adamSandler = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!"
};
var kristenBell = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?"
};
var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "...So you're telling me there's a chance? YEAH!"
};



// 1. "Here they Come!"

// var list = [willSmith,jackNicholson,adamSandler,kristenBell,jimCarrey];


// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name, age, quote) {
this.name = name;
this.age = age;
this.quote = quote;
}
 
var list = [];
list.push(willSmith); list.push(jackNicholson); list.push(adamSandler); list.push(kristenBell); list.push(jimCarrey);

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
list.push(shooterMcGavin);

console.log(list);

function show_quote(entry) {
  console.log("Quote: "+entry.quote+" \n");
};

show_quote(willSmith);

// shooterMcGavin.constructor === Client;
// shooterMcGavin.age === 48;
// shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

// 4. "But wait, there's more!"

// 5.  ** BONUS **

//  6.  Your Reflection:


var tex = {
name: "Tex",
age: 25,
quote: "Unknown!"
};

function Client(name, age, quote) {
this.name = name;
this.age = age;
this.quote = quote;
// this.showQuote = function() {
// return this.quote;
// };
};

Client.prototype.showQuote = function() {
return this.quote;
}


var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

var list = [];
list.push(shooterMcGavin, adamSandler, kristenBell, jimCarrey);
// list.push(adamSandler);
// list.push(kristenBell);
// list.push(jimCarrey);

list.forEach(function(entry) {
console.log("Name: "+entry.name+" \n" + 
             "Age: "+entry.age+" \n" + 
             "Quote: "+entry.quote+" \n");
});


//  6.  Your Reflection:

//     So this challenge didn't seem like it was going to be too tough. 
// Appearances can be deceiving though. Entering all the data for the 
// celeberities was not the hard part. The hard part was making the 
// process more automated. It can become tedious to enter all the data 
// in for each person. I always thought there could be an easier way to 
// get this stuff inputed. I think using the internet as well as the 
// instructor helped a bit along with getting help from my pairing buddy. 
// Making things more automated using code would be something I am having
// trouble with and can improve. One big trick I learned was how to comment 
// whole sections of writing easily and simply. Syntax was another thing 
// that I learned. I need to practice more on this GPS and problem but it 
// was still fun. The funnest part is getting the program to work toward the
// end. I found inputing the data the most tedious. 