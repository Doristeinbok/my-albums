import React from 'react';
import { useParams } from 'react-router-dom';

function AlbumComponent (props) {

    const { id } = useParams();
    // const history = useHistory();

    const albums = JSON.parse(localStorage.getItem('albums'));

    const album = albums.find(album => album.id == id);
    console.log(album);

    // const goToHomepage = () => {
    //     history.push('/');
    // };

    // const goToAlbumPage = () => {
    //     history.push('/album');
    // };

    

    return (
        <>
            <div className="row my-5"></div>
            <div className="row">
                <div className="col">
                    <img src={album.picture} className="img-fluid img-thumbnail" alt="album" />
                </div>
                <div className="col">
                    <h2>{album.albumName}</h2>
                    <p>{album.description}</p>
                </div>
            </div>
            <div className="row mt-5 ml-2">
                <h4>Songs</h4>
            </div>
            <hr/>
            <div className="row">
                <ol>
                    {album.songs.map(song =>
                        <li>{song}</li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default AlbumComponent;