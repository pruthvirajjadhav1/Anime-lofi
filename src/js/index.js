const bgVideo = document.getElementById("bg-video");
const player  = document.getElementById("player");

const video_urls = new URL("./backgrounds.json")

fetch(video_urls)
 .then(function(response) {
   if (!response.ok) {
     throw new Error("HTTP error, status = " + response.status);
   }
   return response.json();
 })
 .then(function(video_urls) {
     bgVideo.setAttribute("src", video_urls[Math.floor(Math.random() * video_urls.length)]['url'];);
     bgVideo.playbackRate = 0.5;
 })
 .catch(function(error) {
   console.log(error.message);
 });
