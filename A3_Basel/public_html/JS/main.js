/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//declaring global variables
var kanna = document.getElementById("Kanna");
var x = 0;
var y = 0;
var stepX = 5;
var stepY = 5;

//function to get cursor coordinates
function cursorPos(e){
    x = e.clientX;
    y= e.clientY;
}

//function to calculate the distance from cursor to image
function calculatePos(pos, step, end){
    if(pos < end){
        var newPos = pos + step;
        if(newPos < end){return newPos;}
        else {return end;}
    }
    else{
        var newPos = pos - step;
        if(newPos > end) {return newPos;}
        else {return end;}
    }
}

//function to allow the image to follow the cursor
function followCursor(){
    var kannaX = parseInt(kanna.style.left);
    var kannaY = parseInt(kanna.style.top);
    kannaX = calculatePos(kannaX, stepX, x );
    kannaY = calculatePos(kannaY, stepY, y);
    kanna.style.left = kannaX + 'px';
    kanna.style.top = kannaY + 'px';
    setTimeout(() => {followCursor();}, 16);
}

//activates the follow cursor function
followCursor();

//when the document loads and the cursor moves on the body it allows it to track the coordinates at all time
document.body.onmousemove = cursorPos;