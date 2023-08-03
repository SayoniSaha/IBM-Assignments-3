"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Songs_1 = require("./Songs");
var Playlist = /** @class */ (function () {
    function Playlist(playlistName) {
        this.playlistName = playlistName;
        this.songs = [];
    }
    Playlist.prototype.addSong = function (song) {
        if (this.songs.length >= Playlist.maxSongs) {
            throw new Error('Too many songs');
        }
        this.songs.push(song);
    };
    Playlist.maxSongs = 20;
    return Playlist;
}());
var myPlaylist = new Playlist('Playlist');
var playlistName = myPlaylist.playlistName;
var maxSongs = Playlist.maxSongs;
var songs2 = [
    new Songs_1.Song('s5', 'ss1'),
    new Songs_1.Song('s6', 'ss2'),
    new Songs_1.Song('s7', 'ss3'),
    new Songs_1.Song('s8', 'ss4')
];
songs2.forEach(function (song) {
    myPlaylist.addSong(song);
});
console.log(playlistName);
console.log('Playlist length: ', myPlaylist['songs'].length);
