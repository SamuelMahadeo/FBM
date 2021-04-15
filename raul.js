var raulcount = 1;
var song = document.getElementById('raulsong');
var zubssong = document.getElementById('zubssong');
var mathew = document.getElementById('mathew');
var rae = document.getElementById('rae');
var sam = document.getElementById('sam');

function raul(){
  if (raulcount > 15){
      raulcount = 1;
  }
  raulText = "about images/raul/raul" + raulcount + ".jpg";
  raul = document.getElementById('raul');
  raul.src = raulText
  raulcount++;
  console.log(raulcount);
}

function playSong(input){
  if (input == "raul"){
    song.play();
  }
  if (input == "zubs"){
    zubssong.play();
  }
  if(input == "mathew"){
    mathew.play();
  }
  if(input == "rae"){
    rae.play();
  }
  if(input == "sam"){
    sam.play();
  }
}

function stopSong(input){
  if (input == "raul"){
    song.pause();
  }
  if (input == "zubs"){
    zubssong.pause();
  }
  if (input == "mathew"){
    mathew.pause();
  }
  if(input == "rae"){
    rae.pause();
  }
  if(input == "sam"){
    sam.pause();
  }
}

setInterval(raul, 1500);