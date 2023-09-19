import { createContext } from "react";

const notesContext = createContext([]);
export const NotesProvider = notesContext.Provider;

export default notesContext;
