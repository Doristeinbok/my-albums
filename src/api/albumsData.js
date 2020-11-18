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
        {
            id: 1, albumName: 'OK Computer', bandName: 'Radiohead', releasedOn: 1997, picture: '/images/albumsImages/Radioheadokcomputer.png', 
            lastUpdate: '01 Jan 2002 00:00:00 GMT', likes: 5,
            description: 'OK Computer is the third studio album by English rock band Radiohead, released on 21 May 1997 on EMI subsidiaries Parlophone and Capitol Records. The members of Radiohead self-produced the album with Nigel Godrich, an arrangement they have used for their subsequent albums. Other than the song "Lucky", recorded in 1995, Radiohead recorded OK Computer in Oxfordshire and Bath between 1996 and early 1997, mostly in the historic mansion St Catherine\'s Court. The band distanced themselves from the guitar-centred, lyrically introspective style of their previous album, The Bends. OK Computer\'s abstract lyrics, densely layered sound and eclectic influences laid the groundwork for Radiohead\'s later, more experimental work.',
            songs: ["Airbag", "Paranoid Android", "Subterranean Homesick Alien", "Exit Music (For a Film)", "Let Down", "Karma Police", "Fitter Happier", "Electioneering", "Climbing Up the Walls", "No Surprises", "Lucky", "The Tourist"]

            
        },
        {
            id: 2, albumName: 'Transformer', bandName: 'Lou Reed', releasedOn: 1972, picture: '/images/albumsImages/Loureedtransformer.jpeg', 
            lastUpdate: '01 Jan 1998 00:00:00 GMT', likes: 10, 
            description: 'Transformer is the second solo studio album by American recording artist Lou Reed. The album is considered an influential landmark of the glam rock genre, anchored by Reed\'s most successful single, "Walk on the Wild Side", which touched on then-controversial topics of sexual orientation, gender identity, prostitution, and drug use. Produced by David Bowie and Mick Ronson, the album was released in November 1972 by RCA Records. Though Reed\'s self-titled debut solo album had been unsuccessful, Bowie had been an early fan of Reed\'s former band The Velvet Underground, and used his own fame to promote Reed, who had not yet achieved mainstream success.',
            songs: ["Vicious", "Andy's Chest", "Perfect Day", "Hangin' 'Round", "Walk on the Wild Side", "Make Up", "Satellite of Love", "Wagon Wheel", "New York Telephone Conversation", "I'm So Free", "Goodnight Ladies"]
        },
        {
            id: 3, albumName: 'Zuma', bandName: 'Neil Young', releasedOn: 1975, picture: '/images/albumsImages/Neil_Young-Zuma.jpg', 
            lastUpdate: '01 Jan 1997 00:00:00 GMT', likes: 15,
            description: 'Zuma is the seventh studio album by Canadian/American musician Neil Young, released on Reprise Records in November 1975. Co-credited to Crazy Horse, it includes "Cortez the Killer", one of Young\'s best-known songs. Upon release, it peaked at #25 on the Billboard 200. In 1997, the album received a RIAA gold certification. In 2000 it was voted number 410 in Colin Larkin\'s All Time Top 1000 Albums.',
            songs: ["Don't Cry No Tears", "Danger Bird", "Pardon My Heart", "Lookin' for a Love", "Barstool Blues", "Stupid Girl", "Drive Back", "Cortez the Killer", "Through My Sails"]
        },
        {
            id: 4, albumName: 'First Impressions of Earth', bandName: 'the Strokes', releasedOn: 2006, picture: '/images/albumsImages/FIOEstrokes.jpg', 
            lastUpdate: '01 Jan 2012 00:00:00 GMT', likes: 6,
            description: 'First Impressions of Earth is the third studio album by American rock band the Strokes. It was released through RCA Records first on December 30, 2005, in Germany,[1] and January 3, 2006, elsewhere. Three singles were released from the album: "Juicebox", "Heart in a Cage", and "You Only Live Once".',
            songs: ["You Only Live Once", "Juicebox", "Heart in a Cage", "Razorblade", "On the Other Side", "Vision of Division", "Ask Me Anything", "Electricityscape", "Killing Lies", "Fear of Sleep", "15 Minutes", "Ize of the World", "Evening Sun", "Red Light"]
        },
        {
            id: 5, albumName: 'Sgt. Pepper\'s Lonely Hearts Club Band', bandName: 'The Beatles', releasedOn: 1967, picture: '/images/albumsImages/Sgt._Pepper\'s_Lonely_Hearts_Club_Band.jpg', 
            lastUpdate: '01 Jan 1999 00:00:00 GMT', likes: 25,
            description: 'Sgt. Pepper\'s Lonely Hearts Club Band is the eighth studio album by the English rock band the Beatles. Released on 26 May 1967, it spent 27 weeks at number one on the Record Retailer chart in the United Kingdom and 15 weeks at number one on the Billboard Top LPs chart in the United States. It was lauded by critics for its innovations in songwriting, production and graphic design, for bridging a cultural divide between popular music and high art, and for reflecting the interests of contemporary youth and the counterculture. Its release was a defining moment in 1960s pop culture, heralding the Summer of Love, while the album\'s reception achieved full cultural legitimisation for pop music and recognition for the medium as a genuine art form.',
            songs: ["Sgt. Pepper's Lonely Hearts Club Band", "With a Little Help from My Friends", "Lucy in the Sky with Diamonds", "Getting Better", "Fixing a Hole", "She's Leaving Home", "Being for the Benefit of Mr. Kite!", "Within You Without You", "When I'm Sixty-Four", "Lovely Rita", "Good Morning Good Morning", "Sgt. Pepper's Lonely Hearts Club Band (Reprise)", "A Day in the Life"]
        },
        {
            id: 6, albumName: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars', bandName: 'David Bowie', releasedOn: 1971, picture: '/images/albumsImages/ZiggyStardust.jpg', 
            lastUpdate: '01 Jan 2001 00:00:00 GMT', likes: 35,
            description: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars (often shortened to Ziggy Stardust) is the fifth studio album by English musician David Bowie, released on 16 June 1972 in the United Kingdom by RCA Records. It was produced by Bowie and Ken Scott and features Bowie\'s backing band the Spiders from Mars – Mick Ronson, Trevor Bolder and Mick Woodmansey. Most of the songs were written around the same time as its predecessor Hunky Dory. After that album was completed, recording for Ziggy Stardust commenced in November 1971 at Trident Studios in London, with further sessions in early February 1972.',
            songs: ["Five Years", "Soul Love", "Moonage Daydream", "Starman", "It Ain't Easy", "Lady Stardust", "Star", "Hang On to Yourself", "Ziggy Stardust", "Suffragette City", "Rock 'n' Roll Suicide"]
        },
        {
            id: 7, albumName: 'Doolittle ', bandName: 'Pixies', releasedOn: 1989, picture: '/images/albumsImages/Pixies-Doolittle.jpg', 
            lastUpdate: '01 Jan 2004 00:00:00 GMT', likes: 15,
            description: 'Doolittle is the second studio album by the American alternative rock band Pixies, released in April 1989 on 4AD. The album\'s offbeat and dark subject material, featuring references to surrealism, Biblical violence, torture and death, contrasts with the clean production sound achieved by the newly hired producer Gil Norton. Doolittle was the Pixies\' first international release, with Elektra Records as the album\'s distributor in the United States and PolyGram in Canada.',
            songs:["Debaser", "Tame", "Wave of Mutilation", "I Bleed", "Here Comes Your Man", "Dead", "Monkey Gone to Heaven", "Mr. Grieves", "Crackity Jones", "La La Love You", "No. 13 Baby", "There Goes My Gun", "Hey", "Silver", "Gouge Away"]
        },
        {
            id: 8, albumName: 'Nevermind', bandName: 'Nirvana', releasedOn: 1991, picture: '/images/albumsImages/NirvanaNevermindalbumcover.jpg', 
            lastUpdate: '01 Jan 1998 00:00:00 GMT', likes: 26,
            description: 'Nevermind is the second studio album by American rock band Nirvana, released on September 24, 1991, by DGC Records. Produced by Butch Vig, it was Nirvana\'s first release on the DGC and the first to feature drummer Dave Grohl. Characterized by its polished and cleaner sound, the album was a departure from the band\'s rawer debut album Bleach. Nirvana recorded the album at Sound City Studios in Van Nuys, California, and Smart Studios in Madison, Wisconsin in May and June 1991 and it was mastered on the afternoon of August 2 at The Mastering Lab in Hollywood, California.',
            songs: ["Smells Like Teen Spirit", "In Bloom", "Come as You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way", "Endless, Nameless"]
        },
        {
            id: 9, albumName: 'Turn On the Bright Lights', bandName: 'Interpol', releasedOn: 2002, picture: '/images/albumsImages/Interpol_-_Turn_On_The_Bright_Lights.jpg', 
            lastUpdate: '01 Jan 1997 00:00:00 GMT', likes: 33,
            description: 'Turn On the Bright Lights is the debut studio album by American rock band Interpol, released on August 20, 2002.[1] The album was recorded in November 2001 at Tarquin Studios in Connecticut, and was co-produced, mixed and engineered by Peter Katis and Gareth Jones. It was released on August 19, 2002 in the United Kingdom and August 20 in the United States, through independent record label Matador Records.',
            songs: ["Untitled", "Obstacle 1", "NYC", "PDA", "Say Hello to the Angels", "Hands Away", "Obstacle 2", "Stella Was a Diver and She Was Always Down", "Roland", "The New", "Leif Erikson"]
        },
        {
            id: 10, albumName: 'The Libertines', bandName: 'The Libertines', releasedOn: 2004, picture: '/images/albumsImages/Libertines-album.jpg', 
            lastUpdate: '01 Jan 2019 00:00:00 GMT', likes: 12,
            description: 'The Libertines is the second album by English indie rock band The Libertines. Released on 30 August 2004, it is particularly biographical of the relationship between frontmen Carl Barât and Pete Doherty. The album debuted at number one on the UK Albums Chart, selling 72,189 copies in its first week of release.',
            songs: ["Can't Stand Me Now", "Last Post on the Bugle", "Don't Be Shy", "The Man Who Would Be King", "Music When the Lights Go Out", "Narcissist", "The Ha Ha Wall", "Arbeit Macht Frei", "Campaign of Hate", "What Katie Did", "Tomblands", "The Saga", "Road to Ruin", "What Became of the Likely Lads", "France"]
        },
    ]


export default getAlbums;



