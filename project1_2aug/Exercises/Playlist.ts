import { Song } from './Songs';

class Playlist {
    static maxSongs: number = 20;
    private songs: Song[] = [];

    constructor(public playlistName: string) {
    }

    public addSong(song: Song) {
        if (this.songs.length >= Playlist.maxSongs) {
            throw new Error('Too many songs');
        }
        this.songs.push(song);
    }
}

var myPlaylist = new Playlist('Playlist');
var playlistName = myPlaylist.playlistName;
var maxSongs = Playlist.maxSongs;

const songs2: Song[] = [
    new Song('s5', 'ss1'),
    new Song('s6', 'ss2'),
    new Song('s7', 'ss3'),
    new Song('s8', 'ss4')
];

songs2.forEach(song => {
    myPlaylist.addSong(song);
});

console.log(playlistName);
console.log('Playlist length: ', myPlaylist['songs'].length);
