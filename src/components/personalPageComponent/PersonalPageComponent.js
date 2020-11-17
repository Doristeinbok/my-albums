import React, { useState, useEffect } from 'react';

import CardComponent from './CardComponent';
import getAlbums from '../../api/albumsData.js';


function PersonalPageComponent() {

    const [albums, setAlbums] = useState([]); //inport external data

    const [albumCard, setAlbumCard] = useState(); //show album when pressed 

    const [randomAlbum, setRandomAlbum] = useState();

    useEffect(async () => {
        const jsonAlbums = await getAlbums;
        setTimeout(() => {
            setAlbums(jsonAlbums);     
        }, 1000);
    }, []);

    const showAlbumCard = (albumId) => {
        setAlbumCard(albumId);
    }

    const randomAlbums = () => {
        const randId = 1 + Math.floor(Math.random()*10);
        setRandomAlbum(randId);
    }

    const addToList = (id) => {
        let newAlbums = [...albums];
        const newAlbum = newAlbums.find(album => album.id === id);
        newAlbums.push(newAlbum);
        console.log(newAlbums);
        setAlbums(newAlbums);
    }

    const removeAlbums = (id) => {
        let newAlbums = [...albums];
        const newAlbum = newAlbums.find(album => album.id === id);
        newAlbums.splice(id-1, 1);
        console.log(newAlbums);
        console.log(id);
        setAlbums(newAlbums);
    }

    return (
        <div className="container">
            <div className="row my-5"></div>
            <div className="row"><h2>My collection</h2></div>
            <div className="row">
                <div className="col">

                    {/* Albums List */}

                    <ul className="list-group">
                        {albums.map(album => 
                            <a key={album.id} role="button" className="list-group-item list-group-item-action"
                            onClick={() => showAlbumCard(album.id)}>
                                {album.albumName}
                            </a>
                        )}
                        {!albums.length && <img src='images/loader.gif' alt="loader" style={{width: '300px' ,height: '300px'}} />}
                    </ul>   
                </div>
                <div className="col">
                    {albumCard && albums&&<CardComponent albumObj={albums[albumCard - 1]} listCard={true} removeAlbums={removeAlbums}/>}
                </div>
            </div>

            {/* I feel lucky */}

            <div className="row my-5"></div>
            <div className="row my-3">
                <button className="btn btn-primary m-2" onClick={randomAlbums}>I feel lucky</button>
            </div>
            <div className="row">
                {randomAlbum && <CardComponent albumObj={albums[randomAlbum - 1]} randCard={true} addToList={addToList} />}
            </div>
        </div>
    )
}

export default PersonalPageComponent;