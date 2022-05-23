var radom = 10;
var amt_unc = 40;
var mistakes = 0;

var board = [
	8, 2, 9, 5, 6, 7, 4, 1, 3,
  1, 5, 7, 3, 2, 4, 6, 9, 8,
  4, 6, 3, 9, 1, 8, 2, 7, 5,
  9, 7, 6, 8, 4, 2, 5, 3, 1,
  2, 1, 8, 7, 5, 3, 9, 6, 4,
  3, 4, 5, 6, 9, 1, 8, 2, 7,
  5, 3, 4, 2, 7, 6, 1, 8, 9,
  6, 8, 1, 4, 3, 9, 7, 5, 2,
  7, 9, 2, 1, 8, 5, 3, 4, 6,
]

function RandomNumber(v) {
	return Math.floor(Math.random() * (v));
}

function pair(one, two) {
	this.one = one;
  this.two = two;
}

function NewGame() {
  mistakes = 0;
  SetBoard();
  LoadBoard();
  FindFinals();
}

function SwitchRow(rowsvar, index1, index2) {
	var row2 = rowsvar[index2];
  rowsvar[index2] = rowsvar[index1];
  rowsvar[index1] = row2;
  return rowsvar;
}
function LoadBoard() {
  for (var x = 0; x < 9; x++) {
    for (var y = 0; y < 9; y++) {
      var value = board[(x * 9) + y];
      if (RandomNumber(100) > amt_unc)
        value = " ";
      console.log(value);
      currentNumber = value;
      SetTile(x, y);

      var clasName = x.toString() + "|" + y.toString();
      GetTileClassList(x, y).classList = clasName;
    }
  }
}

function SetBoard() {
  document.getElementById("NewGame").classList.add("Hide");
  var columns = [];
  var rows = [];

  var start = 0;
  for (let a = 0; a < 9; a++) {
  	var currentRow = [];
  	for (let i = 0; i < 9; i++) {
    	currentRow[currentRow.length] = board[start];
      start++;
    }
    rows[a] = currentRow;
  }

  for (var i = 0; i < radom; i++) {
    var Pair1 = new pair(RandomNumber(3), RandomNumber(3));
    rows = SwitchRow(rows, Pair1.one, Pair1.two);
  }

  for (var i2 = 0; i2 < radom; i2++) {
    var Pair1 = new pair(RandomNumber(3) + 3, RandomNumber(3) + 3);
    rows = SwitchRow(rows, Pair1.one, Pair1.two);
  }

  for (var i3 = 0; i3 < radom; i3++) {
    var Pair1 = new pair(RandomNumber(3) + 6, RandomNumber(3) + 6);
    rows = SwitchRow(rows, Pair1.one, Pair1.two);
  }

  board = [];
  for (let i = 0; i < rows.length; i++) {
  	for (let i2 = 0; i2 < rows[i].length; i2++) {
    	board[board.length] = rows[i][i2];
    }
  }

  for (let a = 0; a < 9; a++) {
    var currentColumn = [];
    for (let i = a; i < board.length; i += 9) {
      currentColumn[currentColumn.length] = board[i];
    }
    columns[a] = currentColumn;
  }

  for (var i = 0; i < radom; i++) {
    var Pair1 = new pair(RandomNumber(3), RandomNumber(3));
    columns = SwitchRow(columns, Pair1.one, Pair1.two);
  }

  for (var i2 = 0; i2 < radom; i2++) {
    var Pair1 = new pair(RandomNumber(3) + 3, RandomNumber(3) + 3);
    columns = SwitchRow(columns, Pair1.one, Pair1.two);
  }

  for (var i3 = 0; i3 < radom; i3++) {
    var Pair1 = new pair(RandomNumber(3) + 6, RandomNumber(3) + 6);
    columns = SwitchRow(columns, Pair1.one, Pair1.two);
  }

  board = [];
  for (var k = 0; k < 9; k++) {
    board[board.length] = columns[k][0];
    board[board.length] = columns[k][1];
    board[board.length] = columns[k][2];
    board[board.length] = columns[k][3];
    board[board.length] = columns[k][4];
    board[board.length] = columns[k][5];
    board[board.length] = columns[k][6];
    board[board.length] = columns[k][7];
    board[board.length] = columns[k][8];
  }
}

