import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks";
import NotesPage from "./pages/NotesPage";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./components/Context/userContext";

export default function App() {
  const [user, setuser] = useState("");
  const [notes, setNotes] = useLocalStorage("notes", []);

  const handleCreate = (content) => {
    const newNote = { id: Date.now(), author: user, body: content };
    setNotes([...notes, newNote]);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleLogin = (user) => {
    setuser(user);
  };

  const handleLogout = () => {
    setuser("");
  };

  return (
    <UserProvider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NotesPage
                notes={notes}
                onLogout={handleLogout}
                onDelete={handleDelete}
                onCreate={handleCreate}
              />
            }
          />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
