var bgVid1 = document.getElementById("bgVid1");
var bgVid2 = document.getElementById("bgVid2");
var btnPause = document.getElementById("btnPause");

function videoFade() {
  bgVid1.classList.add("stopfade");
}

bgVid1.addEventListener("ended", function() {
  bgVid1.pause();   //Only functional if "loop" is removed
  videoFade();      //IE10
})