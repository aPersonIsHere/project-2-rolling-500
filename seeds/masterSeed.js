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
  {
    "Number": 26,
    "Year": 1977,
    "Album": "Rumours",
    "Artist": "Fleetwood Mac",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 27,
    "Year": 1987,
    "Album": "The Joshua Tree",
    "Artist": "U2",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Pop Rock"
  },
  {
    "Number": 28,
    "Year": 1971,
    "Album": "Who's Next",
    "Artist": "The Who",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Mod, Prog Rock, Psychedelic Rock"
  },
  {
    "Number": 29,
    "Year": 1969,
    "Album": "Led Zeppelin",
    "Artist": "Led Zeppelin",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Hard Rock"
  },
  {
    "Number": 30,
    "Year": 1971,
    "Album": "Blue",
    "Artist": "Joni Mitchell",
    "Genre": "Pop",
    "Subgenre": "Acoustic, Ballad, Folk"
  },
  {
    "Number": 31,
    "Year": 1965,
    "Album": "Bringing It All Back Home",
    "Artist": "Bob Dylan",
    "Genre": "Rock, Folk, World, & Country",
    "Subgenre": "Folk Rock, Folk"
  },
  {
    "Number": 32,
    "Year": 1969,
    "Album": "Let It Bleed",
    "Artist": "The Rolling Stones",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Hard Rock"
  },
  {
    "Number": 33,
    "Year": 1976,
    "Album": "Ramones",
    "Artist": "Ramones",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Punk"
  },
  {
    "Number": 34,
    "Year": 1968,
    "Album": "Music From Big Pink",
    "Artist": "The Band",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Acoustic, Blues Rock"
  },
  {
    "Number": 35,
    "Year": 1972,
    "Album": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
    "Artist": "David Bowie",
    "Genre": "Rock",
    "Subgenre": "Classic Rock, Glam"
  },
  {
    "Number": 36,
    "Year": 1971,
    "Album": "Tapestry",
    "Artist": "Carole King",
    "Genre": "Rock, Pop",
    "Subgenre": "Folk Rock, Soft Rock"
  },
  {
    "Number": 37,
    "Year": 1976,
    "Album": "Hotel California",
    "Artist": "Eagles",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 38,
    "Year": 2001,
    "Album": "The Anthology",
    "Artist": "Muddy Waters",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Folk"
  },
  {
    "Number": 39,
    "Year": 1963,
    "Album": "Please Please Me",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Beat, Rock & Roll"
  },
  {
    "Number": 40,
    "Year": 1967,
    "Album": "Forever Changes",
    "Artist": "Love",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Psychedelic Rock"
  },
  {
    "Number": 41,
    "Year": 1977,
    "Album": "Never Mind the Bollocks Here's the Sex Pistols",
    "Artist": "Sex Pistols",
    "Genre": "Rock",
    "Subgenre": "Punk"
  },
  {
    "Number": 42,
    "Year": 1967,
    "Album": "The Doors",
    "Artist": "The Doors",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock"
  },
  {
    "Number": 43,
    "Year": 1973,
    "Album": "The Dark Side of the Moon",
    "Artist": "Pink Floyd",
    "Genre": "Rock",
    "Subgenre": "Prog Rock"
  },
  {
    "Number": 44,
    "Year": 1975,
    "Album": "Horses",
    "Artist": "Patti Smith",
    "Genre": "Rock",
    "Subgenre": "Art Rock"
  },
  {
    "Number": 45,
    "Year": 1969,
    "Album": "The Band (\"The Brown Album\")",
    "Artist": "The Band",
    "Genre": "Classical, Stage & Screen",
    "Subgenre": "Soundtrack, Modern Classical, Contemporary, Score"
  },
  {
    "Number": 46,
    "Year": 1984,
    "Album": "Legend: The Best of Bob Marley and The Wailers",
    "Artist": "Bob Marley & The Wailers",
    "Genre": "Reggae",
    "Subgenre": "Reggae, Roots Reggae"
  },
  {
    "Number": 47,
    "Year": 1965,
    "Album": "A Love Supreme",
    "Artist": "John Coltrane",
    "Genre": "Jazz",
    "Subgenre": "Free Jazz, Hard Bop, Modal"
  },
  {
    "Number": 48,
    "Year": 1988,
    "Album": "It Takes a Nation of Millions to Hold Us Back",
    "Artist": "Public Enemy",
    "Genre": "Hip Hop",
    "Subgenre": "Conscious"
  },
  {
    "Number": 49,
    "Year": 1971,
    "Album": "At Fillmore East",
    "Artist": "The Allman Brothers Band",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock"
  },
  {
    "Number": 50,
    "Year": 1957,
    "Album": "Here's Little Richard",
    "Artist": "Little Richard",
    "Genre": "Rock, Blues",
    "Subgenre": "Rock & Roll, Rhythm & Blues"
  },
  {
    "Number": 51,
    "Year": 1970,
    "Album": "Bridge Over Troubled Water",
    "Artist": "Simon & Garfunkel",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Classic Rock"
  },
  {
    "Number": 52,
    "Year": 1975,
    "Album": "Greatest Hits",
    "Artist": "Al Green",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 53,
    "Year": 1964,
    "Album": "Meet The Beatles!",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Beat, Rock & Roll"
  },
  {
    "Number": 54,
    "Year": 1991,
    "Album": "The Birth of Soul",
    "Artist": "Ray Charles",
    "Genre": "Jazz, Funk / Soul",
    "Subgenre": "Rhythm & Blues, Big Band, Soul, Soul-Jazz"
  },
  {
    "Number": 55,
    "Year": 1968,
    "Album": "Electric Ladyland",
    "Artist": "The Jimi Hendrix Experience",
    "Genre": "Rock, Blues",
    "Subgenre": "Electric Blues, Psychedelic Rock"
  },
  {
    "Number": 56,
    "Year": 1956,
    "Album": "Elvis Presley",
    "Artist": "Elvis Presley",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Rockabilly"
  },
  {
    "Number": 57,
    "Year": 1976,
    "Album": "Songs in the Key of Life",
    "Artist": "Stevie Wonder",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul, Disco"
  },
  {
    "Number": 58,
    "Year": 1968,
    "Album": "Beggars Banquet",
    "Artist": "The Rolling Stones",
    "Genre": "Rock, Funk / Soul, Pop",
    "Subgenre": "Blues Rock, Southern Rock, Classic Rock"
  },
  {
    "Number": 59,
    "Year": 1976,
    "Album": "Chronicle: The 20 Greatest Hits",
    "Artist": "Creedence Clearwater Revival",
    "Genre": "Rock",
    "Subgenre": "None"
  },
  {
    "Number": 60,
    "Year": 1969,
    "Album": "Trout Mask Replica",
    "Artist": "Captain Beefheart & His Magic Band",
    "Genre": "Rock, Blues",
    "Subgenre": "Dialogue, Field Recording, Avantgarde, Electric Blues, Psychedelic Rock, Experimental"
  },
  {
    "Number": 61,
    "Year": 1970,
    "Album": "Greatest Hits",
    "Artist": "Sly & The Family Stone",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Funk"
  },
  {
    "Number": 62,
    "Year": 1987,
    "Album": "Appetite for Destruction",
    "Artist": "Guns N' Roses",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Heavy Metal"
  },
  {
    "Number": 63,
    "Year": 1991,
    "Album": "Achtung Baby",
    "Artist": "U2",
    "Genre": "Electronic, Rock",
    "Subgenre": "Pop Rock, Synth-pop, Alternative Rock, Arena Rock"
  },
  {
    "Number": 64,
    "Year": 1971,
    "Album": "Sticky Fingers",
    "Artist": "The Rolling Stones",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 65,
    "Year": 1991,
    "Album": "Back to Mono (1958-1969)",
    "Artist": "Phil Spector",
    "Genre": "Rock, Funk / Soul, Pop",
    "Subgenre": "Doo Wop, Pop Rock, Ballad, Rhythm & Blues"
  },
  {
    "Number": 66,
    "Year": 1970,
    "Album": "Moondance",
    "Artist": "Van Morrison",
    "Genre": "Jazz, Rock, Funk / Soul, Folk, World, & Country",
    "Subgenre": "Folk Rock, Rhythm & Blues, Classic Rock, Contemporary Jazz"
  },
  {
    "Number": 67,
    "Year": 2000,
    "Album": "Kid A",
    "Artist": "Radiohead",
    "Genre": "Electronic, Rock",
    "Subgenre": "Alternative Rock, IDM, Experimental"
  },
  {
    "Number": 68,
    "Year": 1979,
    "Album": "Off the Wall",
    "Artist": "Michael Jackson",
    "Genre": "Funk / Soul, Pop",
    "Subgenre": "Disco, Soul, Ballad"
  },
  {
    "Number": 69,
    "Year": 1971,
    "Album": "[Led Zeppelin IV]",
    "Artist": "Led Zeppelin",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Classic Rock, Blues Rock"
  },
  {
    "Number": 70,
    "Year": 1977,
    "Album": "The Stranger",
    "Artist": "Billy Joel",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 71,
    "Year": 1986,
    "Album": "Graceland",
    "Artist": "Paul Simon",
    "Genre": "Jazz, Rock, Funk / Soul, Pop, Folk, World, & Country",
    "Subgenre": "Folk Rock, Pop Rock, African, Afrobeat, Zydeco, Funk, Rhythm & Blues"
  },
  {
    "Number": 72,
    "Year": 1972,
    "Album": "Superfly",
    "Artist": "Curtis Mayfield",
    "Genre": "Funk / Soul, Stage & Screen",
    "Subgenre": "Soundtrack, Soul"
  },
  {
    "Number": 73,
    "Year": 1975,
    "Album": "Physical Graffiti",
    "Artist": "Led Zeppelin",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 74,
    "Year": 1970,
    "Album": "After the Gold Rush",
    "Artist": "Neil Young",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Country Rock"
  },
  {
    "Number": 75,
    "Year": 1991,
    "Album": "Star Time",
    "Artist": "James Brown",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul, Funk, Disco"
  },
  {
    "Number": 76,
    "Year": 1984,
    "Album": "Purple Rain",
    "Artist": "Prince and the Revolution",
    "Genre": "Electronic, Rock, Funk / Soul, Stage & Screen",
    "Subgenre": "Pop Rock, Funk, Soundtrack, Synth-pop"
  },
  {
    "Number": 77,
    "Year": 1980,
    "Album": "Back in Black",
    "Artist": "AC/DC",
    "Genre": "Rock",
    "Subgenre": "Hard Rock"
  },
  {
    "Number": 78,
    "Year": 1965,
    "Album": "Otis Blue: Otis Redding Sings Soul",
    "Artist": "Otis Redding",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 79,
    "Year": 1969,
    "Album": "Led Zeppelin II",
    "Artist": "Led Zeppelin",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Classic Rock, Hard Rock"
  },
  {
    "Number": 80,
    "Year": 1971,
    "Album": "Imagine",
    "Artist": "John Lennon",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 81,
    "Year": 1977,
    "Album": "The Clash",
    "Artist": "The Clash",
    "Genre": "Rock",
    "Subgenre": "Punk"
  },
  {
    "Number": 82,
    "Year": 1972,
    "Album": "Harvest",
    "Artist": "Neil Young",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Country Rock, Classic Rock"
  },
  {
    "Number": 83,
    "Year": 1967,
    "Album": "Axis: Bold as Love",
    "Artist": "The Jimi Hendrix Experience",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Electric Blues"
  },
  {
    "Number": 84,
    "Year": 1967,
    "Album": "I Never Loved a Man the Way I Love You",
    "Artist": "Aretha Franklin",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 85,
    "Year": 1968,
    "Album": "Lady Soul",
    "Artist": "Aretha Franklin",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 86,
    "Year": 1984,
    "Album": "Born in the U.S.A.",
    "Artist": "Bruce Springsteen",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 87,
    "Year": 1979,
    "Album": "The Wall",
    "Artist": "Pink Floyd",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Prog Rock"
  },
  {
    "Number": 88,
    "Year": 1968,
    "Album": "At Folsom Prison",
    "Artist": "Johnny Cash",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Country"
  },
  {
    "Number": 89,
    "Year": 1969,
    "Album": "Dusty in Memphis",
    "Artist": "Dusty Springfield",
    "Genre": "Rock, Funk / Soul",
    "Subgenre": "Pop Rock, Soul"
  },
  {
    "Number": 90,
    "Year": 1972,
    "Album": "Talking Book",
    "Artist": "Stevie Wonder",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul, Funk"
  },
  {
    "Number": 91,
    "Year": 1973,
    "Album": "Goodbye Yellow Brick Road",
    "Artist": "Elton John",
    "Genre": "Rock",
    "Subgenre": "Pop Rock, Classic Rock"
  },
  {
    "Number": 92,
    "Year": 1978,
    "Album": "20 Golden Greats",
    "Artist": "Buddy Holly",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll"
  },
  {
    "Number": 93,
    "Year": 1987,
    "Album": "Sign \"Peace\" the Times",
    "Artist": "Prince",
    "Genre": "Rock, Reggae",
    "Subgenre": "Ska, Reggae-Pop"
  },
  {
    "Number": 94,
    "Year": 1984,
    "Album": "40 Greatest Hits",
    "Artist": "Hank Williams",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Country"
  },
  {
    "Number": 95,
    "Year": 1970,
    "Album": "Bitches Brew",
    "Artist": "Miles Davis",
    "Genre": "Jazz",
    "Subgenre": "Fusion"
  },
  {
    "Number": 96,
    "Year": 1969,
    "Album": "Tommy",
    "Artist": "The Who",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock"
  },
  {
    "Number": 97,
    "Year": 1963,
    "Album": "The Freewheelin' Bob Dylan",
    "Artist": "Bob Dylan",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Folk"
  },
  {
    "Number": 98,
    "Year": 1978,
    "Album": "This Year's Model",
    "Artist": "Elvis Costello",
    "Genre": "Rock",
    "Subgenre": "New Wave"
  },
  {
    "Number": 99,
    "Year": 1971,
    "Album": "There's a Riot Goin' On",
    "Artist": "Sly & The Family Stone",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Funk"
  },
  {
    "Number": 100,
    "Year": 1968,
    "Album": "Odessey and Oracle",
    "Artist": "The Zombies",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock"
  },
  {
    "Number": 101,
    "Year": 1955,
    "Album": "In the Wee Small Hours",
    "Artist": "Frank Sinatra",
    "Genre": "Jazz, Pop",
    "Subgenre": "Big Band, Ballad"
  },
  {
    "Number": 102,
    "Year": 1966,
    "Album": "Fresh Cream",
    "Artist": "Cream",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock, Electric Blues"
  },
  {
    "Number": 103,
    "Year": 1959,
    "Album": "Giant Steps",
    "Artist": "John Coltrane",
    "Genre": "Jazz",
    "Subgenre": "Hard Bop"
  },
  {
    "Number": 104,
    "Year": 1970,
    "Album": "Sweet Baby James",
    "Artist": "James Taylor",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Acoustic, Soft Rock"
  },
  {
    "Number": 105,
    "Year": 1962,
    "Album": "Modern Sounds in Country and Western Music",
    "Artist": "Ray Charles",
    "Genre": "Funk / Soul, Folk, World, & Country",
    "Subgenre": "Country, Rhythm & Blues"
  },
  {
    "Number": 106,
    "Year": 1977,
    "Album": "Rocket to Russia",
    "Artist": "Ramones",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Punk"
  },
  {
    "Number": 107,
    "Year": 2003,
    "Album": "Portrait of a Legend 1951-1964",
    "Artist": "Sam Cooke",
    "Genre": "Latin, Funk / Soul",
    "Subgenre": "Soul, Rhythm & Blues, Gospel, Cha-Cha"
  },
  {
    "Number": 108,
    "Year": 1971,
    "Album": "Hunky Dory",
    "Artist": "David Bowie",
    "Genre": "Rock",
    "Subgenre": "Classic Rock, Glam"
  },
  {
    "Number": 109,
    "Year": 1966,
    "Album": "Aftermath",
    "Artist": "The Rolling Stones",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Pop Rock"
  },
  {
    "Number": 110,
    "Year": 1970,
    "Album": "Loaded",
    "Artist": "The Velvet Underground",
    "Genre": "Rock",
    "Subgenre": "Art Rock, Classic Rock"
  },
  {
    "Number": 111,
    "Year": 1995,
    "Album": "The Bends",
    "Artist": "Radiohead",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 112,
    "Year": 1966,
    "Album": "If You Can Believe Your Eyes and Ears",
    "Artist": "The Mamas and the Papas",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Pop Rock"
  },
  {
    "Number": 113,
    "Year": 1974,
    "Album": "Court and Spark",
    "Artist": "Joni Mitchell",
    "Genre": "Rock",
    "Subgenre": "Soft Rock, Pop Rock"
  },
  {
    "Number": 114,
    "Year": 1967,
    "Album": "Disraeli Gears",
    "Artist": "Cream",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Blues Rock"
  },
  {
    "Number": 115,
    "Year": 1967,
    "Album": "The Who Sell Out",
    "Artist": "The Who",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Mod"
  },
  {
    "Number": 116,
    "Year": 1965,
    "Album": "Out of Our Heads",
    "Artist": "The Rolling Stones",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Rock & Roll"
  },
  {
    "Number": 117,
    "Year": 1970,
    "Album": "Layla and Other Assorted Love Songs",
    "Artist": "Derek and the Dominos",
    "Genre": "Rock",
    "Subgenre": "Blues Rock"
  },
  {
    "Number": 118,
    "Year": 2005,
    "Album": "Late Registration",
    "Artist": "Kanye West",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 119,
    "Year": 1960,
    "Album": "At Last!",
    "Artist": "Etta James",
    "Genre": "Funk / Soul, Blues",
    "Subgenre": "Rhythm & Blues, Soul"
  },
  {
    "Number": 120,
    "Year": 1968,
    "Album": "Sweetheart of the Rodeo",
    "Artist": "The Byrds",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Country Rock"
  },
  {
    "Number": 121,
    "Year": 1969,
    "Album": "Stand!",
    "Artist": "Sly & The Family Stone",
    "Genre": "Funk / Soul",
    "Subgenre": "Funk, Psychedelic, Disco"
  },
  {
    "Number": 122,
    "Year": 1972,
    "Album": "The Harder They Come",
    "Artist": "Various Artists",
    "Genre": "Reggae,�Pop,�Folk, World, & Country,�Stage & Screen",
    "Subgenre": "Reggae,�Roots Reggae,�Rocksteady,�Contemporary,�Soundtrack"
  },
  {
    "Number": 123,
    "Year": 1986,
    "Album": "Raising Hell",
    "Artist": "Run D.M.C.",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 124,
    "Year": 1967,
    "Album": "Moby Grape",
    "Artist": "Moby Grape",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Psychedelic Rock"
  },
  {
    "Number": 125,
    "Year": 1971,
    "Album": "Pearl",
    "Artist": "Janis Joplin",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock"
  },
  {
    "Number": 126,
    "Year": 1973,
    "Album": "Catch a Fire",
    "Artist": "The Wailers",
    "Genre": "Reggae",
    "Subgenre": "Roots Reggae"
  },
  {
    "Number": 127,
    "Year": 1967,
    "Album": "Younger Than Yesterday",
    "Artist": "The Byrds",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Psychedelic Rock"
  },
  {
    "Number": 128,
    "Year": 1973,
    "Album": "Raw Power",
    "Artist": "Iggy and The Stooges",
    "Genre": "Rock",
    "Subgenre": "Garage Rock, Hard Rock, Punk"
  },
  {
    "Number": 129,
    "Year": 1980,
    "Album": "Remain in Light",
    "Artist": "Talking Heads",
    "Genre": "Electronic, Rock",
    "Subgenre": "New Wave, Art Rock, Funk"
  },
  {
    "Number": 130,
    "Year": 1977,
    "Album": "Marquee Moon",
    "Artist": "Television",
    "Genre": "Rock",
    "Subgenre": "New Wave, Punk"
  },
  {
    "Number": 131,
    "Year": 1970,
    "Album": "Paranoid",
    "Artist": "Black Sabbath",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Heavy Metal"
  },
  {
    "Number": 132,
    "Year": 1977,
    "Album": "Saturday Night Fever: The Original Movie Sound Track",
    "Artist": "Various Artists",
    "Genre": "Electronic,�Stage & Screen",
    "Subgenre": "Soundtrack,�Disco"
  },
  {
    "Number": 133,
    "Year": 1973,
    "Album": "The Wild, the Innocent & the E Street Shuffle",
    "Artist": "Bruce Springsteen",
    "Genre": "Rock",
    "Subgenre": "None"
  },
  {
    "Number": 134,
    "Year": 1994,
    "Album": "Ready to Die",
    "Artist": "The Notorious B.I.G.",
    "Genre": "Hip Hop",
    "Subgenre": "Thug Rap"
  },
  {
    "Number": 135,
    "Year": 1992,
    "Album": "Slanted and Enchanted",
    "Artist": "Pavement",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 136,
    "Year": 1974,
    "Album": "Greatest Hits",
    "Artist": "Elton John",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 137,
    "Year": 1985,
    "Album": "Tim",
    "Artist": "The Replacements",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 138,
    "Year": 1992,
    "Album": "The Chronic",
    "Artist": "Dr. Dre",
    "Genre": "Hip Hop",
    "Subgenre": "Gangsta"
  },
  {
    "Number": 139,
    "Year": 1974,
    "Album": "Rejuvenation",
    "Artist": "The Meters",
    "Genre": "Funk / Soul",
    "Subgenre": "Bayou Funk, Soul"
  },
  {
    "Number": 140,
    "Year": 1978,
    "Album": "Parallel Lines",
    "Artist": "Blondie",
    "Genre": "Electronic, Rock",
    "Subgenre": "New Wave, Pop Rock, Punk, Disco"
  },
  {
    "Number": 141,
    "Year": 1965,
    "Album": "Live at the Regal",
    "Artist": "B.B. King",
    "Genre": "Blues",
    "Subgenre": "Chicago Blues"
  },
  {
    "Number": 142,
    "Year": 1963,
    "Album": "A Christmas Gift for You From Phil Spector",
    "Artist": "Phil Spector",
    "Genre": "Rock, Funk / Soul, Pop",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 143,
    "Year": 1968,
    "Album": "Gris-Gris",
    "Artist": "Dr. John, the Night Tripper",
    "Genre": "Jazz, Rock, Funk / Soul, Blues",
    "Subgenre": "Soul-Jazz, Louisiana Blues, Fusion, Bayou Funk"
  },
  {
    "Number": 144,
    "Year": 1988,
    "Album": "Straight Outta Compton",
    "Artist": "N.W.A",
    "Genre": "Hip Hop",
    "Subgenre": "Gangsta"
  },
  {
    "Number": 145,
    "Year": 1977,
    "Album": "Aja",
    "Artist": "Steely Dan",
    "Genre": "Jazz, Rock",
    "Subgenre": "Jazz-Rock, Classic Rock"
  },
  {
    "Number": 146,
    "Year": 1967,
    "Album": "Surrealistic Pillow",
    "Artist": "Jefferson Airplane",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Psychedelic Rock"
  },
  {
    "Number": 147,
    "Year": 1970,
    "Album": "Deja vu",
    "Artist": "Crosby, Stills, Nash & Young",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 148,
    "Year": 1973,
    "Album": "Houses of the Holy",
    "Artist": "Led Zeppelin",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 149,
    "Year": 1969,
    "Album": "Santana",
    "Artist": "Santana",
    "Genre": "Rock, Latin, Funk / Soul",
    "Subgenre": "Afro-Cuban, Psychedelic Rock"
  },
  {
    "Number": 150,
    "Year": 1978,
    "Album": "Darkness on the Edge of Town",
    "Artist": "Bruce Springsteen",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 151,
    "Year": 2004,
    "Album": "Funeral",
    "Artist": "Arcade Fire",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 152,
    "Year": 1979,
    "Album": "The B 52's / Play Loud",
    "Artist": "The B 52's",
    "Genre": "Electronic, Rock, Pop",
    "Subgenre": "New Wave, Punk, Mod"
  },
  {
    "Number": 153,
    "Year": 1991,
    "Album": "The Low End Theory",
    "Artist": "A Tribe Called Quest",
    "Genre": "Hip Hop",
    "Subgenre": "Conscious"
  },
  {
    "Number": 154,
    "Year": 1958,
    "Album": "Moanin' in the Moonlight",
    "Artist": "Howlin' Wolf",
    "Genre": "Blues",
    "Subgenre": "Chicago Blues"
  },
  {
    "Number": 155,
    "Year": 1980,
    "Album": "Pretenders",
    "Artist": "Pretenders",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, New Wave"
  },
  {
    "Number": 156,
    "Year": 1989,
    "Album": "Paul's Boutique",
    "Artist": "Beastie Boys",
    "Genre": "Hip Hop, Rock, Funk / Soul",
    "Subgenre": "Alternative Rock, Pop Rap, Psychedelic"
  },
  {
    "Number": 157,
    "Year": 1980,
    "Album": "Closer",
    "Artist": "Joy Division",
    "Genre": "Rock",
    "Subgenre": "Post-Punk, New Wave"
  },
  {
    "Number": 158,
    "Year": 1975,
    "Album": "Captain Fantastic and the Brown Dirt Cowboy",
    "Artist": "Elton John",
    "Genre": "Rock",
    "Subgenre": "Pop Rock, Classic Rock"
  },
  {
    "Number": 159,
    "Year": 1975,
    "Album": "Alive!",
    "Artist": "KISS",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Glam"
  },
  {
    "Number": 160,
    "Year": 1971,
    "Album": "Electric Warrior",
    "Artist": "T. Rex",
    "Genre": "Rock",
    "Subgenre": "Glam, Classic Rock"
  },
  {
    "Number": 161,
    "Year": 1968,
    "Album": "The Dock of the Bay",
    "Artist": "Otis Redding",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Soul"
  },
  {
    "Number": 162,
    "Year": 1997,
    "Album": "OK Computer",
    "Artist": "Radiohead",
    "Genre": "Electronic, Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 163,
    "Year": 1982,
    "Album": 1999,
    "Artist": "Prince",
    "Genre": "Funk / Soul, Pop",
    "Subgenre": "None"
  },
  {
    "Number": 164,
    "Year": 2002,
    "Album": "The Very Best of Linda Ronstadt",
    "Artist": "Linda Ronstadt",
    "Genre": "Rock, Pop",
    "Subgenre": "Soft Rock, Pop Rock"
  },
  {
    "Number": 165,
    "Year": 1973,
    "Album": "Let's Get It On",
    "Artist": "Marvin Gaye",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 166,
    "Year": 1982,
    "Album": "Imperial Bedroom",
    "Artist": "Elvis Costello & The Attractions",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, New Wave"
  },
  {
    "Number": 167,
    "Year": 1986,
    "Album": "Master of Puppets",
    "Artist": "Metallica",
    "Genre": "Rock",
    "Subgenre": "Thrash, Speed Metal"
  },
  {
    "Number": 168,
    "Year": 1977,
    "Album": "My Aim Is True",
    "Artist": "Elvis Costello",
    "Genre": "Rock",
    "Subgenre": "New Wave, Pop Rock"
  },
  {
    "Number": 169,
    "Year": 1977,
    "Album": "Exodus",
    "Artist": "Bob Marley & The Wailers",
    "Genre": "Reggae",
    "Subgenre": "Reggae, Roots Reggae"
  },
  {
    "Number": 170,
    "Year": 1970,
    "Album": "Live at Leeds",
    "Artist": "The Who",
    "Genre": "Rock",
    "Subgenre": "Classic Rock, Blues Rock, Hard Rock"
  },
  {
    "Number": 171,
    "Year": 1968,
    "Album": "The Notorious Byrd Brothers",
    "Artist": "The Byrds",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Folk Rock, Country Rock, Pop Rock"
  },
  {
    "Number": 172,
    "Year": 1971,
    "Album": "Every Picture Tells a Story",
    "Artist": "Rod Stewart",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 173,
    "Year": 1972,
    "Album": "Something/Anything?",
    "Artist": "Todd Rundgren",
    "Genre": "Rock",
    "Subgenre": "Power Pop, Pop Rock, Prog Rock"
  },
  {
    "Number": 174,
    "Year": 1976,
    "Album": "Desire",
    "Artist": "Bob Dylan",
    "Genre": "Rock",
    "Subgenre": "Folk Rock"
  },
  {
    "Number": 175,
    "Year": 1970,
    "Album": "Close to You",
    "Artist": "Carpenters",
    "Genre": "Rock, Pop",
    "Subgenre": "Pop Rock, Vocal"
  },
  {
    "Number": 176,
    "Year": 1976,
    "Album": "Rocks",
    "Artist": "Aerosmith",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Classic Rock"
  },
  {
    "Number": 177,
    "Year": 1978,
    "Album": "One Nation Under a Groove",
    "Artist": "Funkadelic",
    "Genre": "Funk / Soul",
    "Subgenre": "P.Funk"
  },
  {
    "Number": 178,
    "Year": 1992,
    "Album": "The Anthology: 1961-1977",
    "Artist": "Curtis Mayfield and The Impressions",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Soul, Funk"
  },
  {
    "Number": 179,
    "Year": 2001,
    "Album": "The Definitive Collection",
    "Artist": "ABBA",
    "Genre": "Electronic, Pop",
    "Subgenre": "Europop, Synth-pop, Disco"
  },
  {
    "Number": 180,
    "Year": 1965,
    "Album": "The Rolling Stones, Now!",
    "Artist": "The Rolling Stones",
    "Genre": "Rock, Blues, Pop",
    "Subgenre": "Pop Rock, Rhythm & Blues, Rock & Roll"
  },
  {
    "Number": 181,
    "Year": 1974,
    "Album": "Natty Dread",
    "Artist": "Bob Marley & The Wailers",
    "Genre": "Reggae",
    "Subgenre": "Reggae, Roots Reggae"
  },
  {
    "Number": 182,
    "Year": 1975,
    "Album": "Fleetwood Mac",
    "Artist": "Fleetwood Mac",
    "Genre": "Rock, Pop",
    "Subgenre": "Folk Rock, Pop Rock"
  },
  {
    "Number": 183,
    "Year": 1975,
    "Album": "Red Headed Stranger",
    "Artist": "Willie Nelson",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Country"
  },
  {
    "Number": 184,
    "Year": 1990,
    "Album": "The Immaculate Collection",
    "Artist": "Madonna",
    "Genre": "Electronic, Pop",
    "Subgenre": "Synth-pop"
  },
  {
    "Number": 185,
    "Year": 1969,
    "Album": "The Stooges",
    "Artist": "The Stooges",
    "Genre": "Rock",
    "Subgenre": "Garage Rock, Punk"
  },
  {
    "Number": 186,
    "Year": 1973,
    "Album": "Fresh",
    "Artist": "Sly & The Family Stone",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Funk"
  },
  {
    "Number": 187,
    "Year": 1986,
    "Album": "So",
    "Artist": "Peter Gabriel",
    "Genre": "Electronic, Rock, Funk / Soul, Pop",
    "Subgenre": "Art Rock, Pop Rock, Synth-pop, Funk"
  },
  {
    "Number": 188,
    "Year": 1967,
    "Album": "Buffalo Springfield Again",
    "Artist": "Buffalo Springfield",
    "Genre": "Rock, Pop",
    "Subgenre": "Country Rock"
  },
  {
    "Number": 189,
    "Year": 1969,
    "Album": "Happy Trails",
    "Artist": "Quicksilver Messenger Service",
    "Genre": "Rock",
    "Subgenre": "Acid Rock, Psychedelic Rock"
  },
  {
    "Number": 190,
    "Year": 1969,
    "Album": "From Elvis in Memphis",
    "Artist": "Elvis Presley",
    "Genre": "Rock, Funk / Soul, Folk, World, & Country",
    "Subgenre": "Country, Soul"
  },
  {
    "Number": 191,
    "Year": 1970,
    "Album": "Fun House",
    "Artist": "The Stooges",
    "Genre": "Rock",
    "Subgenre": "Garage Rock, Punk"
  },
  {
    "Number": 192,
    "Year": 1969,
    "Album": "The Gilded Palace of Sin",
    "Artist": "The Flying Burrito Brothers",
    "Genre": "Rock, Folk, World, & Country",
    "Subgenre": "Country Rock"
  },
  {
    "Number": 193,
    "Year": 1994,
    "Album": "Dookie",
    "Artist": "Green Day",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Pop Punk, Punk"
  },
  {
    "Number": 194,
    "Year": 1972,
    "Album": "Transformer",
    "Artist": "Lou Reed",
    "Genre": "Rock",
    "Subgenre": "Glam"
  },
  {
    "Number": 195,
    "Year": 1966,
    "Album": "Blues Breakers With Eric Clapton (\"The Beano Album\")",
    "Artist": "John Mayall & The Bluesbreakers",
    "Genre": "Rock,�Blues",
    "Subgenre": "Blues Rock,�Electric Blues,�Harmonica Blues"
  },
  {
    "Number": 196,
    "Year": 1998,
    "Album": "Nuggets: Original Artyfacts From the First Psychedelic Era, 1965-1968",
    "Artist": "Various Artists",
    "Genre": "Rock",
    "Subgenre": "Garage Rock,�Psychedelic Rock"
  },
  {
    "Number": 197,
    "Year": 1983,
    "Album": "Murmur",
    "Artist": "R.E.M.",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 198,
    "Year": 1967,
    "Album": "The Best of Little Walter",
    "Artist": "Little Walter",
    "Genre": "Blues",
    "Subgenre": "Chicago Blues"
  },
  {
    "Number": 199,
    "Year": 2001,
    "Album": "Is This It",
    "Artist": "The Strokes",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 200,
    "Year": 1979,
    "Album": "Highway to Hell",
    "Artist": "AC/DC",
    "Genre": "Rock",
    "Subgenre": "Hard Rock"
  },
  {
    "Number": 201,
    "Year": 1994,
    "Album": "The Downward Spiral",
    "Artist": "Nine Inch Nails",
    "Genre": "Electronic, Rock",
    "Subgenre": "Industrial"
  },
  {
    "Number": 202,
    "Year": 1966,
    "Album": "Parsley, Sage, Rosemary and Thyme",
    "Artist": "Simon & Garfunkel",
    "Genre": "Rock, Pop, Folk, World, & Country",
    "Subgenre": "Folk Rock, Pop Rock"
  },
  {
    "Number": 203,
    "Year": 1987,
    "Album": "Bad",
    "Artist": "Michael Jackson",
    "Genre": "Funk / Soul, Pop",
    "Subgenre": "Pop Rock, Ballad, Funk, Soul"
  },
  {
    "Number": 204,
    "Year": 2006,
    "Album": "Modern Times",
    "Artist": "Bob Dylan",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Folk Rock"
  },
  {
    "Number": 205,
    "Year": 1968,
    "Album": "Wheels of Fire",
    "Artist": "Cream",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock, Psychedelic Rock, Classic Rock"
  },
  {
    "Number": 206,
    "Year": 1980,
    "Album": "Dirty Mind",
    "Artist": "Prince",
    "Genre": "Funk / Soul",
    "Subgenre": "None"
  },
  {
    "Number": 207,
    "Year": 1970,
    "Album": "Abraxas",
    "Artist": "Santana",
    "Genre": "Rock, Latin",
    "Subgenre": "Fusion, Hard Rock, Psychedelic Rock"
  },
  {
    "Number": 208,
    "Year": 1970,
    "Album": "Tea for the Tillerman",
    "Artist": "Cat Stevens",
    "Genre": "Rock, Stage & Screen",
    "Subgenre": "Folk Rock, Pop Rock"
  },
  {
    "Number": 209,
    "Year": 1991,
    "Album": "Ten",
    "Artist": "Pearl Jam",
    "Genre": "Rock",
    "Subgenre": "Grunge"
  },
  {
    "Number": 210,
    "Year": 1969,
    "Album": "Everybody Knows This Is Nowhere",
    "Artist": "Neil Young & Crazy Horse",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Country Rock, Classic Rock"
  },
  {
    "Number": 211,
    "Year": 1975,
    "Album": "Wish You Were Here",
    "Artist": "Pink Floyd",
    "Genre": "Rock",
    "Subgenre": "Classic Rock, Prog Rock"
  },
  {
    "Number": 212,
    "Year": 1994,
    "Album": "Crooked Rain Crooked Rain",
    "Artist": "Pavement",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Indie Rock"
  },
  {
    "Number": 213,
    "Year": 1981,
    "Album": "Tattoo You",
    "Artist": "The Rolling Stones",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 214,
    "Year": 1991,
    "Album": "Proud Mary: The Best of Ike and Tina Turner",
    "Artist": "Ike & Tina Turner",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Bayou Funk, Soul"
  },
  {
    "Number": 215,
    "Year": 1973,
    "Album": "New York Dolls",
    "Artist": "New York Dolls",
    "Genre": "Rock",
    "Subgenre": "Glam"
  },
  {
    "Number": 216,
    "Year": 1986,
    "Album": "Bo Diddley / Go Bo Diddley",
    "Artist": "Bo Diddley",
    "Genre": "Rock, Blues",
    "Subgenre": "Rhythm & Blues, Rock & Roll"
  },
  {
    "Number": 217,
    "Year": 1961,
    "Album": "Two Steps From the Blues",
    "Artist": "Bobby \"Blue\" Bland",
    "Genre": "Funk / Soul, Blues",
    "Subgenre": "Rhythm & Blues, Soul"
  },
  {
    "Number": 218,
    "Year": 1986,
    "Album": "The Queen Is Dead",
    "Artist": "The Smiths",
    "Genre": "Rock, Pop",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 219,
    "Year": 1986,
    "Album": "Licensed to Ill",
    "Artist": "Beastie Boys",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 220,
    "Year": 1970,
    "Album": "Look-Ka Py Py",
    "Artist": "The Meters",
    "Genre": "Funk / Soul",
    "Subgenre": "Bayou Funk, Soul, Funk"
  },
  {
    "Number": 221,
    "Year": 1991,
    "Album": "Loveless",
    "Artist": "My Bloody Valentine",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Shoegaze"
  },
  {
    "Number": 222,
    "Year": 1972,
    "Album": "New Orleans Piano",
    "Artist": "Professor Longhair",
    "Genre": "Funk / Soul, Blues",
    "Subgenre": "Piano Blues"
  },
  {
    "Number": 223,
    "Year": 1983,
    "Album": "War",
    "Artist": "U2",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 224,
    "Year": 1999,
    "Album": "The Neil Diamond Collection",
    "Artist": "Neil Diamond",
    "Genre": "Rock, Pop",
    "Subgenre": "Soft Rock, Ballad"
  },
  {
    "Number": 225,
    "Year": 2004,
    "Album": "American Idiot",
    "Artist": "Green Day",
    "Genre": "Rock",
    "Subgenre": "Pop Rock, Punk"
  },
  {
    "Number": 226,
    "Year": 1982,
    "Album": "Nebraska",
    "Artist": "Bruce Springsteen",
    "Genre": "Rock",
    "Subgenre": "Acoustic"
  },
  {
    "Number": 227,
    "Year": 1989,
    "Album": "Doolittle",
    "Artist": "Pixies",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 228,
    "Year": 1987,
    "Album": "Paid in Full",
    "Artist": "Eric B. & Rakim",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 229,
    "Year": 1975,
    "Album": "Toys in the Attic",
    "Artist": "Aerosmith",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Blues Rock"
  },
  {
    "Number": 230,
    "Year": 1989,
    "Album": "Nick of Time",
    "Artist": "Bonnie Raitt",
    "Genre": "Rock, Pop",
    "Subgenre": "Blues Rock, Pop Rock"
  },
  {
    "Number": 231,
    "Year": 1975,
    "Album": "A Night at the Opera",
    "Artist": "Queen",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Pop Rock, Prog Rock"
  },
  {
    "Number": 232,
    "Year": 1972,
    "Album": "The Kink Kronikles",
    "Artist": "The Kinks",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Pop Rock"
  },
  {
    "Number": 233,
    "Year": 1965,
    "Album": "Mr. Tambourine Man",
    "Artist": "The Byrds",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Garage Rock, Pop Rock"
  },
  {
    "Number": 234,
    "Year": 1968,
    "Album": "Bookends",
    "Artist": "Simon & Garfunkel",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Classic Rock"
  },
  {
    "Number": 235,
    "Year": 2000,
    "Album": "The Ultimate Collection",
    "Artist": "Patsy Cline",
    "Genre": "Folk, World, & Country",
    "Subgenre": "None"
  },
  {
    "Number": 236,
    "Year": 1992,
    "Album": "Mr. Excitement!",
    "Artist": "Jackie Wilson",
    "Genre": "Funk / Soul",
    "Subgenre": "None"
  },
  {
    "Number": 237,
    "Year": 1965,
    "Album": "My Generation",
    "Artist": "The Who",
    "Genre": "Rock",
    "Subgenre": "Mod"
  },
  {
    "Number": 238,
    "Year": 1962,
    "Album": "Howlin' Wolf",
    "Artist": "Howlin' Wolf",
    "Genre": "Blues",
    "Subgenre": "None"
  },
  {
    "Number": 239,
    "Year": 1989,
    "Album": "Like a Prayer",
    "Artist": "Madonna",
    "Genre": "Electronic, Pop",
    "Subgenre": "Synth-pop"
  },
  {
    "Number": 240,
    "Year": 1972,
    "Album": "Can't Buy a Thrill",
    "Artist": "Steely Dan",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 241,
    "Year": 1984,
    "Album": "Let It Be",
    "Artist": "The Replacements",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Power Pop, Punk, Indie Rock"
  },
  {
    "Number": 242,
    "Year": 1984,
    "Album": "Run D.M.C.",
    "Artist": "Run D.M.C.",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 243,
    "Year": 1970,
    "Album": "Black Sabbath",
    "Artist": "Black Sabbath",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Heavy Metal"
  },
  {
    "Number": 244,
    "Year": 2000,
    "Album": "The Marshall Mathers LP",
    "Artist": "Eminem",
    "Genre": "Hip Hop",
    "Subgenre": "Pop Rap, Hardcore Hip-Hop, Horrorcore"
  },
  {
    "Number": 245,
    "Year": 1993,
    "Album": "All Killer No Filler! The Jerry Lee Lewis Anthology",
    "Artist": "Jerry Lee Lewis",
    "Genre": "Rock, Blues, Folk, World, & Country",
    "Subgenre": "Country Blues, Rock & Roll, Rhythm & Blues"
  },
  {
    "Number": 246,
    "Year": 1966,
    "Album": "Freak Out!",
    "Artist": "The Mothers of Invention",
    "Genre": "Electronic, Rock",
    "Subgenre": "Musique Concr?te, Avantgarde, Symphonic Rock, Rhythm & Blues, Psychedelic Rock, Experimental, Parody"
  },
  {
    "Number": 247,
    "Year": 1969,
    "Album": "Live/Dead",
    "Artist": "The Grateful Dead",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Country Rock, Psychedelic Rock, Experimental"
  },
  {
    "Number": 248,
    "Year": 1959,
    "Album": "The Shape of Jazz to Come",
    "Artist": "Ornette Coleman",
    "Genre": "Jazz",
    "Subgenre": "Free Jazz"
  },
  {
    "Number": 249,
    "Year": 1992,
    "Album": "Automatic for the People",
    "Artist": "R.E.M.",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 250,
    "Year": 1996,
    "Album": "Reasonable Doubt",
    "Artist": "Jay Z",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 251,
    "Year": 1977,
    "Album": "Low",
    "Artist": "David Bowie",
    "Genre": "Electronic, Rock",
    "Subgenre": "Art Rock, Ambient, Experimental"
  },
  {
    "Number": 252,
    "Year": 2001,
    "Album": "The Blueprint",
    "Artist": "Jay Z",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 253,
    "Year": 1980,
    "Album": "The River",
    "Artist": "Bruce Springsteen",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Pop Rock, Classic Rock"
  },
  {
    "Number": 254,
    "Year": 1966,
    "Album": "Complete & Unbelievable: The Otis Redding Dictionary of Soul",
    "Artist": "Otis Redding",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 255,
    "Year": 1991,
    "Album": "Metallica (\"The Black Album\")",
    "Artist": "Metallica",
    "Genre": "Rock",
    "Subgenre": "Heavy Metal"
  },
  {
    "Number": 256,
    "Year": 1977,
    "Album": "Trans Europa Express",
    "Artist": "Kraftwerk",
    "Genre": "Electronic",
    "Subgenre": "Electro"
  },
  {
    "Number": 257,
    "Year": 1985,
    "Album": "Whitney Houston",
    "Artist": "Whitney Houston",
    "Genre": "Funk / Soul, Pop",
    "Subgenre": "Synth-pop, Rhythm & Blues"
  },
  {
    "Number": 258,
    "Year": 1968,
    "Album": "The Kinks Are The Village Green Preservation Society",
    "Artist": "The Kinks",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Pop Rock"
  },
  {
    "Number": 259,
    "Year": 1997,
    "Album": "The Velvet Rope",
    "Artist": "Janet",
    "Genre": "Electronic, Funk / Soul, Pop",
    "Subgenre": "RnB/Swing, Downtempo"
  },
  {
    "Number": 260,
    "Year": 1978,
    "Album": "Stardust",
    "Artist": "Willie Nelson",
    "Genre": "Pop, Folk, World, & Country",
    "Subgenre": "Vocal"
  },
  {
    "Number": 261,
    "Year": 1970,
    "Album": "American Beauty",
    "Artist": "Grateful Dead",
    "Genre": "Rock",
    "Subgenre": "Folk Rock"
  },
  {
    "Number": 262,
    "Year": 1969,
    "Album": "Crosby, Stills & Nash",
    "Artist": "Crosby, Stills & Nash",
    "Genre": "Rock, Folk, World, & Country",
    "Subgenre": "Folk Rock, Classic Rock"
  },
  {
    "Number": 263,
    "Year": 1988,
    "Album": "Tracy Chapman",
    "Artist": "Tracy Chapman",
    "Genre": "Rock",
    "Subgenre": "None"
  },
  {
    "Number": 264,
    "Year": 1970,
    "Album": "Workingman's Dead",
    "Artist": "Grateful Dead",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Country Rock, Classic Rock"
  },
  {
    "Number": 265,
    "Year": 1959,
    "Album": "The Genius of Ray Charles",
    "Artist": "Ray Charles",
    "Genre": "Jazz, Pop",
    "Subgenre": "Soul-Jazz, Big Band"
  },
  {
    "Number": 266,
    "Year": 1968,
    "Album": "Child Is Father to the Man",
    "Artist": "Blood, Sweat & Tears",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Jazz-Rock, Classic Rock"
  },
  {
    "Number": 267,
    "Year": 1973,
    "Album": "Quadrophenia",
    "Artist": "The Who",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Classic Rock, Mod"
  },
  {
    "Number": 268,
    "Year": 1972,
    "Album": "Paul Simon",
    "Artist": "Paul Simon",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Pop Rock"
  },
  {
    "Number": 269,
    "Year": 1985,
    "Album": "Psychocandy",
    "Artist": "The Jesus and Mary Chain",
    "Genre": "Rock",
    "Subgenre": "Noise"
  },
  {
    "Number": 270,
    "Year": 1978,
    "Album": "Some Girls",
    "Artist": "The Rolling Stones",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Rock & Roll, Classic Rock, Disco"
  },
  {
    "Number": 271,
    "Year": 1965,
    "Album": "The Beach Boys Today!",
    "Artist": "The Beach Boys",
    "Genre": "Rock",
    "Subgenre": "Pop Rock, Psychedelic Rock"
  },
  {
    "Number": 272,
    "Year": 1997,
    "Album": "Dig Me Out",
    "Artist": "Sleater Kinney",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 273,
    "Year": 1966,
    "Album": "Going to a Go-Go",
    "Artist": "Smokey Robinson & The Miracles",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 274,
    "Year": 1974,
    "Album": "Nightbirds",
    "Artist": "LaBelle",
    "Genre": "Funk / Soul",
    "Subgenre": "Funk, Disco"
  },
  {
    "Number": 275,
    "Year": 1999,
    "Album": "The Slim Shady LP",
    "Artist": "Eminem",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 276,
    "Year": 1975,
    "Album": "Mothership Connection",
    "Artist": "Parliament",
    "Genre": "Funk / Soul",
    "Subgenre": "P.Funk, Funk"
  },
  {
    "Number": 277,
    "Year": 1989,
    "Album": "Rhythm Nation 1814",
    "Artist": "Janet Jackson",
    "Genre": "Electronic, Hip Hop, Pop",
    "Subgenre": "RnB/Swing, Downtempo, Synth-pop"
  },
  {
    "Number": 278,
    "Year": 1997,
    "Album": "Anthology of American Folk Music",
    "Artist": "Various",
    "Genre": "Blues, Folk, World, & Country",
    "Subgenre": "Cajun, Country, Field Recording, Gospel, Delta Blues, Folk"
  },
  {
    "Number": 279,
    "Year": 1973,
    "Album": "Aladdin Sane",
    "Artist": "David Bowie",
    "Genre": "Rock",
    "Subgenre": "Glam"
  },
  {
    "Number": 280,
    "Year": 2000,
    "Album": "All That You Can't Leave Behind",
    "Artist": "U2",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 281,
    "Year": 1994,
    "Album": "My Life",
    "Artist": "Mary J. Blige",
    "Genre": "Hip Hop",
    "Subgenre": "RnB/Swing"
  },
  {
    "Number": 282,
    "Year": 1964,
    "Album": "Folk Singer",
    "Artist": "Muddy Waters",
    "Genre": "Blues",
    "Subgenre": "Delta Blues"
  },
  {
    "Number": 283,
    "Year": 1974,
    "Album": "Can't Get Enough",
    "Artist": "Barry White",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul, Disco"
  },
  {
    "Number": 284,
    "Year": 1978,
    "Album": "The Cars",
    "Artist": "The Cars",
    "Genre": "Electronic, Rock",
    "Subgenre": "New Wave, Pop Rock, Synth-pop"
  },
  {
    "Number": 285,
    "Year": 1972,
    "Album": "Music of My Mind",
    "Artist": "Stevie Wonder",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul-Jazz, Soul"
  },
  {
    "Number": 286,
    "Year": 1972,
    "Album": "I'm Still in Love With You",
    "Artist": "Al Green",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Soul"
  },
  {
    "Number": 287,
    "Year": 1980,
    "Album": "Los Angeles",
    "Artist": "X",
    "Genre": "Rock",
    "Subgenre": "Punk, Rock & Roll"
  },
  {
    "Number": 288,
    "Year": 1968,
    "Album": "Anthem of the Sun",
    "Artist": "Grateful Dead",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock"
  },
  {
    "Number": 289,
    "Year": 1967,
    "Album": "Something Else by The Kinks",
    "Artist": "The Kinks",
    "Genre": "Rock",
    "Subgenre": "Pop Rock, Psychedelic Rock, Mod"
  },
  {
    "Number": 290,
    "Year": 1973,
    "Album": "Call Me",
    "Artist": "Al Green",
    "Genre": "Funk / Soul",
    "Subgenre": "Rhythm & Blues, Soul"
  },
  {
    "Number": 291,
    "Year": 1977,
    "Album": "Talking Heads: 77",
    "Artist": "Talking Heads",
    "Genre": "Rock",
    "Subgenre": "New Wave"
  },
  {
    "Number": 292,
    "Year": 1975,
    "Album": "The Basement Tapes",
    "Artist": "Bob Dylan and the Band",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Country Rock, Classic Rock"
  },
  {
    "Number": 293,
    "Year": 1968,
    "Album": "White Light/White Heat",
    "Artist": "The Velvet Underground",
    "Genre": "Rock",
    "Subgenre": "Avantgarde, Experimental"
  },
  {
    "Number": 294,
    "Year": 1969,
    "Album": "Kick Out the Jams",
    "Artist": "MC5",
    "Genre": "Rock",
    "Subgenre": "Garage Rock, Hard Rock, Punk, Blues Rock"
  },
  {
    "Number": 295,
    "Year": 1970,
    "Album": "Songs of Love and Hate",
    "Artist": "Leonard Cohen",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Folk Rock, Folk, Ballad"
  },
  {
    "Number": 296,
    "Year": 1985,
    "Album": "Meat Is Murder",
    "Artist": "The Smiths",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Indie Rock"
  },
  {
    "Number": 297,
    "Year": 1968,
    "Album": "We're Only in It for the Money",
    "Artist": "The Mothers of Invention",
    "Genre": "Electronic, Rock",
    "Subgenre": "Modern Classical, Avantgarde, Psychedelic Rock, Experimental, Parody"
  },
  {
    "Number": 298,
    "Year": 2003,
    "Album": "The College Dropout",
    "Artist": "Kanye West",
    "Genre": "Hip Hop",
    "Subgenre": "Pop Rap, Conscious, Contemporary R&B"
  },
  {
    "Number": 299,
    "Year": 1994,
    "Album": "Weezer (Blue Album)",
    "Artist": "Weezer",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Emo"
  },
  {
    "Number": 300,
    "Year": 1971,
    "Album": "Master of Reality",
    "Artist": "Black Sabbath",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Heavy Metal"
  },
  {
    "Number": 301,
    "Year": 1971,
    "Album": "Coat of Many Colors",
    "Artist": "Dolly Parton",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Country"
  },
  {
    "Number": 302,
    "Year": 1990,
    "Album": "Fear of a Black Planet",
    "Artist": "Public Enemy",
    "Genre": "Hip Hop",
    "Subgenre": "Conscious"
  },
  {
    "Number": 303,
    "Year": 1967,
    "Album": "John Wesley Harding",
    "Artist": "Bob Dylan",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Country Rock"
  },
  {
    "Number": 304,
    "Year": 1994,
    "Album": "Grace",
    "Artist": "Jeff Buckley",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Folk Rock"
  },
  {
    "Number": 305,
    "Year": 1998,
    "Album": "Car Wheels on a Gravel Road",
    "Artist": "Lucinda Williams",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Country, Folk"
  },
  {
    "Number": 306,
    "Year": 1996,
    "Album": "Odelay",
    "Artist": "Beck",
    "Genre": "Electronic, Hip Hop, Funk / Soul, Pop",
    "Subgenre": "Electro, Downtempo, Hip Hop, Disco, Afrobeat, Abstract"
  },
  {
    "Number": 307,
    "Year": 1964,
    "Album": "A Hard Day's Night",
    "Artist": "The Beatles",
    "Genre": "Rock, Stage & Screen",
    "Subgenre": "Soundtrack, Beat, Pop Rock"
  },
  {
    "Number": 308,
    "Year": 1956,
    "Album": "Songs for Swingin' Lovers!",
    "Artist": "Frank Sinatra",
    "Genre": "Jazz, Pop",
    "Subgenre": "Vocal, Easy Listening"
  },
  {
    "Number": 309,
    "Year": 1969,
    "Album": "Willy and the Poor Boys",
    "Artist": "Creedence Clearwater Revival",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Rock & Roll, Classic Rock"
  },
  {
    "Number": 310,
    "Year": 1991,
    "Album": "Blood Sugar Sex Magik",
    "Artist": "Red Hot Chili Peppers",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Funk Metal"
  },
  {
    "Number": 311,
    "Year": 1994,
    "Album": "The Sun Records Collection",
    "Artist": "Various",
    "Genre": "Rock, Funk / Soul, Blues, Pop, Folk, World, & Country",
    "Subgenre": "Country Blues, Rock & Roll, Rockabilly"
  },
  {
    "Number": 312,
    "Year": 1988,
    "Album": "Nothing's Shocking",
    "Artist": "Jane's Addiction",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 313,
    "Year": 1994,
    "Album": "MTV Unplugged in New York",
    "Artist": "Nirvana",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Acoustic, Grunge"
  },
  {
    "Number": 314,
    "Year": 1998,
    "Album": "The Miseducation of Lauryn Hill",
    "Artist": "Lauryn Hill",
    "Genre": "Hip Hop",
    "Subgenre": "RnB/Swing, Conscious"
  },
  {
    "Number": 315,
    "Year": 1979,
    "Album": "Damn the Torpedoes",
    "Artist": "Tom Petty and the Heartbreakers",
    "Genre": "Rock",
    "Subgenre": "Soft Rock, Hard Rock, Pop Rock"
  },
  {
    "Number": 316,
    "Year": 1969,
    "Album": "The Velvet Underground",
    "Artist": "The Velvet Underground",
    "Genre": "Rock",
    "Subgenre": "Garage Rock, Art Rock, Experimental"
  },
  {
    "Number": 317,
    "Year": 1988,
    "Album": "Surfer Rosa",
    "Artist": "Pixies",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 318,
    "Year": 1972,
    "Album": "Back Stabbers",
    "Artist": "The O'Jays",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 319,
    "Year": 1973,
    "Album": "Burnin'",
    "Artist": "The Wailers",
    "Genre": "Reggae",
    "Subgenre": "Reggae"
  },
  {
    "Number": 320,
    "Year": 2001,
    "Album": "Amnesiac",
    "Artist": "Radiohead",
    "Genre": "Electronic, Rock",
    "Subgenre": "Alternative Rock, Experimental"
  },
  {
    "Number": 321,
    "Year": 1972,
    "Album": "Pink Moon",
    "Artist": "Nick Drake",
    "Genre": "Rock, Folk, World, & Country",
    "Subgenre": "Folk, Folk Rock, Acoustic"
  },
  {
    "Number": 322,
    "Year": 1972,
    "Album": "Sail Away",
    "Artist": "Randy Newman",
    "Genre": "Rock, Pop",
    "Subgenre": "None"
  },
  {
    "Number": 323,
    "Year": 1981,
    "Album": "Ghost in the Machine",
    "Artist": "The Police",
    "Genre": "Rock, Pop",
    "Subgenre": "Alternative Rock, New Wave, Pop Rock"
  },
  {
    "Number": 324,
    "Year": 1976,
    "Album": "Station to Station",
    "Artist": "David Bowie",
    "Genre": "Rock, Funk / Soul",
    "Subgenre": "Classic Rock, Soul, Funk, Art Rock"
  },
  {
    "Number": 325,
    "Year": 1977,
    "Album": "Slowhand",
    "Artist": "Eric Clapton",
    "Genre": "Rock",
    "Subgenre": "None"
  },
  {
    "Number": 326,
    "Year": 1989,
    "Album": "Disintegration",
    "Artist": "The Cure",
    "Genre": "Electronic, Rock",
    "Subgenre": "New Wave, Alternative Rock"
  },
  {
    "Number": 327,
    "Year": 1993,
    "Album": "Exile in Guyville",
    "Artist": "Liz Phair",
    "Genre": "Rock",
    "Subgenre": "Lo-Fi, Indie Rock"
  },
  {
    "Number": 328,
    "Year": 1988,
    "Album": "Daydream Nation",
    "Artist": "Sonic Youth",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Indie Rock"
  },
  {
    "Number": 329,
    "Year": 1986,
    "Album": "In the Jungle Groove",
    "Artist": "James Brown",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul, Funk"
  },
  {
    "Number": 330,
    "Year": 1975,
    "Album": "Tonight's the Night",
    "Artist": "Neil Young",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Folk Rock, Classic Rock"
  },
  {
    "Number": 331,
    "Year": 1965,
    "Album": "Help!",
    "Artist": "The Beatles",
    "Genre": "Rock, Stage & Screen",
    "Subgenre": "Beat, Soundtrack, Pop Rock"
  },
  {
    "Number": 332,
    "Year": 1982,
    "Album": "Shoot Out the Lights",
    "Artist": "Richard & Linda Thompson",
    "Genre": "Rock, Folk, World, & Country",
    "Subgenre": "Folk Rock"
  },
  {
    "Number": 333,
    "Year": 1981,
    "Album": "Wild Gift",
    "Artist": "X",
    "Genre": "Rock",
    "Subgenre": "Rock & Roll, Punk"
  },
  {
    "Number": 334,
    "Year": 1979,
    "Album": "Squeezing Out Sparks",
    "Artist": "Graham Parker & The Rumour",
    "Genre": "Rock, Blues",
    "Subgenre": "None"
  },
  {
    "Number": 335,
    "Year": 1994,
    "Album": "Superunknown",
    "Artist": "Soundgarden",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 336,
    "Year": 2007,
    "Album": "In Rainbows",
    "Artist": "Radiohead",
    "Genre": "Electronic, Rock",
    "Subgenre": "Alternative Rock, Art Rock"
  },
  {
    "Number": 337,
    "Year": 1971,
    "Album": "Aqualung",
    "Artist": "Jethro Tull",
    "Genre": "Rock",
    "Subgenre": "Classic Rock, Prog Rock"
  },
  {
    "Number": 338,
    "Year": 1968,
    "Album": "Cheap Thrills",
    "Artist": "Big Brother & the Holding Company",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Blues Rock, Psychedelic Rock"
  },
  {
    "Number": 339,
    "Year": 1974,
    "Album": "The Heart of Saturday Night",
    "Artist": "Tom Waits",
    "Genre": "Jazz, Pop, Folk, World, & Country",
    "Subgenre": "Contemporary Jazz, Spoken Word"
  },
  {
    "Number": 340,
    "Year": 1981,
    "Album": "Damaged",
    "Artist": "Black Flag",
    "Genre": "Rock",
    "Subgenre": "Hardcore, Punk"
  },
  {
    "Number": 341,
    "Year": 1999,
    "Album": "Play",
    "Artist": "Moby",
    "Genre": "Electronic",
    "Subgenre": "Breakbeat, Leftfield, Downtempo"
  },
  {
    "Number": 342,
    "Year": 1990,
    "Album": "Violator",
    "Artist": "Depeche Mode",
    "Genre": "Electronic",
    "Subgenre": "Synth-pop"
  },
  {
    "Number": 343,
    "Year": 1977,
    "Album": "Bat Out of Hell",
    "Artist": "Meat Loaf",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 344,
    "Year": 1973,
    "Album": "Berlin",
    "Artist": "Lou Reed",
    "Genre": "Rock",
    "Subgenre": "Hard Rock"
  },
  {
    "Number": 345,
    "Year": 1984,
    "Album": "Stop Making Sense",
    "Artist": "Talking Heads",
    "Genre": "Rock, Funk / Soul",
    "Subgenre": "Funk, Indie Rock, New Wave"
  },
  {
    "Number": 346,
    "Year": 1989,
    "Album": "3 Feet High and Rising",
    "Artist": "De La Soul",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 347,
    "Year": 1967,
    "Album": "The Piper at the Gates of Dawn",
    "Artist": "Pink Floyd",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock"
  },
  {
    "Number": 348,
    "Year": 1960,
    "Album": "Muddy Waters at Newport 1960",
    "Artist": "Muddy Waters",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock, Chicago Blues"
  },
  {
    "Number": 349,
    "Year": 2003,
    "Album": "The Black Album",
    "Artist": "Jay Z",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 350,
    "Year": 1966,
    "Album": "Roger the Engineer",
    "Artist": "The Yardbirds",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock, Pop Rock"
  },
  {
    "Number": 351,
    "Year": 1979,
    "Album": "Rust Never Sleeps",
    "Artist": "Neil Young & Crazy Horse",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Arena Rock"
  },
  {
    "Number": 352,
    "Year": 1985,
    "Album": "Brothers in Arms",
    "Artist": "Dire Straits",
    "Genre": "Rock",
    "Subgenre": "AOR, Classic Rock"
  },
  {
    "Number": 353,
    "Year": 2010,
    "Album": "My Beautiful Dark Twisted Fantasy",
    "Artist": "Kanye West",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 354,
    "Year": 1978,
    "Album": "52nd Street",
    "Artist": "Billy Joel",
    "Genre": "Jazz, Rock, Pop",
    "Subgenre": "Pop Rock, Ballad, Latin Jazz"
  },
  {
    "Number": 355,
    "Year": 1965,
    "Album": "Having a Rave Up",
    "Artist": "The Yardbirds",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Psychedelic Rock"
  },
  {
    "Number": 356,
    "Year": 1970,
    "Album": "12 Songs",
    "Artist": "Randy Newman",
    "Genre": "Rock, Pop",
    "Subgenre": "Pop Rock, Vocal"
  },
  {
    "Number": 357,
    "Year": 1967,
    "Album": "Between the Buttons",
    "Artist": "The Rolling Stones",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Psychedelic Rock, Pop Rock"
  },
  {
    "Number": 358,
    "Year": 1960,
    "Album": "Sketches of Spain",
    "Artist": "Miles Davis",
    "Genre": "Jazz",
    "Subgenre": "Modal"
  },
  {
    "Number": 359,
    "Year": 1972,
    "Album": "Honky Ch�teau",
    "Artist": "Elton John",
    "Genre": "Rock",
    "Subgenre": "Pop Rock,�Classic Rock"
  },
  {
    "Number": 360,
    "Year": 1979,
    "Album": "Singles Going Steady",
    "Artist": "Buzzcocks",
    "Genre": "Rock",
    "Subgenre": "Punk"
  },
  {
    "Number": 361,
    "Year": 2000,
    "Album": "Stankonia",
    "Artist": "OutKast",
    "Genre": "Hip Hop, Funk / Soul",
    "Subgenre": "Gangsta, P.Funk, Crunk, Conscious"
  },
  {
    "Number": 362,
    "Year": 1993,
    "Album": "Siamese Dream",
    "Artist": "The Smashing Pumpkins",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 363,
    "Year": 1987,
    "Album": "Substance 1987",
    "Artist": "New Order",
    "Genre": "Electronic",
    "Subgenre": "Synth-pop"
  },
  {
    "Number": 364,
    "Year": 1971,
    "Album": "L.A. Woman",
    "Artist": "The Doors",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Classic Rock"
  },
  {
    "Number": 365,
    "Year": 1992,
    "Album": "Rage Against the Machine",
    "Artist": "Rage Against the Machine",
    "Genre": "Hip Hop, Rock",
    "Subgenre": "Funk Metal"
  },
  {
    "Number": 366,
    "Year": 1994,
    "Album": "American Recordings",
    "Artist": "Johnny Cash",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Country, Gospel, Folk"
  },
  {
    "Number": 367,
    "Year": 1998,
    "Album": "Ray of Light",
    "Artist": "Madonna",
    "Genre": "Electronic, Pop",
    "Subgenre": "House, Techno, Downtempo, Vocal, Ambient"
  },
  {
    "Number": 368,
    "Year": 1972,
    "Album": "Eagles",
    "Artist": "Eagles",
    "Genre": "Rock",
    "Subgenre": "Country Rock, Classic Rock"
  },
  {
    "Number": 369,
    "Year": 1987,
    "Album": "Louder Than Bombs",
    "Artist": "The Smiths",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Indie Rock"
  },
  {
    "Number": 370,
    "Year": 1973,
    "Album": "Mott",
    "Artist": "Mott the Hoople",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 371,
    "Year": 2006,
    "Album": "Whatever People Say I Am, That's What I'm Not",
    "Artist": "Arctic Monkeys",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 372,
    "Year": 1979,
    "Album": "Reggatta de Blanc",
    "Artist": "The Police",
    "Genre": "Rock, Pop",
    "Subgenre": "New Wave, Pop Rock"
  },
  {
    "Number": 373,
    "Year": 1969,
    "Album": "Volunteers",
    "Artist": "Jefferson Airplane",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock, Folk Rock, Country Rock, Honky Tonk"
  },
  {
    "Number": 374,
    "Year": 1975,
    "Album": "Siren",
    "Artist": "Roxy Music",
    "Genre": "Rock",
    "Subgenre": "Art Rock, Pop Rock, Glam"
  },
  {
    "Number": 375,
    "Year": 1974,
    "Album": "Late for the Sky",
    "Artist": "Jackson Browne",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 376,
    "Year": 1995,
    "Album": "Post",
    "Artist": "Bjork",
    "Genre": "Electronic",
    "Subgenre": "Breakbeat, IDM, Electro"
  },
  {
    "Number": 377,
    "Year": 1991,
    "Album": "The Ultimate Collection: 1948-1990",
    "Artist": "John Lee Hooker",
    "Genre": "Blues",
    "Subgenre": "Country Blues, Electric Blues, Chicago Blues, Jump Blues"
  },
  {
    "Number": 378,
    "Year": 1995,
    "Album": "(What's the Story) Morning Glory?",
    "Artist": "Oasis",
    "Genre": "Rock, Pop",
    "Subgenre": "Brit Pop"
  },
  {
    "Number": 379,
    "Year": 1994,
    "Album": "CrazySexyCool",
    "Artist": "TLC",
    "Genre": "Electronic, Hip Hop, Funk / Soul",
    "Subgenre": "RnB/Swing"
  },
  {
    "Number": 380,
    "Year": 1973,
    "Album": "Funky Kingston",
    "Artist": "Toots & The Maytals",
    "Genre": "Reggae",
    "Subgenre": "Reggae Gospel, Reggae, Roots Reggae, Rocksteady"
  },
  {
    "Number": 381,
    "Year": 2011,
    "Album": "The Smile Sessions",
    "Artist": "The Beach Boys",
    "Genre": "Rock",
    "Subgenre": "Pop Rock, Psychedelic Rock"
  },
  {
    "Number": 382,
    "Year": 1976,
    "Album": "The Modern Lovers",
    "Artist": "The Modern Lovers",
    "Genre": "Rock",
    "Subgenre": "Art Rock, Indie Rock"
  },
  {
    "Number": 383,
    "Year": 1978,
    "Album": "More Songs About Buildings and Food",
    "Artist": "Talking Heads",
    "Genre": "Rock",
    "Subgenre": "New Wave, Indie Rock"
  },
  {
    "Number": 384,
    "Year": 1966,
    "Album": "A Quick One",
    "Artist": "The Who",
    "Genre": "Rock",
    "Subgenre": "Mod, Beat, Psychedelic Rock"
  },
  {
    "Number": 385,
    "Year": 2001,
    "Album": "Love and Theft",
    "Artist": "Bob Dylan",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Blues Rock"
  },
  {
    "Number": 386,
    "Year": 1974,
    "Album": "Pretzel Logic",
    "Artist": "Steely Dan",
    "Genre": "Jazz, Rock",
    "Subgenre": "Jazz-Rock, Pop Rock, Classic Rock"
  },
  {
    "Number": 387,
    "Year": 1993,
    "Album": "Enter the Wu_Tang: 36 Chambers",
    "Artist": "Wu Tang Clan",
    "Genre": "Hip Hop",
    "Subgenre": "Gangsta"
  },
  {
    "Number": 388,
    "Year": 1985,
    "Album": "The Indestructible Beat of Soweto",
    "Artist": "Various Artists",
    "Genre": "Funk / Soul,�Folk, World, & Country",
    "Subgenre": "African"
  },
  {
    "Number": 389,
    "Year": 1989,
    "Album": "The End of the Innocence",
    "Artist": "Don Henley",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 390,
    "Year": 2003,
    "Album": "Elephant",
    "Artist": "The White Stripes",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Garage Rock, Alternative Rock"
  },
  {
    "Number": 391,
    "Year": 1976,
    "Album": "The Pretender",
    "Artist": "Jackson Browne",
    "Genre": "Rock",
    "Subgenre": "Soft Rock, Pop Rock"
  },
  {
    "Number": 392,
    "Year": 1970,
    "Album": "Let It Be",
    "Artist": "The Beatles",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 393,
    "Year": 2007,
    "Album": "Kala",
    "Artist": "M.I.A.",
    "Genre": "Electronic, Hip Hop, Reggae, Pop",
    "Subgenre": "Grime, Bollywood, Hip Hop, Dancehall"
  },
  {
    "Number": 394,
    "Year": 1974,
    "Album": "Good Old Boys",
    "Artist": "Randy Newman",
    "Genre": "Rock, Pop",
    "Subgenre": "Pop Rock, Vocal"
  },
  {
    "Number": 395,
    "Year": 2007,
    "Album": "Sound of Silver",
    "Artist": "LCD Soundsystem",
    "Genre": "Electronic, Rock",
    "Subgenre": "Leftfield, Alternative Rock, Electro, Disco"
  },
  {
    "Number": 396,
    "Year": 1973,
    "Album": "For Your Pleasure",
    "Artist": "Roxy Music",
    "Genre": "Rock",
    "Subgenre": "Art Rock, Avantgarde, Glam"
  },
  {
    "Number": 397,
    "Year": 1991,
    "Album": "Blue Lines",
    "Artist": "Massive Attack",
    "Genre": "Electronic, Reggae",
    "Subgenre": "Dub, Downtempo"
  },
  {
    "Number": 398,
    "Year": 1983,
    "Album": "Eliminator",
    "Artist": "ZZ Top",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 399,
    "Year": 1985,
    "Album": "Rain Dogs",
    "Artist": "Tom Waits",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock"
  },
  {
    "Number": 400,
    "Year": 1995,
    "Album": "Anthology: The Best of The Temptations",
    "Artist": "The Temptations",
    "Genre": "Electronic, Funk / Soul",
    "Subgenre": "Soul, Disco"
  },
  {
    "Number": 401,
    "Year": 1999,
    "Album": "Californication",
    "Artist": "Red Hot Chili Peppers",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Funk Metal"
  },
  {
    "Number": 402,
    "Year": 1994,
    "Album": "Illmatic",
    "Artist": "Nas",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 403,
    "Year": 1973,
    "Album": "(pronounced 'leh-'nerd 'skin-'nerd)",
    "Artist": "Lynyrd Skynyrd",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Hard Rock, Southern Rock"
  },
  {
    "Number": 404,
    "Year": 1972,
    "Album": "Dr. John's Gumbo",
    "Artist": "Dr. John",
    "Genre": "Funk / Soul",
    "Subgenre": "Bayou Funk, Funk, Rhythm & Blues"
  },
  {
    "Number": 405,
    "Year": 1974,
    "Album": "Radio City",
    "Artist": "Big Star",
    "Genre": "Rock",
    "Subgenre": "Power Pop"
  },
  {
    "Number": 406,
    "Year": 1993,
    "Album": "Rid of Me",
    "Artist": "PJ Harvey",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 407,
    "Year": 1980,
    "Album": "Sandinista!",
    "Artist": "The Clash",
    "Genre": "Rock, Reggae",
    "Subgenre": "Rock & Roll, Dub, Punk"
  },
  {
    "Number": 408,
    "Year": 1989,
    "Album": "I Do Not Want What I Haven't Got",
    "Artist": "Sinead O'Connor",
    "Genre": "Rock, Funk / Soul, Blues",
    "Subgenre": "Blues Rock, Rhythm & Blues, Soul"
  },
  {
    "Number": 409,
    "Year": 1967,
    "Album": "Strange Days",
    "Artist": "The Doors",
    "Genre": "Rock",
    "Subgenre": "Psychedelic Rock"
  },
  {
    "Number": 410,
    "Year": 1997,
    "Album": "Time Out of Mind",
    "Artist": "Bob Dylan",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock"
  },
  {
    "Number": 411,
    "Year": 1974,
    "Album": "461 Ocean Boulevard",
    "Artist": "Eric Clapton",
    "Genre": "Rock",
    "Subgenre": "Blues Rock"
  },
  {
    "Number": 412,
    "Year": 1977,
    "Album": "Pink Flag",
    "Artist": "Wire",
    "Genre": "Rock",
    "Subgenre": "Punk"
  },
  {
    "Number": 413,
    "Year": 1984,
    "Album": "Double Nickels on the Dime",
    "Artist": "Minutemen",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Hardcore, Punk"
  },
  {
    "Number": 414,
    "Year": 1981,
    "Album": "Beauty and the Beat",
    "Artist": "The Go Go's",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 415,
    "Year": 1978,
    "Album": "Van Halen",
    "Artist": "Van Halen",
    "Genre": "Rock",
    "Subgenre": "Hard Rock"
  },
  {
    "Number": 416,
    "Year": 1999,
    "Album": "Mule Variations",
    "Artist": "Tom Waits",
    "Genre": "Electronic, Rock",
    "Subgenre": "Abstract, Art Rock"
  },
  {
    "Number": 417,
    "Year": 1980,
    "Album": "Boy",
    "Artist": "U2",
    "Genre": "Rock",
    "Subgenre": "New Wave, Pop Rock"
  },
  {
    "Number": 418,
    "Year": 1973,
    "Album": "Band on the Run",
    "Artist": "Paul McCartney & Wings",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 419,
    "Year": 1994,
    "Album": "Dummy",
    "Artist": "Portishead",
    "Genre": "Electronic",
    "Subgenre": "Trip Hop, Downtempo"
  },
  {
    "Number": 420,
    "Year": 1957,
    "Album": "The \"Chirping\" Crickets",
    "Artist": "The Crickets",
    "Genre": "Rock, Pop",
    "Subgenre": "Rockabilly, Rock & Roll"
  },
  {
    "Number": 421,
    "Year": 1990,
    "Album": "The Best of the Girl Groups, Volume 1",
    "Artist": "Various Artists",
    "Genre": "Rock,�Pop",
    "Subgenre": "Pop Rock, Vocal"
  },
  {
    "Number": 422,
    "Year": 1963,
    "Album": "Presenting the Fabulous Ronettes Featuring Veronica",
    "Artist": "The Ronettes",
    "Genre": "Rock, Pop",
    "Subgenre": "Rock & Roll, Vocal"
  },
  {
    "Number": 423,
    "Year": 2001,
    "Album": "Anthology",
    "Artist": "Diana Ross & The Supremes",
    "Genre": "Electronic, Funk / Soul",
    "Subgenre": "Pop Rock, Soul, Disco"
  },
  {
    "Number": 424,
    "Year": 2002,
    "Album": "The Rising",
    "Artist": "Bruce Springsteen",
    "Genre": "Rock",
    "Subgenre": "Folk Rock, Classic Rock"
  },
  {
    "Number": 425,
    "Year": 1974,
    "Album": "Grievous Angel",
    "Artist": "Gram Parsons",
    "Genre": "Rock, Folk, World, & Country",
    "Subgenre": "Country Rock, Honky Tonk"
  },
  {
    "Number": 426,
    "Year": 1978,
    "Album": "Cheap Trick at Budokan",
    "Artist": "Cheap Trick",
    "Genre": "Rock",
    "Subgenre": "Power Pop, Pop Rock, Arena Rock, Hard Rock"
  },
  {
    "Number": 427,
    "Year": 2002,
    "Album": "Sleepless",
    "Artist": "Peter Wolf",
    "Genre": "Rock, Blues, Pop",
    "Subgenre": "Blues Rock, Pop Rock, Ballad"
  },
  {
    "Number": 428,
    "Year": 1978,
    "Album": "Outlandos d'Amour",
    "Artist": "The Police",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, New Wave, Punk"
  },
  {
    "Number": 429,
    "Year": 1975,
    "Album": "Another Green World",
    "Artist": "Brian Eno",
    "Genre": "Electronic",
    "Subgenre": "Experimental, Ambient"
  },
  {
    "Number": 430,
    "Year": 2007,
    "Album": "Vampire Weekend",
    "Artist": "Vampire Weekend",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 431,
    "Year": 2000,
    "Album": "Stories From the City, Stories From the Sea",
    "Artist": "PJ Harvey",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 432,
    "Year": 1973,
    "Album": "Here Come the Warm Jets",
    "Artist": "Brian Eno",
    "Genre": "Rock",
    "Subgenre": "Art Rock, Glam"
  },
  {
    "Number": 433,
    "Year": 1970,
    "Album": "All Things Must Pass",
    "Artist": "George Harrison",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 434,
    "Year": 1972,
    "Album": "#1 Record",
    "Artist": "Big Star",
    "Genre": "Rock",
    "Subgenre": "Power Pop"
  },
  {
    "Number": 435,
    "Year": 1993,
    "Album": "In Utero",
    "Artist": "Nirvana",
    "Genre": "Rock",
    "Subgenre": "Grunge, Alternative Rock"
  },
  {
    "Number": 436,
    "Year": 2002,
    "Album": "Sea Change",
    "Artist": "Beck",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Post Rock"
  },
  {
    "Number": 437,
    "Year": 2008,
    "Album": "Tha Carter III",
    "Artist": "Lil Wayne",
    "Genre": "Hip Hop, Funk / Soul",
    "Subgenre": "RnB/Swing, Screw, Pop Rap, Thug Rap"
  },
  {
    "Number": 438,
    "Year": 1979,
    "Album": "Boys Don't Cry",
    "Artist": "The Cure",
    "Genre": "Rock",
    "Subgenre": "New Wave, Post-Punk"
  },
  {
    "Number": 439,
    "Year": 1985,
    "Album": "Live at the Harlem Square Club, 1963",
    "Artist": "Sam Cooke",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 440,
    "Year": 1985,
    "Album": "Rum Sodomy & the Lash",
    "Artist": "The Pogues",
    "Genre": "Rock, Folk, World, & Country",
    "Subgenre": "Folk Rock, Celtic, Punk"
  },
  {
    "Number": 441,
    "Year": 1977,
    "Album": "Suicide",
    "Artist": "Suicide",
    "Genre": "Electronic, Rock",
    "Subgenre": "New Wave, Experimental"
  },
  {
    "Number": 442,
    "Year": 1978,
    "Album": "Q: Are We Not Men? A: We Are Devo!",
    "Artist": "DEVO",
    "Genre": "Rock",
    "Subgenre": "New Wave"
  },
  {
    "Number": 443,
    "Year": 1977,
    "Album": "In Color",
    "Artist": "Cheap Trick",
    "Genre": "Rock",
    "Subgenre": "Power Pop, Pop Rock, Hard Rock"
  },
  {
    "Number": 444,
    "Year": 1972,
    "Album": "The World Is a Ghetto",
    "Artist": "War",
    "Genre": "Funk / Soul",
    "Subgenre": "Funk"
  },
  {
    "Number": 445,
    "Year": 1976,
    "Album": "Fly Like an Eagle",
    "Artist": "Steve Miller Band",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 446,
    "Year": 1970,
    "Album": "Back in the USA",
    "Artist": "MC5",
    "Genre": "Rock",
    "Subgenre": "Garage Rock, Rock & Roll"
  },
  {
    "Number": 447,
    "Year": 1964,
    "Album": "Getz / Gilberto",
    "Artist": "Stan Getz�/�Joao Gilberto�featuring�Antonio Carlos Jobim",
    "Genre": "Jazz",
    "Subgenre": "Bossa Nova,�Latin Jazz"
  },
  {
    "Number": 448,
    "Year": 1983,
    "Album": "Synchronicity",
    "Artist": "The Police",
    "Genre": "Rock, Pop",
    "Subgenre": "New Wave, Pop Rock"
  },
  {
    "Number": 449,
    "Year": 1978,
    "Album": "Third/Sister Lovers",
    "Artist": "Big Star",
    "Genre": "Rock",
    "Subgenre": "Lo-Fi,�Indie Rock"
  },
  {
    "Number": 450,
    "Year": 1973,
    "Album": "For Everyman",
    "Artist": "Jackson Browne",
    "Genre": "Rock",
    "Subgenre": "Pop Rock, Classic Rock"
  },
  {
    "Number": 451,
    "Year": 2006,
    "Album": "Back to Black",
    "Artist": "Amy Winehouse",
    "Genre": "Funk / Soul, Pop",
    "Subgenre": "Soul"
  },
  {
    "Number": 452,
    "Year": 1971,
    "Album": "John Prine",
    "Artist": "John Prine",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Country, Folk"
  },
  {
    "Number": 453,
    "Year": 1987,
    "Album": "Strictly Business",
    "Artist": "EPMD",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 454,
    "Year": 1971,
    "Album": "Love It to Death",
    "Artist": "Alice Cooper",
    "Genre": "Rock",
    "Subgenre": "Classic Rock"
  },
  {
    "Number": 455,
    "Year": 1984,
    "Album": "How Will the Wolf Survive?",
    "Artist": "Los Lobos",
    "Genre": "Rock, Latin",
    "Subgenre": "Blues Rock"
  },
  {
    "Number": 456,
    "Year": 1978,
    "Album": "Here, My Dear",
    "Artist": "Marvin Gaye",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul"
  },
  {
    "Number": 457,
    "Year": 2005,
    "Album": "Z",
    "Artist": "My Morning Jacket",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 458,
    "Year": 1970,
    "Album": "Tumbleweed Connection",
    "Artist": "Elton John",
    "Genre": "Rock, Folk, World, & Country",
    "Subgenre": "Soft Rock, Country Rock"
  },
  {
    "Number": 459,
    "Year": 1968,
    "Album": "The Drifters' Golden Hits",
    "Artist": "The Drifters",
    "Genre": "Rock, Funk / Soul",
    "Subgenre": "Rhythm & Blues, Soul"
  },
  {
    "Number": 460,
    "Year": 1994,
    "Album": "Live Through This",
    "Artist": "Hole",
    "Genre": "Rock",
    "Subgenre": "Grunge"
  },
  {
    "Number": 461,
    "Year": 1979,
    "Album": "Metal Box",
    "Artist": "Public Image Ltd.",
    "Genre": "Electronic, Rock",
    "Subgenre": "Post-Punk, Dub, Avantgarde, Experimental"
  },
  {
    "Number": 462,
    "Year": 1987,
    "Album": "Document",
    "Artist": "R.E.M.",
    "Genre": "Rock",
    "Subgenre": "None"
  },
  {
    "Number": 463,
    "Year": 1981,
    "Album": "Heaven Up Here",
    "Artist": "Echo and The Bunnymen",
    "Genre": "Rock",
    "Subgenre": "New Wave, Indie Rock"
  },
  {
    "Number": 464,
    "Year": 1987,
    "Album": "Hysteria",
    "Artist": "Def Leppard",
    "Genre": "Rock",
    "Subgenre": "Hard Rock, Arena Rock"
  },
  {
    "Number": 465,
    "Year": 1999,
    "Album": "69 Love Songs",
    "Artist": "The Magnetic Fields",
    "Genre": "Electronic, Rock",
    "Subgenre": "Synth-pop, Indie Rock"
  },
  {
    "Number": 466,
    "Year": 2002,
    "Album": "A Rush of Blood to the Head",
    "Artist": "Coldplay",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Pop Rock"
  },
  {
    "Number": 467,
    "Year": 1987,
    "Album": "Tunnel of Love",
    "Artist": "Bruce Springsteen",
    "Genre": "Rock",
    "Subgenre": "None"
  },
  {
    "Number": 468,
    "Year": 1965,
    "Album": "The Paul Butterfield Blues Band",
    "Artist": "The Paul Butterfield Blues Band",
    "Genre": "Rock, Blues",
    "Subgenre": "Blues Rock, Electric Blues, Chicago Blues, Modern Electric Blues, Harmonica Blues"
  },
  {
    "Number": 469,
    "Year": 1996,
    "Album": "The Score",
    "Artist": "Fugees",
    "Genre": "Hip Hop",
    "Subgenre": "Pop Rap, Conscious"
  },
  {
    "Number": 470,
    "Year": 1985,
    "Album": "Radio",
    "Artist": "L.L. Cool J",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 471,
    "Year": 1974,
    "Album": "I Want to See the Bright Lights Tonight",
    "Artist": "Richard & Linda Thompson",
    "Genre": "Rock",
    "Subgenre": "Classic Rock, Folk Rock"
  },
  {
    "Number": 472,
    "Year": 1987,
    "Album": "Faith",
    "Artist": "George Michael",
    "Genre": "Electronic, Rock, Funk / Soul, Blues, Pop",
    "Subgenre": "Downtempo, Soft Rock, Pop Rock, Synth-pop"
  },
  {
    "Number": 473,
    "Year": 1984,
    "Album": "The Smiths",
    "Artist": "The Smiths",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 474,
    "Year": 2001,
    "Album": "Proxima estacion: Esperanza",
    "Artist": "Manu Chao",
    "Genre": "Rock, Reggae, Latin",
    "Subgenre": "Folk Rock, Reggae, Reggae-Pop"
  },
  {
    "Number": 475,
    "Year": 1979,
    "Album": "Armed Forces",
    "Artist": "Elvis Costello & The Attractions",
    "Genre": "Rock",
    "Subgenre": "New Wave, Pop Rock"
  },
  {
    "Number": 476,
    "Year": 1997,
    "Album": "Life After Death",
    "Artist": "The Notorious B.I.G.",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 477,
    "Year": 1996,
    "Album": "Down Every Road",
    "Artist": "Merle Haggard",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Country"
  },
  {
    "Number": 478,
    "Year": 2002,
    "Album": "All Time Greatest Hits",
    "Artist": "Loretta Lynn",
    "Genre": "Folk, World, & Country",
    "Subgenre": "Country"
  },
  {
    "Number": 479,
    "Year": 1971,
    "Album": "Maggot Brain",
    "Artist": "Funkadelic",
    "Genre": "Rock, Funk / Soul",
    "Subgenre": "P.Funk, Psychedelic Rock"
  },
  {
    "Number": 480,
    "Year": 1995,
    "Album": "Only Built 4 Cuban Linx",
    "Artist": "Raekwon",
    "Genre": "Hip Hop",
    "Subgenre": "None"
  },
  {
    "Number": 481,
    "Year": 2000,
    "Album": "Voodoo",
    "Artist": "D'Angelo",
    "Genre": "Hip Hop, Funk / Soul",
    "Subgenre": "Soul, Funk, Neo Soul"
  },
  {
    "Number": 482,
    "Year": 1986,
    "Album": "Guitar Town",
    "Artist": "Steve Earle",
    "Genre": "Rock, Folk, World, & Country",
    "Subgenre": "Country, Honky Tonk"
  },
  {
    "Number": 483,
    "Year": 1979,
    "Album": "Entertainment!",
    "Artist": "Gang of Four",
    "Genre": "Rock",
    "Subgenre": "Post-Punk, New Wave"
  },
  {
    "Number": 484,
    "Year": 1972,
    "Album": "All the Young Dudes",
    "Artist": "Mott the Hoople",
    "Genre": "Rock",
    "Subgenre": "Classic Rock, Glam"
  },
  {
    "Number": 485,
    "Year": 1994,
    "Album": "Vitalogy",
    "Artist": "Pearl Jam",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Hard Rock"
  },
  {
    "Number": 486,
    "Year": 1975,
    "Album": "That's the Way of the World",
    "Artist": "Earth, Wind & Fire",
    "Genre": "Funk / Soul",
    "Subgenre": "Soul, Funk, Disco"
  },
  {
    "Number": 487,
    "Year": 1983,
    "Album": "She's So Unusual",
    "Artist": "Cyndi Lauper",
    "Genre": "Electronic, Rock",
    "Subgenre": "Pop Rock, Synth-pop"
  },
  {
    "Number": 488,
    "Year": 1985,
    "Album": "New Day Rising",
    "Artist": "Husker Du",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock, Hardcore, Punk"
  },
  {
    "Number": 489,
    "Year": 1976,
    "Album": "Destroyer",
    "Artist": "KISS",
    "Genre": "Rock",
    "Subgenre": "Hard Rock"
  },
  {
    "Number": 490,
    "Year": 1973,
    "Album": "Tres hombres",
    "Artist": "ZZ Top",
    "Genre": "Rock",
    "Subgenre": "Blues Rock, Classic Rock"
  },
  {
    "Number": 491,
    "Year": 1967,
    "Album": "Born Under a Bad Sign",
    "Artist": "Albert King",
    "Genre": "Funk / Soul, Blues",
    "Subgenre": "Electric Blues, Rhythm & Blues, Soul"
  },
  {
    "Number": 492,
    "Year": 1983,
    "Album": "Touch",
    "Artist": "Eurythmics",
    "Genre": "Electronic, Pop",
    "Subgenre": "New Wave, Synth-pop"
  },
  {
    "Number": 493,
    "Year": 2002,
    "Album": "Yankee Hotel Foxtrot",
    "Artist": "Wilco",
    "Genre": "Rock",
    "Subgenre": "Alternative Rock"
  },
  {
    "Number": 494,
    "Year": 2007,
    "Album": "Oracular Spectacular",
    "Artist": "MGMT",
    "Genre": "Electronic, Rock, Pop",
    "Subgenre": "Synth-pop, Indie Rock"
  },
  {
    "Number": 495,
    "Year": 1972,
    "Album": "Give It Up",
    "Artist": "Bonnie Raitt",
    "Genre": "Rock",
    "Subgenre": "Blues Rock"
  },
  {
    "Number": 496,
    "Year": 1969,
    "Album": "Boz Scaggs",
    "Artist": "Boz Scaggs",
    "Genre": "Rock",
    "Subgenre": "Pop Rock"
  },
  {
    "Number": 497,
    "Year": 2001,
    "Album": "White Blood Cells",
    "Artist": "The White Stripes",
    "Genre": "Rock",
    "Subgenre": "Indie Rock, Alternative Rock, Blues Rock, Garage Rock"
  },
  {
    "Number": 498,
    "Year": 1989,
    "Album": "The Stone Roses",
    "Artist": "The Stone Roses",
    "Genre": "Rock",
    "Subgenre": "Indie Rock"
  },
  {
    "Number": 499,
    "Year": 1971,
    "Album": "Live in Cook County Jail",
    "Artist": "B.B. King",
    "Genre": "Blues",
    "Subgenre": "Electric Blues"
  },
  {
    "Number": 500,
    "Year": 1998,
    "Album": "Aquemini",
    "Artist": "OutKast",
    "Genre": "Hip Hop",
    "Subgenre": "Reggae, Gangsta, Soul, Conscious"
  }
]

const seedAlbum = () => Album.bulkCreate(albumData);

module.exports = seedAlbum;