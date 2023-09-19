import styled from "@emotion/styled";

import Note from "./Note";
import { useContext } from "react";
import userContext from "./Context/userContext";
import notesContext from "./Context/notesContext";

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

function NoteList({ onDelete }) {
  const { user } = useContext(userContext);
  const { notes } = useContext(notesContext);
  return (
    <Container>
      {notes.map((note) => (
        <Note key={note.id} note={note} user={user} onDelete={onDelete} />
      ))}
    </Container>
  );
}

export default NoteList;
