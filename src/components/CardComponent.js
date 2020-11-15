import React from 'react';

function CardComponent(props) {

    return (
            <div className="card float-left">
                <div className="row ">
                    <div className="col-sm-7">
                        <div className="card-block">
                            <h4 className="card-title">{props.albumObj.albumName}</h4>
                            <p>Band: {props.albumObj.bandName}</p>
                            <p>released on: {props.albumObj.releasedOn}</p>
                            <a href="#" className="btn btn-primary btn-sm">Read More</a>
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