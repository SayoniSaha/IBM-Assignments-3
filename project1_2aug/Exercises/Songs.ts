export class Song {
    private title: string;
    private singer: string;

    constructor(title: string, singer: string) {
        this.title = title;
        this.singer = singer;
    }

    public print() {
        console.log('Song: ' + this.title + ', Singer: ' + this.singer);
    }
}

class Jukebox {
    private songs: Song[];

    constructor(songs: Song[]) {
        this.songs = songs;
    }

    public song() {
        const i= Math.floor(Math.random() * this.songs.length);
        const randomSong = this.songs[i];
        randomSong.print();
    }
}

const songs: Song[] = [
    new Song('s1', 'ss1'),
    new Song('s2', 'ss2'),
    new Song('s3', 'ss3'),
    new Song('s4', 'ss4')
];

const jukebox = new Jukebox(songs);

jukebox.song();
