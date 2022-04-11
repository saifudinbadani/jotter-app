import { useNotes } from '../../context/NotesContext';
import '../HomePage/Homepage.css'; 

 export const Archive = () => {

    const { noteState: { archiveNotes}, noteDispatch } = useNotes();

    
    console.log(archiveNotes)
    return <div className='notes-container display-flex'>

        {archiveNotes.length !== 0 ? archiveNotes.map((note) => {

           return <div className='archive-note display-flex' key={note.id}>
            <h3 className='title-note heading-3 m-1'>{note.title}</h3>
            <p className='content-note heading-4 m-1'>{note.content}</p>
            <p className='heading-5 m-1'>Created on {note.date}</p>
            <div className='notes-btn'>
                <i className="notes-icon fas fa-trash" onClick={() => noteDispatch({type: 'DELETE_NOTE', payload: note})}></i>
                <button className='btn btn-solid-secondary' onClick={() => noteDispatch({type:'RESTORE_NOTE', payload: note})}>Restore</button>
            </div>
        </div>
        }) : <div className='emptyPage heading-1'> Archive empty!!! </div>}

    </div>
}