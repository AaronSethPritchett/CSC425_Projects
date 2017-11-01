window.onload = function() {
    var currentMarker;      
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
            firstLoad = false;
        } else {
            console.log(data.message);
            var cell = data.message.charAt(0);
            var fill = data.message.charAt(1);
            if(cell == 1)
                {
                    box1status = true;
                    //include if statement for X or O to find what to replace the cell with for css
                }
            else if(cell == "2")
                {
                    box2status = true;
                }
            else if(cell == "3")
                {
                    box3status = true;
                }
            else if(cell == "4")
                {
                    box4status = true;
                }
            else if(cell == "5")
                {
                    box5status = true;
                }
            else if(cell == "6")
                {
                    box6status = true;
                }
            else if(cell == "7")
                {
                    box7status = true;
                }
            else if(cell == "8")
                {
                    box8status = true;
                }
            else if(cell == "9")
                {
                    box9status = true;
                }
            else
            {
                console.log("Faulty message recieved!");    
            }
        }
    });

    box1.onclick = function() {
        if(box1status==false)
            {
                var text = "1" + currentMarker;
                socket.emit('send', { message: text });
                box1status = true;
            }
    };
     box2.onclick = function() {
        if(box2status==false)
            {
                var text = "2" + currentMarker;
                socket.emit('send', { message: text });
                box2status = true;
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