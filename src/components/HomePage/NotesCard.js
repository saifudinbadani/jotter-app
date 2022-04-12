import { useState } from "react";
import { useNotes } from '../../context/NotesContext';

export const NoteCard = ({note, setModalOpen}) => {
    const { noteDispatch } = useNotes();
    const [colorSection, setColorSection] = useState(false);
    
    
    const clrChangeHandler = (currentNote, color) => {
        const updatedNote = {...currentNote, color: color}
        noteDispatch({type: 'COLOR_CHANGE', payload: updatedNote}) 
    }
    return <div className={`note display-flex ${note.color}`} key={note.id}>
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
        <i className="notes-icon fas fa-archive" onClick={() => noteDispatch({type: 'ARCHIVE_NOTE', payload: note})}></i>
        <i className="notes-icon fas fa-trash" onClick={() => noteDispatch({type: 'DELETE_NOTE', payload: note})}></i>
        <button className='btn btn-solid-secondary' onClick={setModalOpen}>Edit</button>
    </div>
</div>
}