var mouse_x = 0;
var mouse_y = 0;
var mouseDown = false;

var keydown = -1;

document.addEventListener("keydown", function(event) {
    keydown = event.code;
});

document.addEventListener("keyup", function(event) {
    keydown = -1;
});

document.addEventListener("mousedown", () => {
  mouseDown = true;
});

document.addEventListener("mouseup", () => {
  mouseDown = false;
});

document.addEventListener("mousemove", () => {
  mouse_x = event.clientX;
  mouse_y = event.clientY;
});

function KeyDown(keycode) {
  if (keycode.length > 1) {
    return keycode == keydown;
  } else {
    if (keycode == (0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)) {
      return ("Digit" + keycode) == keydown;
    } else if (keycode == "Up" || keycode == "Down" || keycode == "Left" || keycode == "Right") {
      return ("Arrow" + keycode) == keydown;
    } else {
      return ("Key" + keycode) == keydown;
    }
  }
}

function GetMousePos() {
  return [mouse_x, mouse_y];
}

function MouseButtonDown(button) {
  return mouseDown;
}
