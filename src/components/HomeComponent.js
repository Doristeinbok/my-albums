import React, { useState, useEffect } from 'react';

import CardComponent from './CardComponent';
import getAlbums from '../api/albumsData.js';
import GalleryComponent from './GalleryComponent';

function HomeComponent() {

    const [albums, setAlbums] = useState([]); //inport external data

    console.log(albums)
    useEffect(async () => {
        const jsonAlbums = await getAlbums;
        setTimeout(() => {
            setAlbums(jsonAlbums);     
            console.log(albums);       
        }, 2000);
    }, []);


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
            <div className="row">
                <form>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-6 pt-0"><h3>Show albums</h3></legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        Most popular
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        newest
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1"></label>
                        <input type="text" className="form-control ml-4" id="exampleFormControlInput1" placeholder="Search by album name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput2"></label>
                        <input type="text" className="form-control ml-4" id="exampleFormControlInput2" placeholder="Search by band name" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            All keywords
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            At least one keyword
                        </label>
                    </div>
                </form>
            </div>

            <hr/>

            <div className="row justify-content-center">
                <h1>Album Gallery</h1>
            </div>
            
            <hr/>

            <div className="row my-5">
                <div className="card-deck">
                    {albums.map(album => <GalleryComponent albumObj={album}/>)
                    .slice(0,4)}
                    {!albums.length && <img src='images/loader.gif' alt="loader" style={{width: '300px' ,height: '300px'}} />}
                </div>
            </div>
            <div className="row my-5">
                <div className="card-deck">
                    {albums.map(album => <GalleryComponent albumObj={album}/>)
                    .slice(4,8)}
                    {!albums.length && <img src='images/loader.gif' alt="loader" style={{width: '300px' ,height: '300px'}} />}    
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;
