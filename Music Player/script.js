let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Update the progress bar max value when the song's metadata is loaded
song.onloadedmetadata = function () {
  progress.max = song.duration; // Set max to song duration
};

// Play/Pause functionality
function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

// Update progress bar every 500ms while the song is playing
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime; // Sync progress bar with song's current time
  }, 500);
}

// Change song's current time when the user changes the progress bar position
progress.onchange = function () {
  song.currentTime = progress.value; // Update song's current time to match the slider
  if (song.paused) {
    song.play(); // Ensure the song resumes if the user drags the slider
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
};
