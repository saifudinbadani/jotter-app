import { NoteCard } from './NotesCard';
import { useState } from 'react';
import { useNotes } from '../../context/NotesContext';
import { v4 as uuidv4 } from 'uuid';

import './Homepage.css';

export const MainContent = ({setModalOpen}) => {
    const [title, setTitle ] = useState('');
    const [content, setContent ] = useState('');
    const { noteState:{ notesData }, noteDispatch } = useNotes();
    const bgColor = ['red', 'yellow', 'green', 'pink', 'purple']
    const randomBgClr = bgColor[Math.floor(Math.random()*bgColor.length)]
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
                    <i className="notes-icon fas fa-tag"></i>
                    <button className='btn btn-solid-primary' onClick={() => addThisNote()}>Save</button>
                </div>
        </div>



        <div className='notes-container display-flex'>

            {notesData.map((note) => {
                return <NoteCard note={note} setModalOpen={setModalOpen}/>
            })}

        </div>
    </div>
}