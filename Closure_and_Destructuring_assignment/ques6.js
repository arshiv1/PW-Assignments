function createPlaylist(playlistName){
    let playlist = [];

    return {
        addSong : function(song, artist){
            playlist.push({song, artist});
        },
        listSongs : function(){
            playlist.forEach((track, index)=>{
                console.log(`${index+1}. "${track.song}" by ${track.artist}`);
            });
        }
    };
}

function addSong(playlist, song, artist){
    playlist.addSong(song, artist);
}

function listSongs(playlist){
    playlist.listSongs();
}

const myPlaylist = createPlaylist("My Favorite songs");


addSong(myPlaylist, "Arijit bhai", "sajni");
addSong(myPlaylist, "hymns", "matthew");
addSong(myPlaylist, "Shreya didi", "Radhe");

listSongs(myPlaylist);