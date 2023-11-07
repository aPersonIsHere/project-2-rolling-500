const ctx = document.getElementById('myChart');
// const albumData = require('../../seeds/masterSeed');
console.log(albumData);
  

const dateFilter = (startYear, endYear) => {
  const data = albumData.filter(x => x.Year >= startYear && x.Year < endYear).length
  return data;
};

const albumsbyArtist = artistCount(albumData);

console.log(albumsbyArtist);
console.log(albumsbyArtist['Bob Dylan']);

function artistCount(albumData) {
  const artistCount = {};

  albumData.forEach(album => {
    const artist = album.Artist;

    if (artist) {
      if (artistCount[artist]) {
        artistCount[artist]++;
      } else {
        artistCount[artist] = 1;
      }
    }
  });

  return artistCount;
};

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1950 - 1960', '1960 - 1970', '1970 - 1980', '1980 - 1990', '1990 - 2000', '2000 - 2010', '2010 - 2020'],
    datasets: [{
      label: 'Albums by Decade',
      data: [dateFilter(1950, 1960), dateFilter(1960, 1970), dateFilter(1970, 1980), dateFilter(1980, 1990), dateFilter(1990, 2000), dateFilter(2000, 2010), dateFilter(2010, 2020)],
      borderWidth: 2,
      backgroundColor: ['Blue', 'Yellow', 'Orange', 'Green', 'Purple', 'Pink', 'Red']
    },
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});