import React from 'react';
import '../styles/style.css';
import Social from './social';
import MainHeader from './mainHeader';
import PuuhaNurkka from './puuhanurkka';


const MainPage = () => {

    return (
        <div className='page-container'>
            <div className='main-content-container'>
                <MainHeader></MainHeader>
                <Social></Social>
            </div>
            <div className='sub-content-container'>
                <PuuhaNurkka></PuuhaNurkka>
            </div>
        </div>

    );
}

export default MainPage;
