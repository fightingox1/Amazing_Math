function SetUpGames() {
  AddProject("Hextris",          "img/Hextris.png",            "Projects/Hextris/index.html");
  AddProject("2048",             "img/2048.png",               "Projects/2048/index.html");
  AddProject("Tetris",           "img/Tetris.jpg",             "Projects/Tetris/index.html");
  AddProject("Cookie Clicker",   "img/CookeClickTins.jpg", "Projects/Cookie Clicker/index.html");
  AddProject("Flappy Bird",      "img/FlappyBird.jpeg",        "Projects/FlappyBird/index.html");
  AddProject("Javascript Racer", "img/JsRacer.png",            "Projects/JsRacer/index.html");
  AddProject("Hit The Target",   "img/HitTheTarget.png",       "Projects/HitTheTarget/index.html");
  AddProject("Snake",            "img/Snake.png",              "Projects/Snake/index.html");

  LoadAnnouncment("HelloAnnouncment", " Hello, This is a test annoncment. I have no use for this system, I just added it. Plese ignore this and close. If it pops back up please noify me and I will fix.");
}

var PathToLoad;

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

function LoadAnnouncment(Name, Value) {
  if (getCookie(Name) != null) {
    alert("does exsist");
    document.getElementById("AnnouncmentNameText").innerHTML = Name;
    document.getElementById("AnnouncmentText").innerHTML = Value;
    document.cookie = Name + "=true";
  } else {
    if (!Request.Cookies[Name]["true"]) {
      alert("no opened");
    } else {
      alert("opened");
    }
  }
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
