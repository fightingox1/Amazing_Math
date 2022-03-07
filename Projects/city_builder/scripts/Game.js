SetUpdate(Update);
setInterval(AddMoney, 1000);

LoadTexture("texture_grass", "textures/Grass.png");
LoadTexture("texture_water", "textures/Water.jpg");
LoadTexture("texture_water_top", "textures/Water_Top.png");
LoadTexture("texture_water_bottom", "textures/Water_Bottom.png");
LoadTexture("texture_water_right", "textures/Water_Right.png");
LoadTexture("texture_water_left", "textures/Water_Left.png");
LoadTexture("texture_water_top_left", "textures/Water_Top_Left.png");
LoadTexture("texture_water_top_right", "textures/Water_Top_Right.png");
LoadTexture("texture_water_bottom_right", "textures/Water_Bottom_Right.png");
LoadTexture("texture_water_bottom_left", "textures/Water_Bottom_Left.png");
LoadTexture("texture_park",  "textures/Park.png");
LoadTexture("texture_dirt",  "textures/Dirt.jpg");

LoadTexture("texture_road", "textures/Road.png");
LoadTexture("texture_road_cap_1", "textures/Road_cap_1.png");
LoadTexture("texture_road_cap_2", "textures/Road_cap_2.png");
LoadTexture("texture_road_cap_3", "textures/Road_cap_3.png");
LoadTexture("texture_road_cap_4", "textures/Road_cap_4.png");

LoadTexture("texture_road_straight_1", "textures/Road_straight_1.png");
LoadTexture("texture_road_straight_2", "textures/Road_straight_2.png");

LoadTexture("texture_road_three_1", "textures/Road_three_1.png");
LoadTexture("texture_road_three_2", "textures/Road_three_2.png");
LoadTexture("texture_road_three_3", "textures/Road_three_3.png");
LoadTexture("texture_road_three_4", "textures/Road_three_4.png");

LoadTexture("texture_road_turn_1", "textures/Road_turn_1.png");
LoadTexture("texture_road_turn_2", "textures/Road_turn_2.png");
LoadTexture("texture_road_turn_3", "textures/Road_turn_3.png");
LoadTexture("texture_road_turn_4", "textures/Road_turn_4.png");

LoadTexture("texture_road_center", "textures/Road_center.png");

LoadTexture("texture_1_house", "textures/House_1.png");
LoadTexture("texture_2_house", "textures/House_2.png");
LoadTexture("texture_3_house", "textures/House_3.png");
LoadTexture("texture_4_house", "textures/House_4.png");

LoadTexture("texture_1_supermarket", "textures/Supermarket_1.png");
LoadTexture("texture_2_supermarket", "textures/Supermarket_2.png");
LoadTexture("texture_3_supermarket", "textures/Supermarket_3.png");
LoadTexture("texture_4_supermarket", "textures/Supermarket_4.png");

AddColor("texture_grass");
AddColor("texture_water");
AddColor("texture_dirt");
AddColor("texture_road");
AddColor("texture_road_cap_1");
AddColor("texture_road_cap_2");
AddColor("texture_road_cap_3");
AddColor("texture_road_cap_4");
AddColor("texture_road_straight_1");
AddColor("texture_road_straight_2");

AddColor("texture_road_three_1");
AddColor("texture_road_three_2");
AddColor("texture_road_three_3");
AddColor("texture_road_three_4");

AddColor("texture_road_turn_1");
AddColor("texture_road_turn_2");
AddColor("texture_road_turn_3");
AddColor("texture_road_turn_4");

AddColor("texture_road_center");

AddColor("texture_1_house");
AddColor("texture_2_house");
AddColor("texture_3_house");
AddColor("texture_4_house");

AddColor("texture_water_top");
AddColor("texture_water_bottom");
AddColor("texture_water_right");
AddColor("texture_water_left");
AddColor("texture_water_top_left");
AddColor("texture_water_top_right");
AddColor("texture_water_bottom_left");
AddColor("texture_water_bottom_right");

AddColor("texture_1_supermarket");
AddColor("texture_2_supermarket");
AddColor("texture_3_supermarket");
AddColor("texture_4_supermarket");

AddColor("texture_park");

var ThingToPlace = document.getElementById('object');
var Place = document.getElementById('place');
var Population = document.getElementById('population');
var Money = document.getElementById('money');
var Money_Added = document.getElementById('Money_Added');

