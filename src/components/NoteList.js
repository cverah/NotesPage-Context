import styled from "@emotion/styled";

import Note from "./Note";
import { useContext } from "react";
import userContext from "./Context/userContext";

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

function NoteList({ notes, onDelete }) {
  const { user } = useContext(userContext);
  return (
    <Container>
      {notes.map((note) => (
        <Note key={note.id} note={note} user={user} onDelete={onDelete} />
      ))}
    </Container>
  );
}

export default NoteList;
