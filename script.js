//Just a fun little function, helped me understand JS
//I've never used JS before this project
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

//Setting up "stations"
var userIdList;
if (!userIdList) {
  console.log("No userIdList, using default...");
  var videoIdList = ["5qap5aO4i9A", "7NOSDKb0HlU", "rc9cjjEun_k", "21qNxnCS8WU", "IjMESxJdWkg"];
}
else {var videoIdList = userIdList;}
console.log("videoIdList: ", videoIdList);

var lastStation;
if (!lastStation) {
  console.log("No lastStation, using default...");
  var currentStation = 0;
}
else {currentStation = lastStation;}

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
    videoId: videoIdList[currentStation],
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      // Playlist arguments are no longer used in this version of the site
      //'listtype': 'playlist',
      //'list': 'PLhAnl3CVHub1LtXOPmdgFqQTgCAuql-jS',
      'loop': 1},
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
        player.setVolume(50);
      }

//Not 100% sure what this does
var done = false;
function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
}

function stopVideo() {
  player.stopVideo(); //This feels pointless, whatever
}

function nextVid() {
  // player.nextVideo();
  if (currentStation >= videoIdList.length - 1) {currentStation = 0;}
  else {currentStation++;}
  loadNewVid();
}

function prevVid() {
  // player.previousVideo();
  if (currentStation <= 0) {currentStation = videoIdList.length - 1;}
  else {currentStation--;}
  loadNewVid();
}

function loadNewVid() {
  console.log("currentStation: ", currentStation);
  console.log("Loading video ID: ", videoIdList[currentStation]);
  player.loadVideoById(videoIdList[currentStation]);
  console.log("Loaded.");
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

document.body.classList += "bluegrad";
document.getElementById("gradient_selector").classList += "redgrad";
//Gradient selector
function nextGrad() {
  document.body.classList.toggle("bluegrad");
  document.body.classList.toggle("redgrad");
  document.getElementById("gradient_selector").classList.toggle("bluegrad");
  document.getElementById("gradient_selector").classList.toggle("redgrad");
  console.log("Gradient switched!");
}
