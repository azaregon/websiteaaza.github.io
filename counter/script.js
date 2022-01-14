var count = 0;
document.getElementById("count").innerHTML = count;

function countUp(y) {
  window.count = y + 1; //globalling new value of count
  document.getElementById("count").innerHTML = count;
}

function countDown(y) {
  window.count = y - 1; //globalling new value of count
  document.getElementById("count").innerHTML = count;
}

