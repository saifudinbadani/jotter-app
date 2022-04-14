import reactDom from "react-dom";
import { useState } from "react";
import { useNotes } from "../../context/NotesContext";
import './Homepage.css';


export const Modal = ({open, setModalClose, note}) => {
    const { noteDispatch } = useNotes();
    const [editInput,setEditInput] = useState({
        ...note
    })
   
    const updatedNoteHandler = (e) => {
        setEditInput((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    
    const updatedNotesDispatch =() => {
        noteDispatch({type: 'UPDATE_NOTE', payload: editInput})
        setModalClose(); 
    }
    if(!open) return null

    return reactDom.createPortal(<div className='modal-overlay'>
    <div className='edit-Modal input-note-container display-flex p-1 heading-3'>
        <input type='text' name='title' className='title-input-note heading-3 m-1' value={editInput.title} placeholder='title comes here...' onChange={(e) => updatedNoteHandler(e)}/>
        <textarea name='content' className='content-input-note m-1' placeholder='content comes here...'   value={editInput.content} onChange={(e) => updatedNoteHandler(e)}/>
        <div className='notes-btn'>
                <button className='btn btn-solid-secondary' onClick={setModalClose}>Cancel</button>
                <button className='btn btn-solid-primary'onClick={() => updatedNotesDispatch()}>Update</button>
            </div>
        </div>
        </div>, document.getElementById('portal'))
    
}