SetBoard();

var currentNumber = "1";
var xSubtract = 1;
var ySubtract = 0;
	for (let x = 0; x < 9 + 4; x++) {

    ySubtract = 1;

  	if (x == 4 || x == 8)
  		xSubtract++

    for (let y = 0; y < 9 + 4; y++) {
      var realX = x - xSubtract;
      var realY = y - ySubtract;

      if (y == 3 || y == 7)
      	ySubtract++;


      var clasName = realX.toString() + "|" + realY.toString();
      var value = board[(realX * 9) + realY];
      if (realX > 8 || realY > 8 || realX < 0 || realY < 0) {
      	value = " ";
      }

      if (RandomNumber(100) > amt_unc)
      	value = " ";


      document.getElementById("suduko_board").innerHTML +=
      	"<div id='tile' class='"
        + clasName +
        "' onclick='Click(" + realX.toString() + ", " + realY.toString() + ")'"
        + "onmouseover='OnMouseOver(" + realX.toString() + ", " + realY.toString() + ")'>" + value + "</div>";
    }
	}

FindFinals();
function IsNumber(value) {
	return value != " ";
}

function Click(x, y) {
 	if (IsNumber(GetTileClassList(x, y).innerHTML)) {
  	Number(GetTileClassList(x, y).innerHTML);
  } else if (!GetTileClassList(x, y).classList.contains("finshed")) {
    SetTile(x, y);
  	FindTile(x, y);
    FindFinals();
    FindCompleateds();
  }
  FindCompleated();
}

function FindCompleated() {
  var compleated = true;
  for (var x = 0; x < 9; x++) {
    for (var y = 0; y < 9; y++) {
      if (GetTile(x, y) == " ") {
        compleated = false;
        break;
      }
    }
  }
  if (compleated) {
    document.getElementById("NewGame").classList.remove("Hide");
    document.getElementById("MistakeCount").innerHTML = mistakes;
  }
}
function FindTile(x, y) {
  if (board[x * 9 + y] != GetTile(x, y)) {
  	GetTileClassList(x, y).classList.add("failed");
    GetTileClassList(x, y).innerHTML = " ";
    mistakes++;
    setTimeout(function() {
    	GetTileClassList(x, y).classList.remove("failed");
    }, 100);
  } else {
  	GetTileClassList(x, y).classList.add("selected");
  }
}
function FindFinals() {
	var one = 0;
  var two = 0;
  var three = 0;

  var four = 0;
  var five = 0;
  var six = 0;

  var seven = 0;
  var eight = 0;
  var nine = 0;

  for (var x = 0; x < 9; x++) {
  	for (var y = 0; y < 9; y++) {
      if (GetTile(x, y) == 1) {
      	one++;
      }
      if (GetTile(x, y) == 2) {
      	two++;
      }
      if (GetTile(x, y) == 3) {
      	three++;
      }
      if (GetTile(x, y) == 4) {
      	four++;
      }
      if (GetTile(x, y) == 5) {
      	five++;
      }
      if (GetTile(x, y) == 6) {
      	six++;
      }
      if (GetTile(x, y) == 7) {
      	seven++;
      }
      if (GetTile(x, y) == 8) {
      	eight++;
      }
      if (GetTile(x, y) == 9) {
      	nine++;
      }
    }
  }

  DoNumber(one, "1");
  DoNumber(two, "2");
  DoNumber(three, "3");
  DoNumber(four, "4");
  DoNumber(five, "5");
  DoNumber(six, "6");
  DoNumber(seven, "7");
  DoNumber(eight, "8");
  DoNumber(nine, "9");
}
function DoNumber(value, id) {
  document.getElementById("NumberLeft" + id).innerHTML = 9 - value;

  if (value == 9) {
  	document.getElementById("Number" + id).classList.add("TakenNumber");
    document.getElementById("Number" + id).classList.remove("AvalibleNumber");
    document.getElementById("NumberLeft" + id).innerHTML = "";
  } else {
    document.getElementById("Number" + id).classList.remove("TakenNumber");
    document.getElementById("Number" + id).classList.add("AvalibleNumber");
  }
}
function FindCompleateds() {
  DoGrid();
  DoYLine();
  DoXLine();
}

