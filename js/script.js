
//Array of quote objects. All quote objects have a 'quote' and 'source' property and some have an additional 'citation' and/or 'year' property.
let quotes = [
  { 
    quote: "Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    citation: "Beautiful Boy",
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

//Function that pulls a random quote object from the quotes array 
let getRandomQuote = () => {
  return quotes[(Math.floor(Math.random() * (quotes.length)))];
};

/* Function that uses the getRandomQuote function to build a concatenated string with HTML and quote properties and 
then displays the resulting string in the browser */
let printQuote = () => {
  let randomQuote = getRandomQuote();
  let message = "";
  message+="<p class='quote'>" + randomQuote.quote + "</p>";
  message+="<p class='source'>" + randomQuote.source;

  if (randomQuote.hasOwnProperty('citation')){
    message+="<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if (randomQuote.hasOwnProperty('year')){
    message+="<span class='year'>" + randomQuote.year + "</span>";
  }
  message+="</p>";
  document.getElementById('quote-box').innerHTML = message; 
};

//Click event listener that calls the printQuote function everytime the 'load-quote' button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);