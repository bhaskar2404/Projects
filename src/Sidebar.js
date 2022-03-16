import React from "react";

const Sidebar = ({ notes, onAddNote, onDelete, activeNote, setActiveNote }) => {
  const sortNotes = notes.sort(
    (a, b) => b.lastModifiedDate - a.lastModifiedDate
  );

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortNotes?.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button
                onClick={() => {
                  onDelete(note.id);
                }}
              >
                Delete
              </button>
            </div>
            <p>{note.body && note.body.substr(1, 100) + "..."}</p>
            <small className="note-meta">
              Last modifide{" "}
              {new Date(note.lastModifiedDate).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
