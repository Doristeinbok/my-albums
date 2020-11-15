import React from 'react';

function GalleryComponent (props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.albumObj.picture} alt="Card image cap" style={{width: '200px'}}/>
            <div className="card-body">
                <h4 className="card-title" style={{width: '200px'}}>{props.albumObj.albumName}</h4>
                <h5 className="card-title">{props.albumObj.bandName}</h5>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated {props.albumObj.lastUpdate.num} {props.albumObj.lastUpdate.unit} ago</small>
            </div>
            <div className="card-footer">
                <small className="text-muted">{props.albumObj.numOfFollowers} followers</small>
            </div>
        </div>
    )
}

export default GalleryComponent;


