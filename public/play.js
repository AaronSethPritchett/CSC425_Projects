window.onload = function() {
    var currentMarker;
    var yourTurn;
    var boardState = [];
    boardState[0] = 0;
    boardState[1] = 1;
    boardState[2] = 2;
    boardState[3] = 3;
    boardState[4] = 4;
    boardState[5] = 5;
    boardState[6] = 6;
    boardState[7] = 7;
    boardState[8] = 8;
    var turnCount = 0;
    var firstLoad = true;
    var box1status = false;
    var box2status = false;
    var box3status = false;
    var box4status = false;
    var box5status = false;
    var box6status = false;
    var box7status = false;
    var box8status = false;
    var box9status = false;
    var socket = io.connect('http://localhost:3000');
    
    var box1 = document.getElementById("lefttopcell");
    var box2 = document.getElementById("topcell");
    var box3 = document.getElementById("righttopcell");
    var box4 = document.getElementById("leftmidcell");
    var box5 = document.getElementById("midcell");
    var box6 = document.getElementById("rightmidcell");
    var box7 = document.getElementById("leftbotcell");
    var box8 = document.getElementById("botcell");
    var box9 = document.getElementById("rightbotcell");
    
    socket.on('message', function (data) {
        if(firstLoad == true) {
            currentMarker = data.message;
            if(currentMarker == "X")
                yourTurn = true;
            else
                yourTurn = false;
            firstLoad = false;
        } else {
            console.log(data.message);
            yourTurn == !yourTurn;
            var cell = data.message.charAt(0);
            var fill = data.message.charAt(1);
            
            //set turn permission
            if(fill == currentMarker)
                yourTurn = false;
            else
                yourTurn = true;
            if(cell == "1")
                {
                    box1status = true;
                if(fill == "X")
                    {
                        box1.className += "X";
                        boardState[0] = "X";
                    }
                else if(fill == "O")
                    {
                        box1.className += "O";
                        boardState[0] = "O";
                    }
                    
                else
                    console.log("Faulty background change!");
            }
                
            else if(cell == "2")
                {
                    box2status = true;
                if(fill == "X")
                    {
                        box2.className += "X";
                        boardState[1] = "X";
                    }
                else if(fill == "O")
                    {
                        box2.className += "O";
                        boardState[1] = "O";
                    }
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "3")
                {
                    box3status = true;
                if(fill == "X")
                    {
                        box3.className += "X";
                        boardState[2] = "X";
                    }
                else if(fill == "O")
                    {
                        box3.className += "O";
                        boardState[2] = "O";
                    }
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "4")
                {
                    box4status = true;
                if(fill == "X")
                    {
                        box4.className += "X";
                        boardState[3] = "X";
                    }
                else if(fill == "O")
                    {
                        box4.className += "O";
                        boardState[3] = "O";
                    }
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "5")
                {
                    box5status = true;
                if(fill == "X")
                    {
                        box5.className += "X";
                        boardState[4] = "X";
                    }
                else if(fill == "O")
                    {
                        box5.className += "O";
                        boardState[4] = "O";
                    }
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "6")
                {
                    box6status = true;
                if(fill == "X")
                    {
                        box6.className += "X";
                        boardState[5] = "X";
                    }
                else if(fill == "O")
                    {
                        box6.className += "O";
                        boardState[5] = "O";
                    }
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "7")
                {
                    box7status = true;
                if(fill == "X")
                    {
                        box7.className += "X";
                        boardState[6] = "X";
                    }
                else if(fill == "O")
                    {
                        box7.className += "O";
                        boardState[6] = "O";
                    }
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "8")
                {
                    box8status = true;
                if(fill == "X")
                    {
                        box8.className += "X";
                        boardState[7] = "X";
                    }
                else if(fill == "O")
                    {
                        box8.className += "O";
                        boardState[7] = "O";
                    }
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "9")
                {
                    box9status = true;
                if(fill == "X")
                    {
                        box9.className += "X";
                        boardState[8] = "X";
                    }
                else if(fill == "O")
                    {
                        box9.className += "O";
                        boardState[8] = "O";
                    }
                else
                    console.log("Faulty background change!");
                }
            else
            {
                console.log("Faulty message recieved! " + data.message);    
            }
            checkWin();
        }
    });

    box1.onclick = function() {
        if(box1status==false && yourTurn == true)   
    {
                var text = "1" + currentMarker;
                socket.emit('send', { message: text });
    }
    };
     box2.onclick = function() {
        if(box2status==false && yourTurn == true)
            {
                var text = "2" + currentMarker;
                socket.emit('send', { message: text });
            }
    };
     box3.onclick = function() {
        if(box3status==false && yourTurn == true)
            {
                var text = "3" + currentMarker;
                socket.emit('send', { message: text });
            }
    };
     box4.onclick = function() {
        if(box4status==false && yourTurn == true)
            {
                var text = "4" + currentMarker;
                socket.emit('send', { message: text });
            }
    };
     box5.onclick = function() {
        if(box5status==false && yourTurn == true)
            {
                var text = "5" + currentMarker;
                socket.emit('send', { message: text });
            }
    };
     box6.onclick = function() {
        if(box6status==false && yourTurn == true)
            {
                var text = "6" + currentMarker;
                socket.emit('send', { message: text });
            }
    };
     box7.onclick = function() {
        if(box7status==false && yourTurn == true)
            {
                var text = "7" + currentMarker;
                socket.emit('send', { message: text });
            }
    };
     box8.onclick = function() {
        if(box8status==false && yourTurn == true)
            {
                var text = "8" + currentMarker;
                socket.emit('send', { message: text });
            }
    };
    box9.onclick = function() {
        if(box9status==false && yourTurn == true)
            {
                var text = "9" + currentMarker;
                socket.emit('send', { message: text });
            }
    };
    
    function checkWin()
    {
        turnCount++;
        if(boardState[0] == boardState[1] && boardState[2] == boardState[1])
            {
                if(boardState[0] == currentMarker)
                    {
                        document.getElementById("win").className = "visible";
                        freezeBoard();
                    }
                else
                    {
                        document.getElementById("lose").className = "visible";
                        freezeBoard();
                    }
            }
        else if(boardState[3] == boardState[4] && boardState[4] == boardState[5])
            {
                if(boardState[3] == currentMarker)
                    {
                       document.getElementById("win").className = "visible";
                    }
                else
                    {
                        document.getElementById("lose").className = "visible";
                    }
            }
        else if(boardState[6] == boardState[7] && boardState[7] == boardState[8])
            {
                if(boardState[6] == currentMarker)
                    {
                       document.getElementById("win").className = "visible";
                       freezeBoard();
                    }
                else
                    {
                        document.getElementById("lose").className = "visible";
                        freezeBoard();
                    }
            }
        else if(boardState[0] == boardState[3] && boardState[3] == boardState[6])
            {
                if(boardState[0] == currentMarker)
                    {
                       document.getElementById("win").className = "visible";
                        freezeBoard();
                    }
                else
                    {
                        document.getElementById("lose").className = "visible";
                        freezeBoard();
                    }
            }
        else if(boardState[1] == boardState[4] && boardState[4] == boardState[7])
            {
                if(boardState[1] == currentMarker)
                    {
                       document.getElementById("win").className = "visible";
                        freezeBoard();
                    }
                else
                    {
                        document.getElementById("lose").className = "visible";
                        freezeBoard();
                    }
            }
        else if(boardState[2] == boardState[5] && boardState[5] == boardState[8])
            {
                if(boardState[2] == currentMarker)
                    {
                       document.getElementById("win").className = "visible";
                        freezeBoard();
                    }
                else
                    {
                        document.getElementById("lose").className = "visible";
                        freezeBoard();
                    }
            }
        else if(boardState[0] == boardState[4] && boardState[4] == boardState[8])
            {
                if(boardState[0] == currentMarker)
                    {
                       document.getElementById("win").className = "visible";
                        freezeBoard();
                    }
                else
                    {
                        document.getElementById("lose").className = "visible";
                        freezeBoard();
                    }
            }
        else if(boardState[2] == boardState[4] && boardState[4] == boardState[6])
            {
                if(boardState[2] == currentMarker)
                    {
                       document.getElementById("win").className = "visible";
                        freezeBoard();
                    }
                else
                    {
                        document.getElementById("lose").className = "visible";
                        freezeBoard();
                    }
            }
        else if(turnCount == 9)
            {
                document.getElementById("tie").className = "visible";
            }
        else
            {
                console.log("checkWin Error");
            }
    };

    function freezeBoard()
    {
        box1status = true;
        box2status = true;
        box3status = true;
        box4status = true;
        box5status = true;
        box6status = true;
        box7status = true;
        box8status = true;
        box9status = true;
    };
}