import React, { useState, useEffect } from 'react';

import CardComponent from './CardComponent';
import getAlbums from '../api/albumsData.js';

function HomeComponent() {

    const [albums, setAlbums] = useState([]); //inport external data

    const [albumCard, setAlbumCard] = useState();

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

    return (
        <div className="container">
            <div className="row my-5"></div>
            <div className="row">
                <div className="jumbotron container-fluid">
                    <hr />
                    <h1 className="display-4">Albums and more</h1>
                    <p className="lead">Explore the world of good music</p>
                    <hr />
                </div>
            </div>
            <div>
                <div className="row my-5">
                    <div className="col-sm-4">
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
                    <div className="col-sm-8">
                        {albumCard && <CardComponent albumObj={albums[albumCard-1]}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;
