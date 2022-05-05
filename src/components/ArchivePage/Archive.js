import { useAuth } from '../../context/AuthContext';
import { useNotes } from '../../context/NotesContext';
import { DeleteFromArchiveApiCall, RestoreFromArchiveApiCall } from '../../utils/NotesApiFunctions';
import '../HomePage/Homepage.css'; 

 export const Archive = () => {
    const { initialAuth: { token }} = useAuth();
    
    const { noteState: { archiveNotes}, noteDispatch } = useNotes();

    const deleteFromArchive = async (note) => {
        const response = await DeleteFromArchiveApiCall(token, note)
        noteDispatch({type: 'ARCHIVE', payload: response})
    }

    const restoreNote = async (note) => {
        const response = await RestoreFromArchiveApiCall(token, note)
        noteDispatch({type: 'ARCHIVE', payload: response.archives})
        noteDispatch({type: 'NOTES', payload: response.notes})
    }
    return <div className='notes-container display-flex'>

        {archiveNotes.length !== 0 ? archiveNotes.map((note) => {

           return <div className='archive-note display-flex' key={note._id}>
            <h3 className='title-note heading-3 m-1'>{note.title}</h3>
            <p className='content-note heading-4 m-1'>{note.content}</p>
            <p className='heading-5 m-1'>Created on {note.date}</p>
            <div className='notes-btn'>
                <i className="notes-icon fas fa-trash" onClick={() => deleteFromArchive(note)}></i>
                <button className='btn btn-solid-secondary' onClick={() =>restoreNote(note)}>Restore</button>
            </div>
        </div>
        }) : <div className='emptyPage heading-1'> Archive empty!!! </div>}

    </div>
}