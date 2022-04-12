import reactDom from "react-dom";
import './Homepage.css';


export const Modal = ({open, setModalClose}) => {

    if(!open) return null

    return reactDom.createPortal(<div className='modal-overlay'>
    <div className='edit-Modal input-note-container display-flex p-1 heading-3'>
            <input type='text' name='title' className='title-input-note heading-3 m-1' value="{placeholder}"  placeholder='title comes here...'/>
            <textarea name='content' className='content-input-note m-1' placeholder='content comes here...'   value="{placeholder}"/>
            <div className='notes-btn'>
                    <button className='btn btn-solid-secondary' onClick={setModalClose}>Cancel</button>
                    <button className='btn btn-solid-primary'>Update</button>
                </div>
            </div>
            </div>, document.getElementById('portal'))
    
}