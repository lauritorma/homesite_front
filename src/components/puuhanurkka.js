import React from 'react';
import '../styles/style.css';
import { Spotify } from 'react-spotify-embed';

const PuuhaNurkka = () => {

    return (

        <div>
            <div className='spotify'>
                <h3 className='h2'>Koodausmusaa 🎧</h3>
                <Spotify className='spotify' link="https://open.spotify.com/track/4Jh5SlPiCAKP2d88TmKisF?si=ad31e03cfd3948ad" />
            </div>
        </div>


    );
}

export default PuuhaNurkka;