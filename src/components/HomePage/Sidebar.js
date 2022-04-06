import './Homepage.css';

export const SideBar = () => {
    return <aside className='side-wrapper display-flex'>
        <button className='btn-sideWrapper  btn'>
            <i class="icon-sideWrapper fas fa-home-alt"></i>
            Home</button>
        <button className='btn-sideWrapper  btn'>
            <i class="icon-sideWrapper fas fa-tag"></i>
            Labels</button>
        <button className='btn-sideWrapper  btn'>
            <i class="icon-sideWrapper fas fa-archive"></i>
            Archive</button>
        <button className='btn-sideWrapper  btn'>
            <i class="icon-sideWrapper fas fa-trash"></i>
            Trash</button>
        <button className='btn-sideWrapper  btn'>
            <i class="icon-sideWrapper fas fa-user-circle"></i>
            Profile</button>
    </aside>
}