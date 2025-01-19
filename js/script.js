      const video = document.querySelector("video");
      const playPause = document.querySelector(".play-pause");
      const progressBar = document.querySelector(".progress-bar");
      const progress = document.querySelector(".progress");
      const volume = document.querySelector(".volume");
      const fullscreen = document.querySelector(".fullscreen");
      const playButton = document.querySelector(".play-button"); // Get the big play button element
      const videoPlayer = document.querySelector(".video-player"); // Get the video player container

      // Play/Pause functionality
      function togglePlayPause() {
        if (video.paused) {
          video.play();
          videoPlayer.classList.add("playing");
        } else {
          video.pause();
          videoPlayer.classList.remove("playing");
        }
      }

      playPause.addEventListener("click", togglePlayPause);
      playButton.addEventListener("click", togglePlayPause); // Add click listener to big play button

      // Progress bar functionality
      video.addEventListener("timeupdate", () => {
        const percentage = (video.currentTime / video.duration) * 100;
        progress.style.width = `${percentage}%`;
      });

      progressBar.addEventListener("click", (event) => {
        const progressBarWidth = progressBar.offsetWidth;
        const clickPosition = event.offsetX;
        const newTime = (clickPosition / progressBarWidth) * video.duration;
        video.currentTime = newTime;
      });

      // Volume functionality (basic)
      volume.addEventListener("click", () => {
        if (video.muted) {
          video.muted = false;
          volume.classList.remove("muted");
        } else {
          video.muted = true;
          volume.classList.add("muted");
        }
      });

      // Fullscreen functionality
      fullscreen.addEventListener("click", () => {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          /* Firefox */
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          /* IE/Edge */
          video.msRequestFullscreen();
        }
      });

      // Hide the big play button when the video starts playing
      video.addEventListener("play", () => {
        playButton.style.display = "none";
      });

      // Show the big play button when the video is paused
      video.addEventListener("pause", () => {
        playButton.style.display = "block";
      });

      // Show the big play button initially
      playButton.style.display = "block";

// nimble - js
