import React from 'react';

function AlbumComponent (props) {

    return (
        <>
            <div className="row my-5"></div>
            <div className="row">
                <div className="col">
                    <img src="images\albumsImages\Radioheadokcomputer.png" className="img-fluid img-thumbnail" alt="album" />
                </div>
                <div className="col">
                    <h2>ok computer</h2>
                    <p>
                    OK Computer is the third studio album by English rock band Radiohead, released on 21 May 1997 on EMI subsidiaries Parlophone and Capitol Records. The members of Radiohead self-produced the album with Nigel Godrich, an arrangement they have used for their subsequent albums. Other than the song "Lucky", recorded in 1995, Radiohead recorded OK Computer in Oxfordshire and Bath between 1996 and early 1997, mostly in the historic mansion St Catherine's Court. The band distanced themselves from the guitar-centred, lyrically introspective style of their previous album, The Bends. OK Computer's abstract lyrics, densely layered sound and eclectic influences laid the groundwork for Radiohead's later, more experimental work.
                    </p>
                </div>
            </div>
            <div className="row m-5">
                <ol>
                    <h4>Songs</h4>
                    <li>"Airbag"</li>
                    <li>"Paranoid Android"</li>
                    <li>"Subterranean Homesick Alien"</li>
                    <li>"Exit Music (For a Film)"</li>
                    <li>"Let Down"</li>
                    <li>"Karma Police"</li>
                    <li>"Fitter Happier"</li>
                    <li>"Electioneering"</li>
                    <li>"Climbing Up the Walls"</li>
                    <li>"No Surprises"</li>
                    <li>"Lucky"</li>
                    <li>"The Tourist"</li>
                </ol>
            </div>
        </>
    )
}

export default AlbumComponent;