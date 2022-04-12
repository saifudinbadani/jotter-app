
import { useState } from 'react';
import { useNotes } from '../../context/NotesContext';
import { v4 as uuidv4 } from 'uuid';

import './Homepage.css';

export const MainContent = () => {

    const [title, setTitle ] = useState('');
    const [content, setContent ] = useState('');
    const { noteState:{ notesData }, noteDispatch } = useNotes();
    const [colorSection, setColorSection] = useState(false);
    
    
    const bgColor = ['red', 'yellow', 'green', 'pink', 'purple']
    
    const randomBgClr = bgColor[Math.floor(Math.random()*bgColor.length)]
    const clrChangeHandler = (currentNote, color) => {
        const updatedNote = {...currentNote, color: color}
        noteDispatch({type: 'COLOR_CHANGE', payload: updatedNote}) 
    }
    const addThisNote = () => {
        noteDispatch({type: 'ADD_NOTE', payload:{ 
            title,
            content,
            date: `${new Date(Date.now()).toLocaleDateString()}`,
            id: uuidv4(),
            color: randomBgClr
        }})
        setTitle('')
        setContent('')
    }
    return <div className='main-notes-container display-flex'>
        <div className='input-note-container display-flex p-1 heading-3'>
            <input type='text' name='title' className='title-input-note heading-3 m-1' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title comes here...'/>
            <textarea name='content' className='content-input-note m-1' placeholder='content comes here...'  onChange={(e) => setContent(e.target.value) } value={content}/>
            <div className='notes-btn'>
                    <i className="notes-icon fas fa-palette"></i>
                    <i className="notes-icon fas fa-tag"></i>
                    <button className='btn btn-solid-primary' onClick={() => addThisNote()}>Save</button>
                </div>
        </div>



        <div className='notes-container display-flex'>
            
            {notesData.map((note) => {

            return <div className={`note display-flex ${note.color}`} key={note.id}>
                <h3 className='title-note heading-3 m-1'>{note.title}</h3>
                <p className='content-note heading-4 m-1'>{note.content}</p>
                <p className='heading-5 m-1'>Created on {note.date}</p>
               {colorSection && <div className='color-section'> 
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
                    <button className='btn btn-solid-secondary'>Edit</button>
                </div>
            </div>
            })}

        </div>
    </div>
}