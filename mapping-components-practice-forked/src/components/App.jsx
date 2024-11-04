import React from "react";
import Items from "./Items";
import emojipedia from "../emojipedia";

function Dothat(that) {
  return (
    <Items
      name={that.name}
      emoji={that.emoji}
      meaning={that.meaning}
      key={that.id}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Dothat)}</dl>
    </div>
  );
}

export default App;
