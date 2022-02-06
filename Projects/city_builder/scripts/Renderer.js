const canvas = document.getElementById("game_canvas");
const ctx = canvas.getContext("2d");

requestAnimationFrame(UpdateGame);

var zoom = 30;
const Size_x = 50;
const Size_y = 50;

var cam_x = 0;
var cam_y = 0;

function Zoom(amount) {
  zoom += amount;
  if (zoom > 100) {
    zoom = 100;
  }
  if (zoom < 30) {
    zoom = 30;
  }
}

function MoveCamera(amount_x, amount_y) {
  cam_x += amount_x;
  cam_y += amount_y;
}

function RendererTexture(name, img) {
  this.name = name;
  this.img = img;

  this.Draw = function(x, y, size_x, size_y) {
    ctx.drawImage(img, x, y, size_x, size_y);
  }
}

var Colors = [];
var Game_Textures = []
function AddColor(color) {
  Colors[Colors.length] = color;
}
function LoadTexture(name, src) {
  var image = new Image();
  image.src = src;
  Game_Textures[Game_Textures.length] = new RendererTexture(name, image);
}

var HoveredTile = [-1, -1]

var City_Grid = new Array(Size_x);
for (var i = 0; i < Size_x; i++)
    City_Grid[i] = new Array(Size_y);

var Terrain_Grid = new Array(Size_x);
for (var i = 0; i < Size_x; i++)
    Terrain_Grid[i] = new Array(Size_y);

for (var x = 0; x < Size_x; x++) {
  for (var y = 0; y < Size_y; y++) {
    City_Grid[x][y] = 0;
    Terrain_Grid[x][y] = 0;
  }
}

function SetTile(x, y, id) {
  if (x >= 0 && y >= 0)
  if (grid == "Terrain")
    Terrain_Grid[x][y] = id;
  else if (grid == "City")
    City_Grid[x][y] = id;
}

function GetTile(x, y) {
  if (x >= 0 && y >= 0 && x < Size_x && y < Size_y)
    if (grid == "Terrain")
      return Terrain_Grid[x][y];
    else if (grid == "City")
      return City_Grid[x][y];
  else
    return -1;
}

var GameUpdate = function() {};
var InputUpdate = function() {};
function SetUpdate(UpdateFunction) {
  GameUpdate = UpdateFunction;
}
function SetInputUpdate(UpdateFunction) {
  InputUpdate = UpdateFunction;
}

function UpdateGame() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  GameUpdate();
  Renderer_Update();
  InputUpdate();

  requestAnimationFrame(UpdateGame);
}

var grid = "Terrain";
function SetUpdateGrid(grid_name) {
  grid = grid_name;
}

function Renderer_Update() {
  var xCenter = (zoom * Size_x) / 2;
  var xCenter_2 = window.innerWidth / 2;

  var yCenter = (zoom * Size_y) / 2;
  var yCenter_2 = window.innerHeight / 2;

  for (var x = 0; x < Size_x; x++) {
    for (var y = 0; y < Size_y; y++) {

      var xPos = (x * zoom) + (xCenter_2 - xCenter);
      var yPos = (y * zoom) + (yCenter_2 - yCenter);

      xPos += cam_x;
      yPos += cam_y;

      ctx.fillStyle = Colors[Terrain_Grid[x][y]];
      var DrewTextre = false;
      for (var i = 0; i < Game_Textures.length; i++) {
        if (Colors[Terrain_Grid[x][y]] == Game_Textures[i].name) {
          DrewTextre = true;
          Game_Textures[i].Draw(xPos - 1, yPos - 1, zoom + 2, zoom + 2);
          break;
        }
      }
      if (!DrewTextre)
        ctx.fillRect(xPos - 1, yPos - 1, zoom + 2, zoom + 2);

      ctx.fillStyle = Colors[City_Grid[x][y]];
      DrewTextre = false;
      for (var i = 0; i < Game_Textures.length; i++) {
        if (Colors[City_Grid[x][y]] == Game_Textures[i].name) {
          DrewTextre = true;
          Game_Textures[i].Draw(xPos - 2, yPos - 2, zoom + 4, zoom + 4);
          break;
        }
      }
      if (!DrewTextre)
        ctx.fillRect(xPos, yPos, zoom, zoom);


        if (!(GetMousePos()[0] > xPos + zoom) && GetMousePos()[0] > xPos &&
            !(GetMousePos()[1] > yPos + zoom) && GetMousePos()[1] > yPos) {

            ctx.globalAlpha = 0.5
            ctx.fillStyle = "black";
            ctx.fillRect(xPos, yPos, zoom, zoom);
            ctx.globalAlpha = 1.0

            HoveredTile = [x, y];
        }
    }
  }
}
