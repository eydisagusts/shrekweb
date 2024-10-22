import { useState } from "react";

const shrekQuotes = [
  "Ogres are like onions... they have layers!",
  "What are you doing in my swamp?",
  "I'm like a crackin' onion!",
  "Better out than in, I always say!",
  "Donkey, I'm warning you!",
  "This is the part where you run away."
];

const QuotesComponent = () => {
  const [randomQuote, setRandomQuote] = useState("");
  const [newQuote, setNewQuote] = useState("");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * shrekQuotes.length);
    setRandomQuote(shrekQuotes[randomIndex]);
  };

  const handleAddQuote = () => {
    if (newQuote.trim() !== "") {
      shrekQuotes.push(newQuote);
      setNewQuote("");
    }
  };

  return (
    <div className="flex flex-col text-center bg-green-300">
      {randomQuote && (
        <div>
          <p className="text-green-900 text-3xl font-bold italic mt-6">&quot;{randomQuote}&quot;</p>
        </div>
      )}
      <div className="rounded-md ml-24 mt-10 bg-green-300 mb-6">
        <input
          className="border-2 border-green-500 p-2 rounded-md text-md text-black"
          type="text"
          value={newQuote}
          placeholder="Donkey?"
          onChange={(e) => setNewQuote(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAddQuote}
          className="border border-green-900 bg-green-700 ml-4 rounded-md p-2 text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-green-500"
        >
          Add Quote
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={handleClick}
          className="border border-green-900 bg-green-700 p-3 rounded-md text-white text-xl font-bold transition duration-300 ease-in-out hover:scale-105 hover:bg-green-500"
        >
          Click me for a Shrek Quote!
        </button>
      </div>
    </div>
  );
};

export default QuotesComponent;
