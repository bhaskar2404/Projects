import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const note = {
      id: uuid(),
      title: "Untitled note",
      body: "no Body ",
      lastModifiedDate: Date.now(),
    };
    setNotes([note, ...notes]);
  };

  const getActiveNote = () => {
    if (activeNote) {
      return notes.find((note) => note.id === activeNote);
    }
    //    return {};
  };
  const onUpdateNote = (updateNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote;
      }
      return note;
    });
    setNotes(updatedNotes);
  };
  const onDelete = (id) => {
    const newNotes = notes.filter((notes) => notes.id !== id);
    setNotes([...newNotes]);
  };
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDelete={onDelete}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
