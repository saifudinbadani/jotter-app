import { useState } from "react";
import { useNotes } from '../../context/NotesContext';
import { AddToArchiveApiCall, DeleteNoteApiCall, UpdateNoteApiCall } from "../../utils/NotesApiFunctions";
import { useAuth } from "../../context/AuthContext";
import { Modal } from "./Modal";

export const NoteCard = ({note}) => {
    const { initialAuth: { token }} = useAuth();
    const { noteDispatch } = useNotes();
    const [colorSection, setColorSection] = useState(false);
    const [isModalOpen, SetIsModalOpen] = useState(false);
    
    
    const clrChangeHandler = async(currentNote, color) => {
        const updatedNote = {...currentNote, color: color}
        const response = await UpdateNoteApiCall(token, updatedNote)
        
        noteDispatch({type: 'NOTES', payload: response}) 
    }

    const deleteNote = async(id) => {
        const response = await DeleteNoteApiCall(token, id);
        noteDispatch({type: 'NOTES', payload: response})
    }

    const archiveNote = async (note) => {
        const response = await AddToArchiveApiCall(token, note)
        noteDispatch({type: 'ARCHIVE', payload: response.archives})
        noteDispatch({type: 'NOTES', payload: response.notes})
    }
    return <>
     <div className={`note display-flex ${note.color} pos-rltv`} key={note._id}>
           { note.label !== '' && <span className="badge-note pos-absolute">{note.label}</span>}
           <span className="priority-note pos-absolute">{note.priority}</span>
            <h3 className='title-note heading-3 m-1'>{note.title}</h3>
            <p className='content-note heading-4 m-1'>{note.content}</p>
            <p className='heading-5 m-1'>Created on {note.date}</p>
        { colorSection && <div className='color-section'> 
                <button className='clr-btn btn red' onClick={() => clrChangeHandler(note, 'red')}/>
                <button className='clr-btn btn yellow' onClick={() => clrChangeHandler(note, 'yellow')}/>
                <button className='clr-btn btn green' onClick={() => clrChangeHandler(note, 'green')}/>
                <button className='clr-btn btn pink' onClick={() => clrChangeHandler(note, 'pink')}/>
                <button className='clr-btn btn purple'onClick={() => clrChangeHandler(note, 'purple')}/>
            </div>}
            <div className='notes-btn'>
                <i className="notes-icon fas fa-palette" onClick={() => setColorSection((prev) => !prev)}></i>
                <i className="notes-icon fas fa-tag"></i>
                <i className="notes-icon fas fa-archive" onClick={() => archiveNote(note)}></i>
                <i className="notes-icon fas fa-trash" onClick={() => deleteNote(note._id)}></i>
                <button className='btn btn-solid-secondary' onClick={() => SetIsModalOpen(true)}>Edit</button>
            </div>
    </div>
    <Modal open={isModalOpen} setModalClose={() => SetIsModalOpen(false)} note={note}/> 
    </>

}