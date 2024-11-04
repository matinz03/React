import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((inside) => (
        <Note title={inside.title} content={inside.content} key={inside.key} />
      ))}
      <Note
        title="man bad nistiam"
        content="Man hamunam ke ye ruz mikhastam darya besam "
      ></Note>
      <Footer />
    </div>
  );
}

export default App;
