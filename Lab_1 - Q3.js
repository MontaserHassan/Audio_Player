//////////////////////////////////////////////////// First div /////////////////////////////////////////////////////

var butPlay = document.getElementById("buttonPlay");
var butPause = document.getElementById("buttonPause");
var butRepeat = document.getElementById("buttonRepeat");
var butShuffle = document.getElementById("buttonShuffle");
var aud = document.getElementById("aud");
var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");
var allSongs = [
  "./Audio/Song_1.mp3",
  "./Audio/Song_4.mp3",
  "./Audio/Song_2.mp3",
  "./Audio/Song_3.mp3",
];

//////////////////////////////////////////////////// Second div /////////////////////////////////////////////////////

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playAudio() {
  aud.play();
}
function pauseAudio() {
  aud.pause();
}

butPlay.addEventListener("click", playAudio);
butPause.addEventListener("click", pauseAudio);
butRepeat.addEventListener("click", () => {
  aud.addEventListener("ended", () => {
    aud.play();
  });
});
butShuffle.addEventListener("click", () => {
  aud.src = `${allSongs[getRandomInt(4)]}`;
  aud.play();
});
//////////////////////////////////////////////////// Third div /////////////////////////////////////////////////////

song1.addEventListener("click", () => {
  aud.src = `${allSongs[0]}`;
  aud.play();
});
song2.addEventListener("click", () => {
  aud.src = `${allSongs[1]}`;
  aud.play();
});
song3.addEventListener("click", () => {
  aud.src = `${allSongs[2]}`;
  aud.play();
});

song4.addEventListener("click", () => {
  aud.src = `${allSongs[3]}`;
  aud.play();
});

// function repeatAudio() {
//     if(aud.loop != true){
//         aud.loop = true;
//         aud.play();
//     } else {
//         aud.loop = false;
//         aud.currentTime = 0;
//         aud.pause();
//         // aud.play();
//     }
// }
