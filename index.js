import Timer from './timer.js'


/* slider */
const bpmSlider = document.getElementById("bpmSlider");
const bpmText = document.getElementById("bpmText");
bpmText.innerHTML = Math.round(bpmSlider.value);
var bpm = Math.round(bpmSlider.value);

bpmSlider.oninput = function() {
    bpmText.innerHTML = Math.round(this.value);
    bpm = Math.round(bpmSlider.value);
    beat.timeInterval = 60000 / bpm
}

// bpmSlider.addEventListener("mouseup", function() {
//     stopClicks();
//     if(isPlaying) playClicks();
// })

/* play button */
const playButton = document.getElementById("playButton")
var isPlaying = false;

playButton.addEventListener("click", onPlayPress)

function onPlayPress () {
    if(!isPlaying) {
        //start playing audio
        playButton.style.backgroundImage = "url(assets/pauseSymbol.png)"
        startClicks()
    } else {
        //stop playing audio
        playButton.style.backgroundImage = "url(assets/playSymbol.png)"
        stopClicks()
    }
    isPlaying = !isPlaying
}

function playClick (beat, audioID) {
    clicks[audioID][beat-1].play()
    console.log("audioID: " + audioID + " beat: " + beat)
}

var clicks = [
    [new Audio('assets/metronome-85688.mp3'), new Audio('assets/metronome-85688.mp3'), new Audio('assets/metronome-85688.mp3'), new Audio('assets/metronome-85688.mp3')],
    [new Audio('assets/metronome-65396_4sycK5sb.mp3'), new Audio('assets/metronome-65396_4sycK5sb.mp3'), new Audio('assets/metronome-65396_4sycK5sb.mp3'), new Audio('assets/metronome-65396_4sycK5sb.mp3')]
]
var numPerMeasure = 4;
var beat = [new Timer(playClick, 60000 / bpm, 0), new Timer(playClick, 60000 / bpm, 1)];

function startClicks () {
    for(let i = 0; i < beat.length; i++) {
        setTimeout(beat[i].start, 250 * i);
    }
}

function stopClicks () {
    for(let i = 0; i < beat.length; i++) {
        beat[i].stop();
    }
}


