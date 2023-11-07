const { Album } = require('../models');

const albumData = [
  {
    "Number": 1,
    "Year": 1967,
    "Album": "Sgt. Pepper's Lonely Hearts Club Band",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Psychedelic Rock"
  },
  {
    "Number": 2,
    "Year": 1966,
    "Album": "Pet Sounds",
    "Artist": "The Beach Boys",
    "Genre": "Rock",
    "Subgenre": "Pop Rock, Psychedelic Rock"
  },
  {
    "Number": 3,
    "Year": 1966,
    "Album": "Revolver",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Pop Rock"
  },
  {
    "Number": 4,
    "Year": 1965,
    "Album": "Highway 61 Revisited",
    "Artist": "Bob Dylan",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Blues Rock"
  },
  {
    "Number": 5,
    "Year": 1965,
    "Album": "Rubber Soul",
    "Artist": "The Beatles",
    "Genre": "Rock, Pop",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 6,
    "Year": 1971,
    "Album": "What's Going On",
    "Artist": "Marvin Gaye",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 7,
    "Year": 1972,
    "Album": "Exile on Main St.",
    "Artist": "The Rolling Stones",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Rock & Roll, Classic Rock"
  },
  {
    "Number": 8,
    "Year": 1979,
    "Album": "London Calling",
    "Artist": "The Clash",
    "Genre": "Rock",
    "Subgenre": "Punk, New Wave"
  },
  {
    "Number": 9,
    "Year": 1966,
    "Album": "Blonde on Blonde",
    "Artist": "Bob Dylan",
    "Genre": "Rock, Blues",
    "Subgenre": "Folk Rock, Rhythm & Blues"
  },
  {
    "Number": 10,
    "Year": 1968,
    "Album": "The Beatles (\"The White Album\")",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Pop Rock, Psychedelic Rock, Experimental"
  },
  {
    "Number": 11,
    "Year": 1976,
    "Album": "The Sun Sessions",
    "Artist": "Elvis Presley",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll"
  },
  {
    "Number": 12,
    "Year": 1959,
    "Album": "Kind of Blue",
    "Artist": "Miles Davis",
    "Genre": "Jazz",
    "Subgenre": "Modal"
  },
  {
    "Number": 13,
    "Year": 1967,
    "Album": "The Velvet Underground & Nico",
    "Artist": "The Velvet Underground",
    "Genre": "Rock",
    "Subgenre": "Garage Rock, Art Rock, Experimental"
  },
  //I will do Number 1-13 and get the cover art per album and put it in public/images . Number formatting will be #.png (# from Number)
  {
    "Number": 14,
    "Year": 1969,
    "Album": "Abbey Road",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Classic Rock, Pop Rock"
  },
  {
    "Number": 15,
    "Year": 1967,
    "Album": "Are You Experienced",
    "Artist": "The Jimi Hendrix Experience",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock, Psychedelic Rock"
  },
  {
    "Number": 16,
    "Year": 1975,
    "Album": "Blood on the Tracks",
    "Artist": "Bob Dylan",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Acoustic, Ballad"
  },
  {
    "Number": 17,
    "Year": 1991,
    "Album": "Nevermind",
    "Artist": "Nirvana",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Grunge"
  },
  {
    "Number": 18,
    "Year": 1975,
    "Album": "Born to Run",
    "Artist": "Bruce Springsteen",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 19,
    "Year": 1968,
    "Album": "Astral Weeks",
    "Artist": "Van Morrison",
    "Genre": "Jazz, Rock, Blues, Folk, World, & Country",
    "Subgenre": "Acoustic, Classic Rock, Free Improvisation"
  },
  {
    "Number": 20,
    "Year": 1982,
    "Album": "Thriller",
    "Artist": "Michael Jackson",
    "Genre": "Funk / Soul, Pop",
    "Subgenre": "Disco"
  },
  {
    "Number": 21,
    "Year": 1982,
    "Album": "The Great Twenty_Eight",
    "Artist": "Chuck Berry",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll"
  },
  {
    "Number": 22,
    "Year": 1990,
    "Album": "The Complete Recordings",
    "Artist": "Robert Johnson",
    "Genre": "Blues",
    "Subgenre": "Delta Blues"
  },
  {
    "Number": 23,
    "Year": 1970,
    "Album": "John Lennon/Plastic Ono Band",
    "Artist": "John Lennon / Plastic Ono Band",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 24,
    "Year": 1973,
    "Album": "Innervisions",
    "Artist": "Stevie Wonder",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 25,
    "Year": 1963,
    "Album": "Live at the Apollo, 1962",
    "Artist": "James Brown",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Soul"
  },
]

const seedAlbum = () => Album.bulkCreate(albumData);

module.exports = seedAlbum;