function DoYLine() {
  for (var i = 0; i < 9; i++) {
  	var one = false;
    var two = false;
    var three = false;

    var four = false;
    var five = false;
    var six = false;

    var seven = false;
    var eight = false;
    var nine = false;

    for (let x = i; x < i + 1; x++) {
    	for (let y = 0; y < 9; y++) {
        if (GetTile(x, y) == 1) {
          one = true;
        }
        if (GetTile(x, y) == 2) {
          two = true;
        }
        if (GetTile(x, y) == 3) {
          three = true;
        }
        if (GetTile(x, y) == 4) {
          four = true;
        }
        if (GetTile(x, y) == 5) {
          five = true;
        }
        if (GetTile(x, y) == 6) {
          six = true;
        }
        if (GetTile(x, y) == 7) {
          seven = true;
        }
        if (GetTile(x, y) == 8) {
          eight = true;
        }
        if (GetTile(x, y) == 9) {
          nine = true;
        }
    	}
    }

    if (one && two && three && four && five && six && seven && eight && nine) {
    	let index = 1;
      for (let x = i; x < i + 1; x++) {
        for (let y = 0; y < 9; y++) {
    			SetFinished(x, y, GetTile(x, y));
          index++;
    		}
    	}
    }

  }
}
function DoXLine() {
  for (var i = 0; i < 9; i++) {
  	var one = false;
    var two = false;
    var three = false;

    var four = false;
    var five = false;
    var six = false;

    var seven = false;
    var eight = false;
    var nine = false;

    for (let y = i; y < i + 1; y++) {
    	for (let x = 0; x < 9; x++) {
        if (GetTile(x, y) == 1) {
          one = true;
        }
        if (GetTile(x, y) == 2) {
          two = true;
        }
        if (GetTile(x, y) == 3) {
          three = true;
        }
        if (GetTile(x, y) == 4) {
          four = true;
        }
        if (GetTile(x, y) == 5) {
          five = true;
        }
        if (GetTile(x, y) == 6) {
          six = true;
        }
        if (GetTile(x, y) == 7) {
          seven = true;
        }
        if (GetTile(x, y) == 8) {
          eight = true;
        }
        if (GetTile(x, y) == 9) {
          nine = true;
        }
    	}
    }

    if (one && two && three && four && five && six && seven && eight && nine) {
    	let index = 1;
      for (let y = i; y < i + 1; y++) {
        for (let x = 0; x < 9; x++) {
    			SetFinished(x, y, GetTile(x, y));
          index++;
    		}
    	}
    }

  }
}
function DoGrid() {
  for (var i = 0; i < 9; i++) {
  	var one = false;
    var two = false;
    var three = false;

    var four = false;
    var five = false;
    var six = false;

    var seven = false;
    var eight = false;
    var nine = false;

  	var startX = 0;
    var startY = 0;

    if (i == 0) {
    	startX = 0;
    } else if (i == 1) {
    	startX = 3;
    } else if (i == 2) {
    	startX = 6;
    } else if (i == 3) {
    	startY = 3;
    } else if (i == 4) {
    	startX = 3;
    	startY = 3;
    } else if (i == 5) {
    	startX = 6;
    	startY = 3;
    } else if (i == 6) {
    	startY = 6;
    } else if (i == 7) {
    	startX = 3;
    	startY = 6;
    } else if (i == 8) {
    	startX = 6;
    	startY = 6;
    }

  	for (var x = startX; x < startX + 3; x++) {
    	for (var y = startY; y < startY + 3; y++) {
        if (GetTile(x, y) == 1) {
          one = true;
        }
        if (GetTile(x, y) == 2) {
          two = true;
        }
        if (GetTile(x, y) == 3) {
          three = true;
        }
        if (GetTile(x, y) == 4) {
          four = true;
        }
        if (GetTile(x, y) == 5) {
          five = true;
        }
        if (GetTile(x, y) == 6) {
          six = true;
        }
        if (GetTile(x, y) == 7) {
          seven = true;
        }
        if (GetTile(x, y) == 8) {
          eight = true;
        }
        if (GetTile(x, y) == 9) {
          nine = true;
        }
    	}
    }

    if (one && two && three && four && five && six && seven && eight && nine) {
    	let index = 1;
      for (var x = startX; x < startX + 3; x++) {
    		for (var y = startY; y < startY + 3; y++) {
    			SetFinished(x, y, GetTile(x, y));
          index++;
    		}
    	}
    }

  }
}

