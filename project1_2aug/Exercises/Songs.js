"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
var Song = /** @class */ (function () {
    function Song(title, singer) {
        this.title = title;
        this.singer = singer;
    }
    Song.prototype.print = function () {
        console.log('Song: ' + this.title + ', Singer: ' + this.singer);
    };
    return Song;
}());
exports.Song = Song;
var Jukebox = /** @class */ (function () {
    function Jukebox(songs) {
        this.songs = songs;
    }
    Jukebox.prototype.song = function () {
        var i = Math.floor(Math.random() * this.songs.length);
        var randomSong = this.songs[i];
        randomSong.print();
    };
    return Jukebox;
}());
var songs = [
    new Song('s1', 'ss1'),
    new Song('s2', 'ss2'),
    new Song('s3', 'ss3'),
    new Song('s4', 'ss4')
];
var jukebox = new Jukebox(songs);
jukebox.song();
