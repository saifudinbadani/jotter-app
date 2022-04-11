import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducer/NotesReducer";

const NotesContext = createContext();

const NotesProvider = ({children}) => {
    const [noteState, noteDispatch]=useReducer(notesReducer, {
        notesData: [],
        archiveNotes: []
    })
    return <NotesContext.Provider value={{noteState, noteDispatch}}>
        {children}
    </NotesContext.Provider>
}

const useNotes = () => useContext(NotesContext);

export {useNotes, NotesProvider}