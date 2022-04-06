import './Homepage.css';

export const MainContent = () => {

    return <div className='main-notes-container display-flex'>
        <div className='input-note-container display-flex p-1 heading-3'>
            <input type='text' className='title-input-note heading-3 m-1' placeholder='title comes here...'/>
            <textarea className='content-input-note m-1' placeholder='content comes here...'/>
            <div className='notes-btn'>
                    <i className="notes-icon fas fa-palette"></i>
                    <i className="notes-icon fas fa-tag"></i>
                    <button className='btn btn-solid-primary'>Save</button>
                </div>
        </div>
        <div className='notes-container display-flex'>
            <div className='note display-flex'>
                <h3 className='title-note heading-3 m-1'>Title comes here</h3>
                <p className='content-note heading-4 m-1'>Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here</p>
                <div className='notes-btn'>
                    <i className="notes-icon fas fa-palette"></i>
                    <i className="notes-icon fas fa-tag"></i>
                    <i className="notes-icon fas fa-archive"></i>
                    <i className="notes-icon fas fa-trash"></i>
                    <button className='btn btn-solid-secondary'>Edit</button>
                </div>
            </div>

            <div className='note display-flex'>
                <h3 className='title-note heading-3 m-1'>Title comes here</h3>
                <p className='content-note heading-4 m-1'>Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here</p>
                <div className='notes-btn'>
                    <i className="notes-icon fas fa-palette"></i>
                    <i className="notes-icon fas fa-tag"></i>
                    <i className="notes-icon fas fa-archive"></i>
                    <i className="notes-icon fas fa-trash"></i>
                    <button className='btn btn-solid-secondary'>Edit</button>
                </div>
            </div>

            <div className='note display-flex'>
                <h3 className='title-note heading-3 m-1'>Title comes here</h3>
                <p className='content-note heading-4 m-1'>Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here</p>
                <div className='notes-btn'>
                    <i className="notes-icon fas fa-palette"></i>
                    <i className="notes-icon fas fa-tag"></i>
                    <i className="notes-icon fas fa-archive"></i>
                    <i className="notes-icon fas fa-trash"></i>
                    <button className='btn btn-solid-secondary'>Edit</button>
                </div>
            </div>

            <div className='note display-flex'>
                <h3 className='title-note heading-3 m-1'>Title comes here</h3>
                <p className='content-note heading-4 m-1'>Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here</p>
                <div className='notes-btn'>
                    <i className="notes-icon fas fa-palette"></i>
                    <i className="notes-icon fas fa-tag"></i>
                    <i className="notes-icon fas fa-archive"></i>
                    <i className="notes-icon fas fa-trash"></i>
                    <button className='btn btn-solid-secondary'>Edit</button>
                </div>
            </div>

            <div className='note display-flex'>
                <h3 className='title-note heading-3 m-1'>Title comes here</h3>
                <p className='content-note heading-4 m-1'>Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here Content comes here</p>
                <div className='notes-btn'>
                    <i className="notes-icon fas fa-palette"></i>
                    <i className="notes-icon fas fa-tag"></i>
                    <i className="notes-icon fas fa-archive"></i>
                    <i className="notes-icon fas fa-trash"></i>
                    <button className='btn btn-solid-secondary'>Edit</button>
                </div>
            </div>
        </div>
    </div>
}