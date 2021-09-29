import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😀": "grinning",
  "😂": "Face with Tears of Joy",
  "😍": "Smiling Face with Heart-Eyes",
  "🤔": "Thinking Face",
  "😏": "Smirking Face",
  "🥶": "Cold Face",
  "🥵": "Hot Face",
  "🥺": "Pleading Face",
  "😰": "Anxious Face with sweat",
  "🥴": "Woozy Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  // var [userInput, setUserInput] = useState( event );

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Oops! We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "teal" }}>Emoji Interpreter</h1>

      <h2>Enter your emoji to see its meaning</h2>

      <input
        style={{ height: "3rem", width: "6rem", fontSize: "1.5rem" }}
        onChange={emojiInputHandler}
      />

      {/* <div>Welcome {userInput} </div> */}

      <div style={{ color: "orange", fontSize: "1.4rem", paddingTop: "1rem" }}>
        {" "}
        Meaning : {meaning}
      </div>

      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.8rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
