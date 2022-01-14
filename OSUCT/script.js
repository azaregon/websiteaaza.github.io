var right = 0;
var left = 0;
var rightKey = "s";
var leftKey = "a";

function assignKey() {
  rightKey = document.getElementById("rightclick").value;
  leftKey = document.getElementById("leftclick").value;
  window.rightKey = Srtring(rightKey);
  window.leftKey = Srtring(leftKey);
}



function defright(y) {
  window.right = y + 1; //globalling new value of count
  document.getElementById("rc").innerHTML = right;
  var total = right + left;
  document.getElementById("total-count").innerHTML = "total click: " + total;
}

function defleft(y) {
  window.left = y + 1; //globalling new value of count
  document.getElementById("lc").innerHTML = left;
  var total = right + left;
  document.getElementById("total-count").innerHTML = "total click: " + total;
}

function reset() {
  window.right = 0;
  document.getElementById("rc").innerHTML = right;
  window.left = 0;
  document.getElementById("lc").innerHTML = left;
  var total = 0;
  document.getElementById("total-count").innerHTML = "total click: " + total;
}

function settingShow() {
  var x = document.getElementById("wrapper");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

window.addEventListener('keydown', (event) => {
  if (event.key === window.rightKey) {
    event.preventDefault();
    defright(right);
  }
  if (event.key === window.leftKey) {
    event.preventDefault(left);
    defleft(left);
  }
})