function FindDuplicates(x, y) {
	var timeout = false;

  var one = 0;
  var two = 0;
  var three = 0;

  var four = 0;
  var five = 0;
  var six = 0;

  var seven = 0;
  var eight = 0;
  var nine = 0;

  var startX = 0;
  if (x > 2) {
  	startX = 3;
    if (x > 5) {
    	startX = 6;
    }
  }

  var startY = 0;
  if (y > 2) {
  	startY = 3;
    if (y > 5) {
    	startY = 6;
    }
  }

  for (let x2 = startX; x2 < 3 + startX; x2++) {
  	for (let y2 = startY; y2 < 3 + startY; y2++) {
    	if (GetTile(x2, y2) == 1) {
      	one++;
      }
      if (GetTile(x2, y2) == 2) {
      	two++;
      }
      if (GetTile(x2, y2) == 3) {
      	three++;
      }
      if (GetTile(x2, y2) == 4) {
      	four++;
      }
      if (GetTile(x2, y2) == 5) {
      	five++;
      }
      if (GetTile(x2, y2) == 6) {
      	six++;
      }
      if (GetTile(x2, y2) == 7) {
      	seven++;
      }
      if (GetTile(x2, y2) == 8) {
      	eight++;
      }
      if (GetTile(x2, y2) == 9) {
      	nine++;
      }
    }
  }

  if (one > 1 || two > 1 || three > 1 ||
  		four > 1 || five > 1 || six > 1 ||
      seven > 1 || eight  > 1 || nine > 1) {
          var oneCurrent = currentNumber;
          currentNumber = "X";
          SetTile(x, y);
          timeout = true;
          setTimeout(function() {
          	currentNumber = " ";
          	SetTile(x, y);
            currentNumber = oneCurrent;
            SetSelecteds();
          }, 100);
  } else {
    one = 0;
    two = 0;
    three = 0;

    four = 0;
    five = 0;
    six = 0;

    seven = 0;
    eight = 0;
    nine = 0;

    for (let x2 = x; x2 < x + 1; x2++) {
    	for (let y2 = 0; y2 < 9; y2++) {
        if (GetTile(x2, y2) == 1) {
          one++;
        }
        if (GetTile(x2, y2) == 2) {
          two++;
        }
        if (GetTile(x2, y2) == 3) {
          three++;
        }
        if (GetTile(x2, y2) == 4) {
          four++;
        }
        if (GetTile(x2, y2) == 5) {
          five++;
        }
        if (GetTile(x2, y2) == 6) {
          six++;
        }
        if (GetTile(x2, y2) == 7) {
          seven++;
        }
        if (GetTile(x2, y2) == 8) {
          eight++;
        }
        if (GetTile(x2, y2) == 9) {
          nine++;
        }
      }
    }

    if (one > 1 || two > 1 || three > 1 ||
  		four > 1 || five > 1 || six > 1 ||
      seven > 1 || eight  > 1 || nine > 1) {
          var oneCurrent = currentNumber;
          currentNumber = "X";
          SetTile(x, y);
          timeout = true;
          setTimeout(function() {
          	currentNumber = " ";
          	SetTile(x, y);
            currentNumber = oneCurrent;
            SetSelecteds();
          }, 100);
  	} else {
      one = 0;
      two = 0;
      three = 0;

      four = 0;
      five = 0;
      six = 0;

      seven = 0;
      eight = 0;
      nine = 0;

      for (let y2 = y; y2 < y + 1; y2++) {
        for (let x2 = 0; x2 < 9; x2++) {
          if (GetTile(x2, y2) == 1) {
            one++;
          }
          if (GetTile(x2, y2) == 2) {
            two++;
          }
          if (GetTile(x2, y2) == 3) {
            three++;
          }
          if (GetTile(x2, y2) == 4) {
            four++;
          }
          if (GetTile(x2, y2) == 5) {
            five++;
          }
          if (GetTile(x2, y2) == 6) {
            six++;
          }
          if (GetTile(x2, y2) == 7) {
            seven++;
          }
          if (GetTile(x2, y2) == 8) {
            eight++;
          }
          if (GetTile(x2, y2) == 9) {
            nine++;
          }
        }
      }

      if (one > 1 || two > 1 || three > 1 ||
        four > 1 || five > 1 || six > 1 ||
        seven > 1 || eight  > 1 || nine > 1) {
          var oneCurrent = currentNumber;
          currentNumber = "X";
          SetTile(x, y);
          timeout = true;
          setTimeout(function() {
          	currentNumber = " ";
          	SetTile(x, y);
            currentNumber = oneCurrent;
            SetSelecteds();
          }, 100);
      }
    }
  }

  if (!timeout)
  	SetSelecteds();
}
function Number(number) {
	currentNumber = parseInt(number);
  document.getElementById("number").innerHTML = number;

  SetSelecteds();
}
function SetSelecteds() {
  for (var x = 0; x < 9; x++) {
  	for (var y = 0; y < 9; y++) {
    	GetTileClassList(x, y).classList.remove("selected");
      GetTileClassList(x, y).classList.remove("slected_second");
    	if (GetTile(x, y) == currentNumber) {
      	GetTileClassList(x, y).classList.add("selected");
      }
    }
  }
}
function GetTile(x, y) {
	return document.getElementsByClassName(x.toString() + '|' + y.toString())[0].innerHTML;
}
function GetTileClassList(x, y) {
	return document.getElementsByClassName(x.toString() + '|' + y.toString())[0];
}
function SetFinished(x, y, index) {
	document.getElementsByClassName(x.toString() + '|' + y.toString())[0].classList.add("finshed");
  document.getElementsByClassName(x.toString() + '|' + y.toString())[0].classList.add("finshed_rotate_" + index);
}
function SetTile(x, y) {
	document.getElementsByClassName(x.toString() + '|' + y.toString())[0].innerHTML = currentNumber;
}
function OnMouseOver(x, y) {
	for (var x3 = 0; x3 < 9; x3++) {
  	for (var y3 = 0; y3 < 9; y3++) {
    	GetTileClassList(x3, y3).classList.remove("slected_second");
    }
  }

	if (GetTile(x, y) == GetTile(x, y)) {
    for (var x2 = x; x2 < x + 1; x2++) {
    	for (var y2 = 0; y2 < 9; y2++) {
      	if (y != y2) {
      		GetTileClassList(x2, y2).classList.add("slected_second");
        }
      }
    }

    for (var y2 = y; y2 < y + 1; y2++) {
    	for (var x2 = 0; x2 < 9; x2++) {
      	if (x != x2) {
      		GetTileClassList(x2, y2).classList.add("slected_second");
        }
      }
    }

    var startX = 0;
    var startY = 0;

    if (x > 2)
    	startX = 3;
    if (x > 5)
    	startX = 6;

    if (y> 2)
    	startY = 3;
    if (y> 5)
    	startY= 6;


    for (var x2 = startX; x2 < startX + 3; x2++) {
   		for (var y2 = startY; y2 < startY + 3; y2++) {
    		if (x != x2 && y != y2) {
      		GetTileClassList(x2, y2).classList.add("slected_second");
        }
    	}
    }
  }
}
document.documentElement.addEventListener("mousemove", e => {
	let mouseX = e.clientX + 10;
  let mouseY = e.clientY + 10;

  document.documentElement.style.setProperty('--mouse-x', mouseX + "px");
  document.documentElement.style.setProperty('--mouse-y', mouseY + "px");
});
