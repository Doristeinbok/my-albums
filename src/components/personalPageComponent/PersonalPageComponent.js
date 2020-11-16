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
            console.log(albums);       
        }, 2000);
    }, []);

    const showAlbumCard = (albumId) => {
        setAlbumCard(albumId);
    }

    const randomAlbums = () => {
        const randId = 1 + Math.floor(Math.random()*5);
        setRandomAlbum(randId);
        console.log(randId);
    }

    return (
        <div className="container">
            <h1 className="text-center">Hello Gili!</h1>
            <div className="row"><h2>My collection</h2></div>
            <div className="row">
                <div className="col">
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
                    {albumCard && albums&&<CardComponent albumObj={albums[albumCard - 1]}/>}
                </div>
            </div>
            <div className="row my-3"></div>
            <div className="row">
                <div className="col-sm-4">
                    <button className="btn btn-primary m-2" onClick={randomAlbums}>I feel lucky</button>
                </div>
                <div className="col-sm-8">
                    {randomAlbum && <CardComponent albumObj={albums[randomAlbum - 1]} randCard={1}/>}
                </div>
            </div>
        </div>
    )
}

export default PersonalPageComponent;