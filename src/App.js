import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🌸": "Cherry Blossom",
  "🏵": "Rosette",
  "🌹": "Rose",
  "🌺": "Hibiscus",
  "🌻": "Sunflower",
  "🌼": "Blossom",
  "🌷": "Tulip",
  "🥀": "Wilted flower"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function clickEmoji(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  function inputEmoji(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App" style={{ margin: "1rem", padding: "2rem" }}>
      <h1 styles={{ padding: "1rem", margin: "2rem", fontSize: "3rem" }}>
        Know the Flower Emoji
      </h1>
      <input
        onChange={inputEmoji}
        style={{
          height: "10rem",
          width: "10rem",
          margin: "1rem",
          fontSize: "5rem",
          textAlign: "center",
          borderRadius: "1rem",
          border: "0px",
          boxShadow: "0rem 0rem 2rem #047857",
          backgroundColor: "#D1FAE5"
        }}
      ></input>
      <h2 style={{ fontSize: "2rem", margin: "1rem" }}>{meaning}</h2>
      <h3 style={{ margin: "0.5rem" }}>Emojis of flower</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => clickEmoji(emoji)}
            key={emoji}
            style={{ fontSize: "4rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
