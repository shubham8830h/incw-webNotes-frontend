import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import axios from "axios";
import NoteList from "./component/NoteList";
import NoteForm from "./component/NoteForm";
import { BASE_URL } from "./component/helper";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/webnotes/getnotes`);
      const data = await response.data;
      setNotes(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  //to delete note fuction
  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`${BASE_URL}/webnotes/deletenotes/${noteId}`);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const addNote = async (content, title) => {
    try {
      const response = await axios.post(`${BASE_URL}/webnotes/addnotes`, {
        title: title,
        content: content,
      });
      const data = response.data;
      setNotes([...notes, data]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };
  return (
    <div className="container">
      <Header></Header>
      <NoteForm addNote={addNote}></NoteForm>
      <NoteList notes={notes} deleteNote={deleteNote}></NoteList>
      <Footer />
    </div>
  );
}

export default App;
