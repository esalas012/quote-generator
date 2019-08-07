/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//quotes
var quotes = [
  {
    quote:"It's the possibility of having a dream come true that makes life interesting",
    source:"Paulo Coelho",
    citation: "The Alchemist",
    year:"",
    tag:"Inspirational"
  },
  {
    quote: "He that lives upon hope will die fasting.",
    source: "Benjamin Frankin",
    citation:"Poor Richard's Almanac",
    year:"1758",
    tag: "Life"
  },
  {
    quote:"While we're talking, envious time is fleeing: seize the day, put no trust in the future.",
    source:"Horace",
    citation: "Odes",
    year: "",
    tag: "Time"
  },
  {
    quote:"Nature is the source of all true knowledge. She has her own logic, her own laws, she has no effect without cause nor invention without necessity.",
    source:"Leonardo da Vinci",
    citation:"",
    year:"",
    tag:"Nature"
  },
  {
    quote:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    source:"Lao Tzu",
    citation:"",
    year:"",
    tag:"Love"
  }

  
];


/*
The getRandomQuote function assigns a random number less than the length of the array
to the variable randomNum and then returns the quote of indexOf random number.
*/
function getRandomQuote(){
  var randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

//prints quote to the DOM
function printQuote(){
  //selects obj, obj props, quote-box element and creates empty string
  var quoteObj = getRandomQuote();
  var quoteProp = quoteObj.quote;
  var source = quoteObj.source;
  var citation = quoteObj.citation;
  var year = quoteObj.year;
  var tag = quoteObj.tag;
  var html = '';
  var quoteBox = document.getElementById("quote-box");

  //Adds the quote object properties to the html variable.
  html+= '<p class = "quote">'+ quoteProp + '</p>';
  html+= '<p class= "source">'+ source;
  if(citation!== ""){
    html+='<span class="citation">' + citation + '</span>';
  }
  if(year!== ""){
    html+='<span class="year">' + year + '</span>';
  }
  html+='<span class="tag"> ' + tag + '</span>';
  html+='</p>';
  quoteBox.innerHTML = html;

}

//creates a randomColor for the background and the button
function randomColor(e){
  var loadQuote = document.getElementById('loadQuote');
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = "rgb(" + r + " , " + g + " , " + b + ")";
  loadQuote.style.backgroundColor = "rgb(" + r + " , " + g + " , " + b + ")";
}

// Prints the first quote when the page is loaded;
document.addEventListener("DOMContentLoaded", printQuote);

// Prints quote and changes background color and button color when button is clicked
var loadQuote = document.getElementById('loadQuote');
loadQuote.addEventListener("click", function(){
  randomColor();
  printQuote();
}, false);

//Every 20secs the randomColor and printQuote function run
setInterval(function(){
  randomColor();
  printQuote();
}, 20000);



