var quotes = [
  `“Be yourself; everyone else is already taken.”
― Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe`,
  `“So many books, so little time.”
― Frank Zappa`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
  `“Live as if you were to die tomorrow. Learn as if you were to live forever. ―Mahatma Gandhi`,
  `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,
  `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`,
  `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ― Ralph Waldo Emerson`,
];

function showRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomIndex];
}
