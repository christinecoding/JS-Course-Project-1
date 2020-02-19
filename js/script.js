
//Array of quote objects. All quote objects have a 'quote' and 'source' property and some have an additional 'citation' and/or 'year' and/or 'category' property.
let quotes = [
  { 
    quote: "Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    citation: "Beautiful Boy",
    year: "1980",
    category: ["Music"]
  },
  { 
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas A. Edison",
    category: ["Historical Figures", "Inventors", "Science"]
  },
  {
    quote: "Every strike brings me closer to the next home run." ,
    source: "Babe Ruth",
    category: ["Historical Figures", "Sports"]
   },
  { 
    quote: "Every moment is a fresh beginning.",
    source: "T.S. Eliot"
  },
  { 
    quote: "The best way to predict your future is to create it." ,
    source: "Abraham Lincoln",
    category: ["Historical Figures"]
  },
  { 
    quote: "Never let the fear of striking out keep you from playing the game." ,
    source: "Babe Ruth",
    category: ["Historical Figures", "Sports"]
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
  let i; 
  if (randomQuote.hasOwnProperty('category')){
    message+="<p class='category'>" + "Quote Category: ";
    for (i=0; i<randomQuote.category.length; i++){
      /* If/else statement for formatting how the elements of the array of the category property are printed. There should be a ", " separating  
      each element. However, if the array only has one element, no "," should be printed. Similarly, no "," should follow the last element. */
      if (randomQuote.category.length===1 || i===randomQuote.category.length - 1){ 
        message+= randomQuote.category[i];
      } else {
        message+=randomQuote.category[i] + ", ";
      }
    }
      message+="</p>";
  }
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