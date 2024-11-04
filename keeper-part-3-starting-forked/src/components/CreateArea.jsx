import React, { useState } from "react";

function CreateArea(props) {
  const [every, setEvery] = useState([
    {
      title: "",
      note: "",
    },
  ]);
  function changeHandler(event) {
    const { name: key, value } = event.target;
    setEvery((prev) => {
      return { ...prev, [key]: value };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={every.title}
        />
        <textarea
          onChange={changeHandler}
          name="note"
          placeholder="Take a note..."
          rows="3"
          value={every.note}
        />
        <button
          onClick={() => {
            props.addItem(every);
            setEvery.title = "";
            setEvery.note = "";
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
