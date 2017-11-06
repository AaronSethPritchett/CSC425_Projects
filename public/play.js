window.onload = function() {
    var currentMarker;
    var yourTurn;
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
    
    //Happens at beginning of connection only
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
            if(cell == "1")
                {
                    box1status = true;
                if(fill == "X")
                    box1.className += "X";
                else if(fill == "O")
                    box1.className += "O";
                else
                    console.log("Faulty background change!");
            }
                
            else if(cell == "2")
                {
                    box2status = true;
                if(fill == "X")
                    box2.className += "X";
                else if(fill == "O")
                    box2.className += "O";
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "3")
                {
                    box3status = true;
                if(fill == "X")
                    box3.className += "X";
                else if(fill == "O")
                    box3.className += "O";
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "4")
                {
                    box4status = true;
                if(fill == "X")
                    box4.className += "X";
                else if(fill == "O")
                    box4.className += "O";
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "5")
                {
                    box5status = true;
                if(fill == "X")
                    box5.className += "X";
                else if(fill == "O")
                    box5.className += "O";
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "6")
                {
                    box6status = true;
                if(fill == "X")
                    box6.className += "X";
                else if(fill == "O")
                    box6.className += "O";
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "7")
                {
                    box7status = true;
                if(fill == "X")
                    box7.className += "X";
                else if(fill == "O")
                    box7.className += "O";
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "8")
                {
                    box8status = true;
                if(fill == "X")
                    box8.className += "X";
                else if(fill == "O")
                    box8.className += "O";
                else
                    console.log("Faulty background change!");
                }
            else if(cell == "9")
                {
                    box9status = true;
                if(fill == "X")
                    box9.className += "X";
                else if(fill == "O")
                    box9.className += "O";
                else
                    console.log("Faulty background change!");
                }
            else
            {
                console.log("Faulty message recieved! " + data.message);    
            }
        }
    });

    box1.onclick = function() {
        if(box1status==false && yourTurn == true)   //put yourturn here
    {
                var text = "1" + currentMarker;
                socket.emit('send', { message: text });
                box1status = true;
                yourTurn = false;
    }};
     box2.onclick = function() {
        if(box2status==false && yourTurn == true)
            {
                var text = "2" + currentMarker;
                socket.emit('send', { message: text });
                box2status = true;
                yourTurn == false;
            }
    };
     box3.onclick = function() {
        if(box3status==false)
            {
                var text = "3" + currentMarker;
                socket.emit('send', { message: text });
                box3status = true;
            }
    };
     box4.onclick = function() {
        if(box4status==false)
            {
                var text = "4" + currentMarker;
                socket.emit('send', { message: text });
                box4status = true;
            }
    };
     box5.onclick = function() {
        if(box5status==false)
            {
                var text = "5" + currentMarker;
                socket.emit('send', { message: text });
                box5status = true;
            }
    };
     box6.onclick = function() {
        if(box6status==false)
            {
                var text = "6" + currentMarker;
                socket.emit('send', { message: text });
                box6status = true;
            }
    };
     box7.onclick = function() {
        if(box7status==false)
            {
                var text = "7" + currentMarker;
                socket.emit('send', { message: text });
                box7status = true;
            }
    };
     box8.onclick = function() {
        if(box8status==false)
            {
                var text = "8" + currentMarker;
                socket.emit('send', { message: text });
                box8status = true;
            }
    };
    box9.onclick = function() {
        if(box9status==false)
            {
                var text = "9" + currentMarker;
                socket.emit('send', { message: text });
                box9status = true;
            }
    };
    

}