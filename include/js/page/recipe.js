const video = document.querySelector("#recipeVideo");
if (video) {
	const thumbnail = video.querySelector(".thumbnail");
	const playButton = video.querySelector(".play-button");

	// Load the IFrame Player API code asynchronously.
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/player_api";

	const clickPlay = function(){
		video.removeEventListener("click", clickPlay);

		video.insertBefore(tag, video.firstChild);
		thumbnail.style.display = "none";
		playButton.style.display = "none";
	};
	video.addEventListener("click", clickPlay);

	// Replace the 'ytplayer' element with an <iframe> and
	// YouTube player after the API code downloads.
	var player;
	function onYouTubePlayerAPIReady() {
		player = new YT.Player('ytplayer', {
			height: '360',
			width: '640',
			playerVars: {
				'playsinline': 1,
				'rel': 0,
				'showinfo': 0,
				'controls': 0,
				'autoplay': 1
			},
			events: {
				'onReady': onPlayerReady
			},
			videoId: video.dataset.id
		});
	}

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		event.target.playVideo();
	}
}
