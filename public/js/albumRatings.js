// Posting rating to DB
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
      alert('Error adding rating. You must have an account to cast a rating.')
    }
  }
});