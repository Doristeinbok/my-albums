import React from 'react';
import {Link} from 'react-router-dom';

function CardComponent(props) {

    return (
            <div className="card float-left">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="card-block">
                            <h4 className="card-title">{props.albumObj.albumName}</h4>
                            <p>Band: {props.albumObj.bandName}</p>
                            <p>released on: {props.albumObj.releasedOn}</p>
                            <Link to={`/album/${props.albumObj.id}`} className="btn btn-primary btn-sm mb-4">Read More</Link>
                            
                            {/* remove from my collection - only for 'Remove From List' card */}

                            {props.listCard && 
                            <div className="row">
                                <button className="btn btn-danger btn-block" 
                                    onClick={() => props.removeAlbums(props.albumObj.id)}>Remove From List</button>
                            </div>
                            }

                            {/* Add to my collection - only for 'I feel lucky' card */}
                                
                            {props.randCard && 
                                <button className="btn btn-success btn-block"
                                    onClick={() => props.addToList(props.albumObj.id)}
                                    >
                                    Add to my collection
                                </button>
                            }
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img src={props.albumObj.picture} alt="Card" style={{width: '300px' ,height: '300px'}} />
                    </div>
                </div>
            </div>
    )
}

export default CardComponent;