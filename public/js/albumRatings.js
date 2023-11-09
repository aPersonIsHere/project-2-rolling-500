// document.querySelector(".albums").addEventListener("click", function(event) {
//   // const albumId = event.target.parentElement.dataset.id;
//   console.log(event.target.children[0]);
//   if (event.target.matches(".ratings")) {
//     console.log(event.target.dataset.id);
//   }
//   // const rating = event.target.textContent;
//   // console.log(rating);
//   // console.log(albumId);
// });

document.querySelector(".albums").addEventListener("click", async function(event) {
  const target = event.target;

  // Check if the clicked element is a button with the class "btn" inside an element with the class "ratings"
  if (target.classList.contains("btn") && target.parentElement.classList.contains("ratings")) {
    const albumId = target.parentElement.dataset.id;
    const rating = target.textContent;
    console.log("Album ID: " + albumId);
    console.log("Rating: " + rating);
    const response = await fetch("/api/ratings", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({album_id: albumId, rating})
    })
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Error adding rating.')
    }
  }
});