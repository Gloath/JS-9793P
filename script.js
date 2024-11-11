const countButton = document.getElementById("count-button")
countButton.addEventListener("click", function() {
    const count = document.getElementById("count");
    let countNumber = Number(count.innerHTML);
    countNumber++;
    count.innerHTML = countNumber;
    if(countNumber % 5 == 0 ) {
        alert("Hadi dinlen biraz")
    }
});

const birdAudioPlay = document.getElementById("birdAudioPlay")
const birdIcon = document.getElementById("birdIcon")
 
birdIcon.addEventListener("click", function(){
    if (birdAudioPlay.paused) {
        birdAudioPlay.play()
        birdIcon.className = "fa-solid fa-music"
    } else {
        birdAudioPlay.pause()
        birdIcon.className = "fa-solid fa-dove"
    }


})


focusIcon.addEventListener("click", function(){
    if (focusAudioPlay.paused) {
        focusAudioPlay.play()
        focusIcon.className = "fa-solid fa-music"
    } else {
        focusAudioPlay.pause()
        focusIcon.className = "fa-solid fa-moon"
    }


})


rainyIcon.addEventListener("click", function(){
    if (rainyAudioPlay.paused) {
        rainyAudioPlay.play()
        rainyIcon.className = "fa-solid fa-music"
    } else {
        rainyAudioPlay.pause()
        rainyIcon.className = "fa-solid fa-cloud-rain"
    }


})


futbolIcon.addEventListener("click", function(){
    if (futbolAudioPlay.paused) {
        futbolAudioPlay.play()
        futbolIcon.className = "fa-solid fa-music"
    } else {
        futbolAudioPlay.pause()
        futbolIcon.className = "fa-solid fa-futbol"
    }


})

const volumeInput = document.getElementById("volume-input");
volumeInput.addEventListener("input", function(){
    birdAudioPlay.volume = volumeInput.value / 100;
    focusAudioPlay.volume = volumeInput.value / 100;
    rainyAudioPlay.volume = volumeInput.value / 100;
    futbolAudioPlay.volume = volumeInput.value / 100;


})