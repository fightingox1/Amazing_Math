function SetUpGames() {
  AddProject("Hextris",          "img/Hextris.png",       "Projects/Hextris/index.html");
  AddProject("2048",             "img/2048.png",          "Projects/2048/index.html");
  AddProject("Tetris",           "img/Tetris.jpg",        "Projects/Tetris/index.html");
  AddProject("Cookie Clicker",   "img/CookieClicker.jpg", "Projects/Cookie Clicker/index.html");
  AddProject("Flappy Bird",      "img/FlappyBird.jpeg",    "Projects/FlappyBird/index.html");
  AddProject("Javascript Racer", "img/JsRacer.png",       "Projects/JsRacer/index.html");
  AddProject("Hit The Target",   "img/HitTheTarget.png",  "Projects/HitTheTarget/index.html");
  AddProject("Snake",            "img/Snake.png",         "Projects/Snake/index.html");

  LoadAnnouncment("Test", "Hello I was a bit bored on tuesday and decided to create this announcment system. I dont know if il use this a lot but it is here. When you close this it should be gone forever. If you get the same announcment twice than I need to know because it means that my system is not working");
}

var PathToLoad;

function LoadAnnouncment(Name, Value) {

}

function CloseAnnouncment() {
  document.getElementById("Announcment").id = "hidden";
}

function AddProject(PrjName, ImgSrc, Game) {
  document.getElementById("GamesList").innerHTML +=
    "<div class='Game'><div class='GameName'>"
      +
        PrjName +
        "<hr class='solid'>" +
        "<img src='" + ImgSrc + "' class='GameImg'>" +
        "<button class='GameButton' onclick='Load(" + '"' + Game + '"' + ")'>Play Game</button>"
      +
    "</div></div>"
}

function Load(Input) {
  //alert(Input);
  window.location.href = Input;
}
