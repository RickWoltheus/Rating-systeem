

// variablen
var clickscount = Math.ceil(5*Math.random());
var totalscore = clickscount*Math.random()*5;
var outputclick = document.getElementById('count');
var outputworth = document.getElementById('worth');
var theStars = document.querySelectorAll('.geen')

//zorgt ervoor dat de sterren op het scherm komen
function colorstar(starnumber, procent) {
    var name ='s' + starnumber;
    procent = Math.min(procent,100);
    document.getElementById(name).style.width = procent+'%';
}

// vult meerdere sterren
function colorofthestars(worth) {
    for(var i=1; i<6;i++){
        colorstar(i, worth*100);
        worth --;
    }
}

// zegt hoeveel click er waren en geeft de waardering
function outputs() {
outputclick.innerHTML = clickscount;
outputworth.innerHTML = Math.ceil(10*totalscore/clickscount)/10;
colorofthestars(Math.ceil(10*totalscore/clickscount)/10);
    console.log(5);
}
outputs();

// geeft aan wat er word geklikt
function happeningclick(){
    clickscount ++;
    var number = this.getAttribute('data-role');
    totalscore += parseInt(number);
    outputs();
}

// kijkt of er clicks zijn
for(var i=0; i<theStars.length; i++){
    theStars[i].addEventListener('click', happeningclick);
    
}