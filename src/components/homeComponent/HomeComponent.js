import React, { useState, useEffect } from 'react';

import CardComponent from '../personalPageComponent/CardComponent';
import getAlbums from '../../api/albumsData.js';
import GalleryComponent from './GalleryComponent';

function HomeComponent() {

    const [albums, setAlbums] = useState([]); //inport external data
    const [sortPopularDesc, setSortPopularDesc] = useState(true);

    useEffect(async function fetchAlbums() {
        const jsonAlbums = await getAlbums;
        setTimeout(() => {
            setAlbums(jsonAlbums);
        }, 2000);
    }, []);

    const arrangeCards = (cardId) => {
        const newAlbums = albums.map(album => {
            if(album.id == cardId){
                const newAlbum = {
                    ...album,
                    likes: album.likes+1
                    //ToDo
                    //set last updated date
                };
                return newAlbum;
            }
            return album;
        });
        setAlbums(() => newAlbums);
        sortPopular(sortPopularDesc, newAlbums);
    }

    const sortPopular = (isPopular, data) => {
        setSortPopularDesc(isPopular);
        const copy = data || [...albums];
        copy.sort((album1,album2) => (isPopular ? album2.likes - album1.likes : 
            album2.releasedOn - album1.releasedOn));
        
        setAlbums(copy);
    }

    return (
        <div className="container">
            <div className="row my-5"></div>
            <div className="row">
                <div className="col text-center">
                    <img src="images/logo.jpg" alt="logo" style={{width: '300px' ,height: 'auto'}}/>
                </div>
               
            </div>
            <div className="row">
                <form>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col pt-0"><h3>Show albums</h3></legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="popular" onChange={() => sortPopular(true)} />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        Most popular
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="newest" onChange={() => sortPopular(false)} />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Newset
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>

            <hr/>
            
            {/* Album Gallery */}

            <div className="row justify-content-center">
                <h1>Album Gallery</h1>
            </div>
            
            <hr/>

            <div className="row">                
                {/* <div className="card-deck"> */}
                    {albums.map(
                        album => <div className="col-md-3 mb-5">
                            <GalleryComponent id={album.id} albumObj={album} arrangeCards={arrangeCards} likes={album.likes + 1} />
                            </div>)
                    }
                    {!albums.length && <img src='images/loader.gif' alt="loader" style={{width: '300px' ,height: '300px'}} />}
                {/* </div> */}
            </div>
        </div>
    )
}

export default HomeComponent;
