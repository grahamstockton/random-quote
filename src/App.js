import './App.css';
import { getQuotes } from './quotes';
import { useState } from 'react';

// Declare this file after quotes in order to get access to the quotes variab

// quotes variable
var quotes = getQuotes()['quotes'];

// returns a quote at random from quotes
function getNewQuote() {
  var quoteKeys = Object.keys(quotes);
  return quotes[quoteKeys[ Math.floor(quoteKeys.length * Math.random()) ]];
}

// display -- quote changes when button is clicked. has a tweet link
function App() {
  const [state, setState] = useState(getNewQuote());

  return (
    <div className="App">
      <div className="center" id="quote-box">
        <h2 id="text">{state.quote}</h2>
        <div id="controls">
          <p id="author">{state.author}</p>
          <button className='btn push' id="new-quote" onClick={() => setState(getNewQuote)}>New Quote</button>
          <a id="tweet-quote" href={'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + state.quote + '" -' + state.author)}>Tweet</a>
        </div>
      </div>
    </div>
  );
}

export default App;
