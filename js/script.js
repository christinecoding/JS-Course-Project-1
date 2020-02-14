/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// All objects have quote and source properties
// At least one object has citation property
// At least one object has year property

//Array with 8 quotes and their sources. One quote has a 'citation' and 'year' property

let quotes = [
  { 
    quote: "Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    citation: "'Beautiful Boy' (song)",
    year: "1980"
  },
  { 
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    source:"Thomas A. Edison"
  },
  {
    quote:"Every strike brings me closer to the next home run." ,
    source: "Babe Ruth"
   },
  { 
    quote: "Every moment is a fresh beginning.",
    source:"T.S. Eliot"
  },
  { 
    quote:"The best way to predict your future is to create it." ,
    source: "Abraham Lincoln"
  },
  { 
    quote: "Never let the fear of striking out keep you from playing the game." ,
    source: "Babe Ruth"
  },
  { 
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    source: "George Bernard Shaw"
  },
  { quote: "Don't ask yourself what the world needs. Ask yourself what makes you come alive and then go do that. Because what the world needs is people who have come alive.",
    source: "Howard Thurman"
  }
]; 

/***
 * `getRandomQuote` function
***/

//Function that pulls a random quote object from the quotes array everytime it is called or the page is refreshed
let getRandomQuote = () => {
  return quotes[(Math.floor(Math.random() * 9))];
};

/***
 * `printQuote` function
***/
let printQuote = (){

};
/*
Needs work if any of the following are true:

printQuote function:
is not named printQuote
does not call the getRandomQuote function
does not print a quote and a source property with every quote
does not print a citation property with at least one quote
does not print a year property with at least one quote
printed quotes do not match the format, layout or styles of the example quote in the index.html file
Meets expectations if all of the following are true:

printQuote function:
is named printQuote
calls the getRandomQuote function
prints a quote and a source property with every quote
prints a citation property with at least one quote
prints a year property with at least one quote
printed quotes match the format, layout and styles of the example quote in the index.html file */

document.write()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);