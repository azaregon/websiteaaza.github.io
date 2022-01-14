function getmaxnum (){
	max = document.getElementById("max-num").value;
  windowmax = parseInt(max);
  console.log(parseInt(max));
}

function random() {
  rand = Math.floor(Math.random() * max);
  if (rand < 10){
  	rand = "0" + rand;
  }
  document.getElementById("show").innerHTML= rand;
  
}
