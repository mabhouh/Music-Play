let progres = document.getElementById("progress");
let song = document.getElementById("song");
let controlsicons = document.getElementById("controlsicons");

song.onloadedmetadata= function(){
    progres.max = song.duration;
    progres.value = song.currentTime;
}

function playPause(){
    if(controlsicons.classList.contains("fa-pause")){
        song.pause();
        controlsicons.classList.remove("fa-pause");
        controlsicons.classList.add("fa-play");
    }

    else{
        song.play();
        controlsicons.classList.add("fa-pause");
        controlsicons.classList.remove("fa-play");
    }
}

if(song.play){
    setInterval(()=>{
        progres.value = song.currentTime;
    },500);
}

progres.onchange = function(){
    song.play();
    song.currentTime = progres.value;
    controlsicons.classList.add("fa-pause");
    controlsicons.classList.remove("fa-play");
}