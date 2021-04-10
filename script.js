document.getElementById("header").onclick = function() {changeTitle()};
function changeTitle() {
  var header;
  var lofiradio;
  header = document.getElementById("header")
  lofiradio = "Lofi Radio"
  switch(header.innerHTML.slice(-1)) {
    case "o":
      header.innerHTML = lofiradio.concat(" ❤")
      break;
    case "❤":
      header.innerHTML = lofiradio.concat(" :D")
      break;
    default:
      header.innerHTML = lofiradio
}
}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create YouTube iFrame
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '1280',
    width: '720',
    //videoId: "5qap5aO4i9A",
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'listtype': 'playlist',
      'list': 'PLhAnl3CVHub1LtXOPmdgFqQTgCAuql-jS',
      'loop': 1},
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Player is ready, run these
function onPlayerReady(event) {
        player.setVolume(50);
      }

//Not 100% sure what this does
var done = false;
function onPlayerStateChange(event) {
  console.log("PlayerStateChange");
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
}
function stopVideo() {
  player.stopVideo(); //This feels pointless, but I don
}

function toggleMute() {
  console.log("Running func!");
  console.log(player.isMuted());
  if (!player.isMuted()) {
    console.log("Muting!")
    player.mute();
    document.getElementById("mute").innerHTML = "&#128263";
  }
  else {
   player.unMute();
   document.getElementById("mute").innerHTML = "&#128263";
 }
}

function openNav() {
  document.getElementById("navbar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("openbtn").style.opacity = "0";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("openbtn").style.opacity = "1";
}

var color;
color = "blue";
document.body.className += color.concat("grad");
document.getElementById("gradient_selector").className += "redgrad";

function nextGrad() {
  document.body.classList.toggle("bluegrad");
  document.body.classList.toggle("redgrad");
  document.getElementById("gradient_selector").classList.toggle("bluegrad");
  document.getElementById("gradient_selector").classList.toggle("redgrad");
  console.log("!");
}