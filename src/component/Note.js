import React from "react";
import { BsTrash } from "react-icons/bs";
const Note = ({ note ,deleteNote}) => {
  const handleDelete = () => {
    deleteNote(note.id);
  };
  return (
    <div className="note">
      <h4>{note.title}</h4>
      <p>{note.content}</p>

      <button onClick={handleDelete}>
        <BsTrash />
      </button>
    </div>
  );
};

export default Note;
