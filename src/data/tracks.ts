export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  image: string;
  audioUrl: string;
  duration: number;
  addedDate: string;
}

// Using free audio samples from various sources
export const sampleTracks: Track[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Sample audio
    duration: 200,
    addedDate: '5 days ago'
  },
  {
    id: '2',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-04.wav', // Sample audio
    duration: 174,
    addedDate: '1 week ago'
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-03.wav', // Sample audio
    duration: 203,
    addedDate: '2 weeks ago'
  },
  {
    id: '4',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-02.wav', // Sample audio
    duration: 178,
    addedDate: '3 weeks ago'
  },
  {
    id: '5',
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'Stay',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-01.wav', // Sample audio
    duration: 141,
    addedDate: '1 month ago'
  },
  {
    id: '6',
    title: 'Anti-Hero',
    artist: 'Taylor Swift',
    album: 'Midnights',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Sample audio
    duration: 200,
    addedDate: '1 month ago'
  },
  {
    id: '7',
    title: 'As It Was',
    artist: 'Harry Styles',
    album: 'Harry\'s House',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-04.wav', // Sample audio
    duration: 167,
    addedDate: '2 months ago'
  }
];