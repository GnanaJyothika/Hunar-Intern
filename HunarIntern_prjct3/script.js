function showDetails(title) {
    document.getElementById("movie-title").textContent = title;
    document.getElementById("movie-details").style.display = "block";
}

function closeDetails() {
    document.getElementById("movie-details").style.display = "none";
}

function playMovie() {
    alert("Playing " + document.getElementById("movie-title").textContent + "...");
    closeDetails();
}
