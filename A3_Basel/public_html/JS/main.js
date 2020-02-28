/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//declaring variables
var kanna = document.getElementById("Kanna");
var x = 0;
var y = 0;
var timerID;

function updateChase(e){
      x = y + 2;
      y = y + 2;
      kanna.style.left  = x + 'px';
      kanna.style.top = y + 'px';
    }
function startChase(){
    timerID = setInterval(updateChase, 16);
}

document.body.onload = startChase;