/**
 * Created by chris on 21-3-2016.
 */
var clickscount = Math.ceil(5*Math.random());
var totalscore = clickscount*Math.random()*5;
var outputclick = document.getElementById('count');
var outputworth = document.getElementById('worth');
var theStars = document.querySelectorAll('.geen')

function colorstar(starnumber, procent) {
    var name ='s' + starnumber;
    procent = Math.min(procent,100);
    document.getElementById(name).style.width = procent+'%';
}

function colorofthestars(worth) {
    for(var i=1; i<6;i++){
        colorstar(i, worth*100);
        worth --;
    }
}

function outputs() {
    outputclick.innerHTML = clickscount;
outputworth.innerHTML = Math.ceil(10*totalscore/clickscount)/10;
colorofthestars(Math.ceil(10*totalscore/clickscount)/10);
}
outputs();

function happeningclick(){
    clickscount ++;
    var number = this.getAttribute('data-role');
    totalscore += parseInt(number);
    outputs();
}
for(var i=0; i<theStars.length; i++){
    theStars[i].addEventListener('click', happeningclick);
}