function IsRoad(tile) {
  if (tile == 3 || tile == 4 || tile == 5 || tile == 6 || tile == 7 || tile == 8 || tile == 9 || tile == 10 || tile == 11 || tile == 12 || tile == 13 || tile == 14 || tile == 15 || tile == 16 || tile == 17 || tile == 18)
    return true;
  else
    return false;
}
function IsHouse(tile) {
  if (tile == 19 || tile == 20 || tile == 21 || tile == 22)
    return true;
  else
    return false;
}
function IsSupermarket(tile) {
  if (tile == 31 || tile == 32 || tile == 33 || tile == 34)
    return true;
  else
    return false;
}
function IsPark(tile) {
  if (tile == 35)
    return true;
  else
    return false;
}
function IsBuilding(tile) {
  if (IsHouse(tile) || IsSupermarket(tile) || IsPark(tile))
    return true;
  else
    return false;
}
function IsWater(tile) {
  if (tile == 1 || tile == 23 || tile == 24 || tile == 25 || tile == 26 || tile == 27 || tile == 28 || tile == 29)
    return true;
  else
    return false;
}
function IsGrass(tile) {
  if (tile == 0)
    return true;
  else
    return false;
}
function IsWaterCorner(x, y, type) {
  var water_left = false;
  var water_right = false;
  var water_top = false;
  var water_bottom = false;
  if (IsWater(GetTile(x - 1, y)))
    water_left = true;
  if (IsWater(GetTile(x + 1, y)))
    water_right = true;
  if (IsWater(GetTile(x, y - 1)))
    water_top = true;
  if (IsWater(GetTile(x, y + 1)))
    water_bottom = true;

  var grass_left = false;
  var grass_right = false;
  var grass_top = false;
  var grass_bottom = false;
  if (IsGrass(GetTile(x - 1, y)))
    grass_left = true;
  if (IsGrass(GetTile(x + 1, y)))
    grass_right = true;
  if (IsGrass(GetTile(x, y - 1)))
    grass_top = true;
  if (IsGrass(GetTile(x, y + 1)))
    grass_bottom = true;

  if (grass_top && grass_left && water_right && water_bottom && type == 0)
    return true;
  else if (grass_top && grass_right && water_left && water_bottom && type == 1)
    return true;
  else if (grass_bottom && grass_left && water_right && water_top && type == 2)
    return true;
  else if (grass_bottom && grass_right && water_left && water_top && type == 3)
    return true;
  else
    return false;
}

function PlaceBuilding(x, y, id, disable) {
  var setHouse = false;
  var id_1 = 0;
  var id_2 = 0;
  var id_3 = 0;
  var id_4 = 0;
  if (id == 0) {
    id_1 = 19;
    id_2 = 20;
    id_3 = 21;
    id_4 = 22;
  } else if (id == 1) {
    id_1 = 31;
    id_2 = 32;
    id_3 = 33;
    id_4 = 34;
  } else if (id == 2) {
    id_1 = 35;
    id_2 = 35;
    id_3 = 35;
    id_4 = 35;
  }
  if (IsBuilding(GetTile(x, y)) && !disable) {
    return false;
  }
  if (IsRoad(GetTile(x + 1, y))) {
    setHouse = true;
    SetTile(x, y, id_1);
  }

  if (IsRoad(GetTile(x - 1, y))) {
    setHouse = true;
    SetTile(x, y, id_2);
  }

  if (IsRoad(GetTile(x, y + 1))) {
    setHouse = true;
    SetTile(x, y, id_3);
  }

  if (IsRoad(GetTile(x, y - 1))) {
    setHouse = true;
    SetTile(x, y, id_4);
  }

  return setHouse;
}

var image = document.getElementById('item_image');
var price = document.getElementById('item_price_2');
var iname = document.getElementById('item_price');

function TouchingRoad(x, y) {
  if (IsRoad(GetTile(x + 1, y))) {
    return true;
  }

  if (IsRoad(GetTile(x - 1, y))) {
    return true;
  }

  if (IsRoad(GetTile(x, y + 1))) {
    return true;
  }

  if (IsRoad(GetTile(x, y - 1))) {
    return true;
  }

  return false;
}
function SetItem(vName, vImg, vCost) {
  iname.innerHTML = vName;
  image.src = vImg;
  price.innerHTML = "Cost: $" + vCost;
}

var Speed = 0.1;
var Population_Amt = 0;
var Supermarket_Amt = 0;
var Road_Amt = 0;
var Money_Amt = 25000;
var Money_Amt_Added = 0;

function AddMoney() {
  Money_Amt_Added = 0;
  if (Supermarket_Amt > 0) {
    Money_Amt_Added += (Population_Amt * 5);
    Money_Amt_Added += ((2 * Population_Amt) * Supermarket_Amt)
  }

  Money_Amt_Added -= (Road_Amt - 5) * 20;

  Money_Amt += Money_Amt_Added;
}

