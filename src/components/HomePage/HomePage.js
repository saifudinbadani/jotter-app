import './Homepage.css';
import { useState } from 'react';
import { Navigation } from "../Navigation/Navigation";
import { SideBar } from './Sidebar';
import { MainContent } from './MainContent';
import { Modal } from './Modal';

 export const HomePage = () => {
    const [isModalOpen, SetIsModalOpen] = useState(false);
    return <div className='homePage'>
        <Navigation />
        <div className='display-flex'>
        <SideBar />
        <Modal open={isModalOpen} setModalClose={() => SetIsModalOpen(false)}/>
        <MainContent setModalOpen={SetIsModalOpen}/>
        </div>
    </div>
}