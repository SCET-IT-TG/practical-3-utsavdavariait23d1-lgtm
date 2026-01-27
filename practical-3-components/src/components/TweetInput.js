import React, { useState } from "react";

function TweetInput() {
  const [text, setText] = useState("");

  const tooLong = text.length > 50;

  return (
    <div>
      <h3>Tweet</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ color: tooLong ? "red" : "inherit" }}>
        {text.length}/50
      </div>
      <button disabled={text.length === 0 || tooLong}>
        Tweet
      </button>
    </div>
  );
}

export default TweetInput;