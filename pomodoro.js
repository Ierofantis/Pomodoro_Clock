var time = Math.floor(14999);
var running = false;
var mins = Math.floor(time / 10 / 60);

$("#startPause").click(startPause);
$("#reset").click(reset);
$("#increase").click(increase);
$("#decrease").click(decrease);

function startPause() {
  if (!running) {
    running = true;
    decrement();
    document.getElementById("startPause").innerHTML = "Pause";
  } else {
    running = false;
    document.getElementById("startPause").innerHTML = "Resume";
  }
}

function decrement() {
  if (running && time > 0) {
    setTimeout(function() {
      time--;
      mins = Math.floor(time / 10 / 60);
      secs = Math.floor(time / 10 % 60);
      tenths = time % 10;
      updateClock(mins, secs, tenths);
      decrement();
    }, 100);

  }
}

function increase() {
  time += 600;
  var mins = Math.floor(time / 10 / 60);
  var secs = Math.floor(time / 10 % 60);
  var tenths = time % 10;
  updateClock(mins, secs, tenths);
}

function decrease() {
  if (time < 1200) {
    time = 600;
  }
  time -= 600;
  var mins = Math.floor(time / 10 / 60);
  var secs = Math.floor(time / 10 % 60);
  var tenths = time % 10;
  updateClock(mins, secs, tenths);
}

function reset() {
  document.getElementById("output").innerHTML = "25:00";
  running = false;
  time = 14999;
  document.getElementById("startPause").innerHTML = "Start";

}

function updateClock(m, s, t) {
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("output").innerHTML = m + ":" + s;
}