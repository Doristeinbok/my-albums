import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function GalleryComponent (props) {

    return (
        <div className="card">
            <img className="card-img-top" src={props.albumObj.picture} alt="Card image cap"/>
            <div className="card-body">
                <h4 className="card-title" style={{width: '200px'}}>{props.albumObj.albumName}</h4>
                <h5 className="card-title">{props.albumObj.bandName}</h5>
                {/* <Link to='/album' className="btn btn-primary btn-sm mb-4">Read More</Link> */}
                <Link to='/album/' className="btn btn-primary btn-sm mb-4">Read More</Link>
            </div>  
            <div className="card-footer">
                <p className="text-muted d-inline">{props.likes} likes</p>
                <button type="button" className="btn ml-2">
                    <img src='images/like.jpg' alt="like button" style={{width: '60px'}} 
                        onClick={() => props.arrangeCards(props.albumObj.id)}
                    /> 
                </button>
                <small className="text-muted d-block">{`Last updated on: ${props.albumObj.lastUpdate}`}</small>
            </div>
        </div>
    )
}

export default GalleryComponent;


