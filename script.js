function SetUpGames() {
  AddProject("Hextris",          "img/Hextris.png",       "Projects/Hextris/index.html");
  AddProject("2048",             "img/2048.png",          "Projects/2048/index.html");
  AddProject("Tetris",           "img/Tetris.jpg",        "Projects/Tetris/index.html");
  AddProject("Chrome Dino Game", "img/DinoGame",          "Projects/DinoGame/index.html");
  
  AddProject("Flappy Bird",      "img/FlappyBird.jpeg",   "Projects/FlappyBird/index.html");
  AddProject("Snake",            "img/Snake.png",         "Projects/Snake/index.html");
  AddProject("Pac Man",          "img/PacMan.png",        "Projects/PacMan/index.html");
  AddProject("Javascript Racer", "img/JsRacer.png",       "Projects/JsRacer/index.html");
  
  AddProject("Space Company",    "img/SpaceCompany.png",  "Projects/SpaceCompany/index.html");
  AddProject("Cookie Clicker",   "img/CookeClickTins.jpg", "Projects/Cookie Clicker/index.html");
  AddProject("Hit The Target",   "img/HitTheTarget.png",  "Projects/HitTheTarget/index.html");
  AddProject("Doge The Lava",    "img/DogeLava.png",      "Projects/DogeLava/index.html");
  
  LoadAnnouncment("ChangeLog1", "Change Log 0.5", "Bonjour, new games have been added to the website including a new clicker game called Space Company. It has some very simple UI but overall I have found it to be a fun game and it kept my attention for more than 20 mins. Also it works offline. Other than space company I added in Pac-Man, The Dino Game, and Doge the Lava");
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

function LoadAnnouncment(Name, Title, Value) {
  var cookieVal = getCookie(Name);
  
  if (cookieVal == null) {
    document.getElementById("AnnouncmentNameText").innerHTML = Title;
    document.getElementById("AnnouncmentText").innerHTML = Value;
    document.cookie = Name + "=loaded;";
  } else {
    document.getElementById("Announcment").id = "hidden"; 
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
