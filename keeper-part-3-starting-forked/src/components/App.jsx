import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [thething, setThething] = useState([]);

  function deletethat(id) {
    setThething((prev) => {
      return prev.filter((that, index) => index !== id);
    });
  }

  function addItem(every) {
    setThething((prev) => {
      return [...prev, every];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {thething.map((item, index) => (
        <Note
          delete={deletethat}
          id={index}
          key={index}
          title={item.title}
          content={item.note}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
