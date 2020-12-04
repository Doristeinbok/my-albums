import React, { useState, useEffect } from 'react';

import CardComponent from '../personalPageComponent/CardComponent';
import getAlbums from '../../api/albumsData.js';
import GalleryComponent from './GalleryComponent';

import './HomeComponent.css';

function HomeComponent() {

    const [albums, setAlbums] = useState([]); //inport external data
    const [sortPopularDesc, setSortPopularDesc] = useState(true);
    const [searchAlbum, setSearchAlbum] = useState('');
    const [searchAlbumByBand, setSearchAlbumByBand] = useState('');

    useEffect(async function fetchAlbums() {
        let arrayAlbums;
        if (!localStorage.getItem('albums')) {
            arrayAlbums = await getAlbums;
            localStorage.setItem('albums', JSON.stringify(arrayAlbums));
        }else{
            arrayAlbums = JSON.parse(localStorage.getItem('albums'));
        }

        setTimeout(() => {
            setAlbums(arrayAlbums);
        }, 2000);
    }, []);

    const arrangeCards = (cardId) => {
        const newAlbums = albums.map(album => {
            if(album.id == cardId){
                const newAlbum = {
                    ...album,
                    likes: album.likes+1
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
            album2.lastUpdate.slice(7,11) - album1.lastUpdate.slice(7,11)));
        
        setAlbums(copy);
    }

    const findAlbum = (e) => {
        setSearchAlbum(e.target.value);
    }
    const findByBand = (e) => {
        setSearchAlbumByBand(e.target.value);
    }

    return (
        <div className="container">
            <div className="row my-5"></div>
            <div className="row">
                <div className="col text-center">
                    <img className="border" src="/images/logo.jpg" alt="logo" style={{width: '300px' ,height: 'auto'}}/>
                </div>
               
            </div>
            <div className="row my-3"></div>

            {/* Album Gallery */}

            <hr className="divider"/>
            
            <div className="row justify-content-center">
                <h1>Album Gallery</h1>
            </div>
            
            <hr className="divider"/>

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
                                        Most recent updated
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <nav className="navbar navbar-light bg-light">
                                <form className="form-inline">
                                    <input onChange={findAlbum} className="form-control mr-sm-2" type="search" placeholder="Find by Album Name" aria-label="Search" />
                                </form>
                            </nav>
                        </div>
                        <div className="row">
                            <nav className="navbar navbar-light bg-light">
                                <form className="form-inline">
                                    <input onChange={findByBand} className="form-control mr-sm-2" type="search" placeholder="Find by Band Name" aria-label="Search" />
                                </form>
                            </nav>
                        </div>
   
                    </fieldset>
                </form>
            </div>
            <div className="row">
                            {/* <h1>{searchAlbum}</h1> */}
                            {albums.filter((album) => album.albumName.toLocaleLowerCase().includes(searchAlbum)
                                    &&album.bandName.toLocaleLowerCase().includes(searchAlbumByBand))
                                        .map((album,index) => <div className="col-md-3 mb-5" id={index}>
                                                                <GalleryComponent id={index} albumObj={album} arrangeCards={arrangeCards} likes={album.likes + 1} />
                                                            </div>)
                            }
                    {!albums.length && <img src='images/loader.gif' alt="loader" style={{width: '300px' ,height: '300px'}} />}

            </div>
        </div>
    )
}

export default HomeComponent;
