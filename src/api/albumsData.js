// import axios from 'axios';

// const getAlbums = async () => {
//     const response = await axios.get('https://api.spotify.com/v1/me/albums/contains')
//     return response.data;
// };

// export {
//     getAlbums
// };



const getAlbums = 
     [
        {id:1, albumName: 'OK Computer', bandName: 'Radiohead', releasedOn: 1997, picture: 'images/albumsImages/Radioheadokcomputer.png', lastUpdate: {num: 3, unit: 'days'}, likes: 5},
        {id:2, albumName: 'Transformer', bandName: 'Lou Reed', releasedOn: 1972, picture: 'images/albumsImages/Loureedtransformer.jpeg', lastUpdate: {num: 5, unit: 'minutes'}, likes: 10},
        {id:3, albumName: 'Zuma', bandName: 'Neil Young', releasedOn: 1975, picture: 'images/albumsImages/Neil_Young-Zuma.jpg', lastUpdate: {num: 17, unit: 'days'}, likes: 15},
        {id:4, albumName: 'First Impressions of Earth', bandName: 'the Strokes', releasedOn: 2006, picture: 'images/albumsImages/FIOEstrokes.jpg', lastUpdate: {num: 1, unit: 'years'}, likes: 6},
        {id:5, albumName: 'Sgt. Pepper\'s Lonely Hearts Club Band', bandName: 'The Beatles', releasedOn: 1967, picture: 'images/albumsImages/Sgt._Pepper\'s_Lonely_Hearts_Club_Band.jpg', lastUpdate: {num: 5, unit: 'months'}, likes:25},
        {id:6, albumName: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars', bandName: 'David Bowie', releasedOn: 1971, picture: 'images/albumsImages/ZiggyStardust.jpg', lastUpdate: {num: 7, unit: 'days'}, likes:35},
        {id:7, albumName: 'Doolittle ', bandName: 'Pixies', releasedOn: 1989, picture: 'images/albumsImages/Pixies-Doolittle.jpg', lastUpdate: {num: 30, unit: 'minutes'}, likes:15},
        {id:8, albumName: 'Nevermind', bandName: 'Nirvana', releasedOn: 1991, picture: 'images/albumsImages/NirvanaNevermindalbumcover.jpg', lastUpdate: {num: 5, unit: 'hours'}, likes: 26},
    ]


export default getAlbums;



