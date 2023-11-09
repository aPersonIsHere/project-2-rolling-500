// Album seeds

const { Album } = require('../models');

const albumData = [
  {
    "Number": 1,
    "Year": 1967,
    "Album": "Sgt. Pepper's Lonely Hearts Club Band",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Psychedelic Rock",
    "album_art": "/images/1.png"
  },
  {
    "Number": 2,
    "Year": 1966,
    "Album": "Pet Sounds",
    "Artist": "The Beach Boys",
    "Genre": "Rock",
    "Subgenre": "Pop Rock, Psychedelic Rock",
    "album_art": "/images/2.png"
  },
  {
    "Number": 3,
    "Year": 1966,
    "Album": "Revolver",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Pop Rock",
    "album_art": "/images/3.png"
  },
  {
    "Number": 4,
    "Year": 1965,
    "Album": "Highway 61 Revisited",
    "Artist": "Bob Dylan",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Blues Rock",
    "album_art": "/images/4.png"
  },
  {
    "Number": 5,
    "Year": 1965,
    "Album": "Rubber Soul",
    "Artist": "The Beatles",
    "Genre": "Rock, Pop",
    "Subgenre": "Pop Rock",
    "album_art": "/images/5.png"
  },
  {
    "Number": 6,
    "Year": 1971,
    "Album": "What's Going On",
    "Artist": "Marvin Gaye",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul",
    "album_art": "/images/6.png"
  },
  {
    "Number": 7,
    "Year": 1972,
    "Album": "Exile on Main St.",
    "Artist": "The Rolling Stones",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Rock & Roll, Classic Rock",
    "album_art": "/images/7.png"
  },
  {
    "Number": 8,
    "Year": 1979,
    "Album": "London Calling",
    "Artist": "The Clash",
    "Genre": "Rock",
    "Subgenre": "Punk, New Wave",
    "album_art": "/images/8.png"
  },
  {
    "Number": 9,
    "Year": 1966,
    "Album": "Blonde on Blonde",
    "Artist": "Bob Dylan",
    "Genre": "Rock, Blues",
    "Subgenre": "Folk Rock, Rhythm & Blues",
    "album_art": "/images/9.png"
  },
  {
    "Number": 10,
    "Year": 1968,
    "Album": "The Beatles (\"The White Album\")",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Pop Rock, Psychedelic Rock, Experimental",
    "album_art": "/images/10.png"
  },
  {
    "Number": 11,
    "Year": 1976,
    "Album": "The Sun Sessions",
    "Artist": "Elvis Presley",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll",
    "album_art": "/images/11.png"
  },
  {
    "Number": 12,
    "Year": 1959,
    "Album": "Kind of Blue",
    "Artist": "Miles Davis",
    "Genre": "Jazz",
    "Subgenre": "Modal",
    "album_art": "/images/12.png"
  },
  {
    "Number": 13,
    "Year": 1967,
    "Album": "The Velvet Underground & Nico",
    "Artist": "The Velvet Underground",
    "Genre": "Rock",
    "Subgenre": "Garage Rock, Art Rock, Experimental",
    "album_art": "/images/13.png"
  },
  {
    "Number": 14,
    "Year": 1969,
    "Album": "Abbey Road",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Classic Rock, Pop Rock",
    "album_art": "/images/14.png"
  },
  {
    "Number": 15,
    "Year": 1967,
    "Album": "Are You Experienced",
    "Artist": "The Jimi Hendrix Experience",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock, Psychedelic Rock",
    "album_art": "/images/15.png"
  },
  {
    "Number": 16,
    "Year": 1975,
    "Album": "Blood on the Tracks",
    "Artist": "Bob Dylan",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Acoustic, Ballad",
    "album_art": "/images/16.png"
  },
  {
    "Number": 17,
    "Year": 1991,
    "Album": "Nevermind",
    "Artist": "Nirvana",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Grunge",
    "album_art": "/images/17.png"
  },
  {
    "Number": 18,
    "Year": 1975,
    "Album": "Born to Run",
    "Artist": "Bruce Springsteen",
    "Genre": "Rock",
    "Subgenre": "Pop Rock",
    "album_art": "/images/18.png"
  },
  {
    "Number": 19,
    "Year": 1968,
    "Album": "Astral Weeks",
    "Artist": "Van Morrison",
    "Genre": "Jazz, Rock, Blues, Folk, World, & Country",
    "Subgenre": "Acoustic, Classic Rock, Free Improvisation",
    "album_art": "/images/19.png"
  },
  {
    "Number": 20,
    "Year": 1982,
    "Album": "Thriller",
    "Artist": "Michael Jackson",
    "Genre": "Funk / Soul, Pop",
    "Subgenre": "Disco",
    "album_art": "/images/20.png"
  },
  {
    "Number": 21,
    "Year": 1982,
    "Album": "The Great Twenty_Eight",
    "Artist": "Chuck Berry",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll",
    "album_art": "/images/21.png"
  },
  {
    "Number": 22,
    "Year": 1990,
    "Album": "The Complete Recordings",
    "Artist": "Robert Johnson",
    "Genre": "Blues",
    "Subgenre": "Delta Blues",
    "album_art": "/images/22.png"
  },
  {
    "Number": 23,
    "Year": 1970,
    "Album": "John Lennon/Plastic Ono Band",
    "Artist": "John Lennon / Plastic Ono Band",
    "Genre": "Rock",
    "Subgenre": "Pop Rock",
    "album_art": "/images/23.png"
  },
  {
    "Number": 24,
    "Year": 1973,
    "Album": "Innervisions",
    "Artist": "Stevie Wonder",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul",
    "album_art": "/images/24.png"
  },
  {
    "Number": 25,
    "Year": 1963,
    "Album": "Live at the Apollo, 1962",
    "Artist": "James Brown",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Soul",
    "album_art": "/images/25.png"
  },
]

const seedAlbum = () => Album.bulkCreate(albumData);

module.exports = seedAlbum;