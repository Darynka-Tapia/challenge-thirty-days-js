class Node {
  constructor(value) {
    // Tu código aquí 👈🏻
    this.value = value;
    this.next = null;
  }
}
class Playlist {
  constructor() {
    // Tu código aquí 👈🏻
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  addSong(song) {
    // Tu código aquí 👈🏻
    
    const newNode = new Node(song);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  playSong() {
    // Tu código aquí 👈🏻
    if (!this.top) {
      throw new Error("No hay canciones en la playlist")
    }

    const currentSong = this.top.value;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return currentSong;
  }

  getPlaylist() {
    // Tu código aquí 👈🏻
    let currentNode = this.top;
    let currentNodeArray = [];
    for (let i = 0; i < this.length; i++) {
        currentNodeArray.push(currentNode.value)
        currentNode = currentNode.next;
    }
    return currentNodeArray;
  }
}


const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

console.log(playlist.getPlaylist());/**/

console.log('1',playlist.playSong());
// Output: "Bohemian Rhapsody"
console.log('2',playlist.playSong());
// Output: "Stairway to Heaven"
console.log('3',playlist.playSong());
// Output: "Hotel California"
//console.log('4',playlist.playSong());