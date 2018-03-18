/////////// Config   //////////////
// quote: The quote its self resides here,
// source: Who said the quote,
// citation: Location of where the qute was found,
// year: The year of the quote.
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const quotes = [{
    quote: 'You can do anything but not everything',
    source: 'David Allen',
    citation: 'Making It All Work',
    year: 2009
  },
  {
    quote: 'But man is not made for defeat. A man can be destroyed but not defeated',
    source: 'Ernest Hemingway',
    citation: 'Brainy Quote',
    year: 1999
  },
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    source: 'Franklin D. Roosevelt',
    citation: 'Brainy Quote',
    year: 1998
  },
  {
    quote: 'There is nothing permanent except change.',
    source: 'Heraclitus',
    citation: 'Brainy Quote',
    year: 1997
  },
  {
    quote: 'It is better to be feared than loved, if you cannot be both.',
    source: 'Niccolo Machiavelli',
    citation: 'Brainy Quote',
    year: 1994
  },
  {
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.',
    source: 'Amelia Earhart',
    citation: 'Brainy Quote',
    year: 1993
  },
  {
    quote: 'You can\'t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.',
    source: 'Steve Jobs',
    citation: 'Brainy Quote',
    year: 00
  },
  {
    quote: 'Great things in business are never done by one person. They\'re done by a team of people.',
    source: 'Steve Jobs',
    citation: 'Brainy Quote',
    year: 00
  }
];
// event listener to respond to "Show another quote" button clicks
const quoteButton = document.getElementById('loadQuote');
nodeConfig = () => { // Travers document nodes.
  const quoteBoxDisplay = document.querySelector('#quote-box');
  const quote = quoteBoxDisplay.firstElementChild;
  const sourceText = quoteBoxDisplay.childNodes[3].childNodes[0]; // Get text node
  const source = quote.nextElementSibling;
  const citation = source.firstElementChild;
  const year = citation.nextElementSibling;
  const documentNodes = [quote, sourceText, citation, year];
  return documentNodes;
}
const generateRandomNumber = () => {
  let randomQ = Math.floor(Math.random() * Math.floor(quotes.length)); // random number
  return randomQ;
}
const getRandomQuote = (keyName) => { // Get quotes data
  const quote = quotes[randomQ][keyName]; // match for className
  return quote;
}
// Match with classes
const handlePrintType = (className) => {
  for (let key in quotes[0]) { // loop thew quotes data
    if (className === key) {
      return getRandomQuote([key]); // return match
    }
  }
}
contentToDisplay = (element) => { // Content and node selection.
  const nodeMatch = element;
  if (element.className) {
    element.textContent = handlePrintType(nodeMatch.className);
  } else {
    element.textContent = handlePrintType(nodeMatch.parentNode.className);
  }
}
const printQuote = () => { // Print quote to screen.
  const nodes = nodeConfig(); // Get Nodes.
  randomQ = generateRandomNumber(); // Random number roller.
  const quote = nodes[0]; // Read ability help. This comes from the node array.
  // const getQuote = handlePrintType(quote.className); // Get a random quote, for cache.
  const quoteToGet = handlePrintType(quote.className);
  //////  //////
  if (quoteToGet.length > 200) { // Help quotes that are to long.
    quote.setAttribute('style', 'font-size: 2rem; line-height: 1.2;');
  } else {
    quote.setAttribute('style', '');
  }
  // Append quote content
  for (var i = 0; i < nodes.length; i++) {
    if (quote.textContent === quoteToGet) { // Make sure quote is not doubled.
      // randomQ = generateRandomNumber(); // Reroll
      contentToDisplay(nodes[i]); // append content
    } else {
      contentToDisplay(nodes[i]);
    }
  }
}
// when user clicks anywhere on the button, the "printQuote" function is called
quoteButton.addEventListener("click", printQuote, false);