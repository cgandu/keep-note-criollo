import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isFocused, setFocus] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setFocus(false);
  }

  function handleFocus() {
    setFocus(true);
  }

  return (
    <div>
      <form className="create-note" autoComplete="off">
        {isFocused && (
          <input
            name="title"
            onClick={handleFocus}
            onChange={handleChange}
            value={note.title}
            placeholder="Titulo"
          />
        )}
        <textarea
          name="content"
          onClick={handleFocus}
          onChange={handleChange}
          value={note.content}
          placeholder="Escribí tu nota..."
          rows={isFocused ? "3" : "1"}
        />
        <Zoom in={isFocused}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
