import { NoteCard } from './NotesCard';
import { useState } from 'react';
import { useNotes } from '../../context/NotesContext';
import { sortByPriorityFn, sortByTimeFn } from '../../utils/FilterFunctions';
import { v4 as uuidv4 } from 'uuid';
import './Homepage.css';


export const MainContent = ({setModalOpen}) => {
    const [title, setTitle ] = useState('');
    const [content, setContent ] = useState('');
    const [label, setLabel] = useState('');
    const [priority, setPriority] = useState('Low');

    const { noteState:{ notesData, sortByPriority, sortTime }, noteDispatch } = useNotes();
    const bgColor = ['red', 'yellow', 'green', 'pink', 'purple']
    const randomBgClr = bgColor[Math.floor(Math.random()*bgColor.length)]
    const addThisNote = () => {
        noteDispatch({type: 'ADD_NOTE', payload:{ 
            title,
            content,
            date: `${new Date(Date.now()).toLocaleDateString()}`,
            sortTime: new Date().getTime(),
            id: uuidv4(),
            color: randomBgClr,
            label,
            priority,


        }})
        setTitle('')
        setContent('')
        setLabel('')
    }
   
    const sortByPriorityData = sortByPriorityFn(sortByPriority, notesData)
    const sortByTimeData = sortByTimeFn(sortTime, sortByPriorityData)


    return <div className='main-notes-container display-flex'>
        <div className='input-note-container display-flex p-1 heading-3'>
            <input type='text' name='title' className='title-input-note heading-3 m-1' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title comes here...'/>
            <textarea name='content' className='content-input-note m-1' placeholder='content comes here...'  onChange={(e) => setContent(e.target.value) } value={content}/>
            <div className='notes-btn display-flex'>
                    <div className='priority-input-note heading-4'>
                    <label htmlFor="priority-select">Priority: </label>

                    <select name="priority" id="priority-select" onChange={(e) => setPriority(e.target.value)}>
                        <option value="Low" >Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    </div>
                    <input type='text' name='label' className='label-input-note heading-4 m-1' value={label} onChange={(e) => setLabel(e.target.value)} placeholder='label'/>
                    <button className='btn btn-solid-primary' onClick={() => addThisNote()}>Save</button>
                </div>
        </div>

        <div className='filterTable-note-container display-flex'>
            {/* <p className="filter-note-heading heading-4 fw-bold m-t-1">Filter:</p> */}
            <div className="filter-note-form m-t-1 display-flex-c">
                <div className="display-flex m-t-1 align-items-cntr">
                    <input type="radio" id="priorityLtoH" name="sortingPriority" value="priorityLtoH" onChange={() => noteDispatch({type: 'SORT_BY_PRIORITY_LtoH'})} checked={sortByPriority === 'SORT_BY_PRIORITY_LtoH'}/>
                    <label htmlFor="priorityLtoH" className="font-size-1pt4 p-rl-1">Priority - Low to High</label>
                </div>
                <div className="display-flex m-t-1 align-items-cntr">
                    <input type="radio" id="priorityHtoL" name="sortingPriority" value="priorityHtoL" onChange={() => noteDispatch({type: 'SORT_BY_PRIORITY_HtoL'})} checked={sortByPriority === 'SORT_BY_PRIORITY_HtoL'}/>
                    <label htmlFor="priorityHtoL" className="font-size-1pt4 p-rl-1">Priority - High to Low</label>
                </div>
            </div>
            <div className="filter-note-form m-t-1 display-flex-c">
                <div className="display-flex m-t-1 align-items-cntr">
                    <input type="radio" id="sortByLtoH" name="sortingTime" value="sortByLtoH" onChange={() => noteDispatch({type: 'sortByLtoH'})} checked={sortTime === 'sortByLtoH'}/>
                    <label htmlFor="sortByLtoH" className="font-size-1pt4 p-rl-1">Recent to Old</label>
                </div>
                <div className="display-flex m-t-1 align-items-cntr">
                    <input type="radio" id="sortByHtoL" name="sortingTime" value="sortByHtoL" onChange={() => noteDispatch({type: 'sortByHtoL'})} checked={sortTime === 'sortByHtoL'}/>
                    <label htmlFor="sortByHtoL" className="font-size-1pt4 p-rl-1">Old to Recent </label>
                </div>
            </div>
        </div>

        <div className='notes-container display-flex'>

            {sortByTimeData.map((note) => {
                return <>
                            <NoteCard note={note} setModalOpen={setModalOpen} />
                        </> 
            })}

        </div>
    </div>
}