function Update() {
  SetUpdateGrid("Terrain");

  if (ThingToPlace.value == "road")
    SetItem("Road", "textures/Road.png", 1000);
  else if (ThingToPlace.value == "house")
    SetItem("House", "textures/House_1.png", 2000);
  else if (ThingToPlace.value == "supermarket")
    SetItem("Supermarket", "textures/Supermarket_1.png", 10000);
  else if (ThingToPlace.value == "park")
    SetItem("Park", "textures/Park.png", 1500);

  if (MouseButtonDown(0) && GetTile(HoveredTile[0], HoveredTile[1]) == 0) {
    SetUpdateGrid("City");
    if (Place.checked == false) {
      if (ThingToPlace.value == "road" &&
          TouchingRoad(HoveredTile[0], HoveredTile[1]) &&
          !IsRoad(GetTile(HoveredTile[0], HoveredTile[1]))) {
        if (Money_Amt >= 1000) {
          SetTile(HoveredTile[0], HoveredTile[1], 3);
          Money_Amt -= 1000;
        }
      }
      else if (ThingToPlace.value == "house" && Money_Amt >= 2000) {
        if (PlaceBuilding(HoveredTile[0], HoveredTile[1], 0, false))
          Money_Amt -= 2000;
      }
      else if (ThingToPlace.value == "supermarket" && Money_Amt >= 10000) {
        if (PlaceBuilding(HoveredTile[0], HoveredTile[1], 1, false))
          Money_Amt -= 10000;
      }
      else if (ThingToPlace.value == "park" && Money_Amt >= 1500) {
        if (PlaceBuilding(HoveredTile[0], HoveredTile[1], 2, false))
          Money_Amt -= 1500;
      }
    } else
      SetTile(HoveredTile[0], HoveredTile[1], 0);
  }
  SetUpdateGrid("City");

  Population_Amt = 0;
  Supermarket_Amt = 0;
  Road_Amt = 0;

  SetTile(Math.trunc(Size_x / 2), 0, 3);
  SetTile(Math.trunc(Size_x / 2), 1, 3);
  SetTile(Math.trunc(Size_x / 2), 2, 3);
  SetTile(Math.trunc(Size_x / 2), 3, 3);
  SetTile(Math.trunc(Size_x / 2), 4, 3);

  if (KeyDown("ArrowUp"))
    Zoom(1);
  else if (KeyDown("ArrowDown"))
    Zoom(-1);

  if (KeyDown("W"))
    MoveCamera(0, Speed);
  if (KeyDown("A"))
    MoveCamera(Speed, 0);
  if (KeyDown("S"))
    MoveCamera(0, -Speed);
  if (KeyDown("D"))
    MoveCamera(-Speed, 0);


  for (var x = 0; x < Size_x; x++) {
    for (var y = 0; y < Size_y; y++) {
      if (IsRoad(GetTile(x, y))) {
        Road_Amt++;
        SetTile(x, y, 3);
        var left = GetTile(x - 1, y);
        var right = GetTile(x + 1, y);
        var bottom = GetTile(x, y + 1);
        var top = GetTile(x, y - 1);

        var left_road = false;
        if (IsRoad(left)) {
          left_road = true;
          SetTile(x, y, 5);
        }

        var right_road = false;
        if (IsRoad(right)) {
          right_road = true;
          SetTile(x, y, 4);
        }

        var bottom_road = false;
        if (IsRoad(bottom)) {
          bottom_road = true;
          SetTile(x, y, 6);
        }

        var top_road = false;
        if (IsRoad(top)) {
          top_road = true;
          SetTile(x, y, 7);
        }

        if (left_road && right_road) {
          SetTile(x, y, 8);
        }

        if (top_road && bottom_road) {
          SetTile(x, y, 9);
        }

        if (right_road && bottom_road) {
          SetTile(x, y, 14);
        }

        if (right_road && top_road) {
          SetTile(x, y, 15);
        }

        if (left_road && top_road) {
          SetTile(x, y, 16);
        }

        if (left_road && bottom_road) {
          SetTile(x, y, 17);
        }

        if (top_road && right_road && bottom_road) {
          SetTile(x, y, 10);
        }

        if (top_road && right_road && left_road) {
          SetTile(x, y, 11);
        }

        if (top_road && bottom_road && left_road) {
          SetTile(x, y, 12);
        }

        if (right_road && bottom_road && left_road) {
          SetTile(x, y, 13);
        }

        if (left_road && right_road && top_road && bottom_road) {
          SetTile(x, y, 18);
        }
      }
      if (IsHouse(GetTile(x, y))) {
        if (!PlaceBuilding(x, y, 0, true)) {
          SetTile(x, y, 0);
        } else {
          Population_Amt += 4;
        }
      }
      if (IsSupermarket(GetTile(x, y))) {
        if (!PlaceBuilding(x, y, 1, true)) {
          SetTile(x, y, 0);
        } else {
          Supermarket_Amt++;
        }
      }
      SetUpdateGrid("Terrain");
      if (IsWater(GetTile(x, y))) {
        if (GetTile(x, y - 1) == 0) {
          SetTile(x, y, 23);
        }

        if (GetTile(x, y + 1) == 0) {
          SetTile(x, y, 24);
        }

        if (GetTile(x + 1, y) == 0) {
          SetTile(x, y, 25);
        }

        if (GetTile(x - 1, y) == 0) {
          SetTile(x, y, 26);
        }

        if (IsWaterCorner(x, y, 0)) {
          SetTile(x, y, 27);
        }

        if (IsWaterCorner(x, y, 1)) {
          SetTile(x, y, 28);
        }

        if (IsWaterCorner(x, y, 2)) {
          SetTile(x, y, 29);
        }

        if (IsWaterCorner(x, y, 3)) {
          SetTile(x, y, 30);
        }
      }
      SetUpdateGrid("City");
    }
  }
  Population.innerHTML = Population_Amt;
  Money.innerHTML = Money_Amt;
  Money_Added.innerHTML = Money_Amt_Added;
}
