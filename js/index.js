function search() {
  const movieTag = document.getElementById("movieTag");
  const movie = movieTag.value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!movie) {
    errorMsg.textContent = "Please enter a movie title.";
    return;
  }

  errorMsg.textContent = "";
  const apiKey = "d13c70eb"; // Replace with your own key
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "False") {
        errorMsg.textContent = "Movie not found. Please try another title.";
        return;
      }

      document.getElementById("poster").src = data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x450?text=No+Image";
      document.getElementById("title").textContent = data.Title;
      document.getElementById("tagLine").textContent = data.Genre;
      document.getElementById("plot").textContent = data.Plot;
      document.getElementById("director").textContent = data.Director;
      document.getElementById("actors").textContent = data.Actors;
      document.getElementById("year").textContent = data.Year;
      document.getElementById("runtime").textContent = data.Runtime;
      document.getElementById("rating").textContent = data.imdbRating;
    })
    .catch(error => {
      errorMsg.textContent = "An error occurred while fetching movie data.";
      console.error("Error:", error);
    });
}
