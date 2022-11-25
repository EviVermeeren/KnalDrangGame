var audio = new Audio('images/boogiedance.mp3');               //speelt muziek wanneer je de game opent                                                   

var startgame = document.querySelector(".start");               //variabele voor de button 'speel' 
var startscreen = document.querySelector(".startscreen");       //variabele voor het startscherm 

var bier = document.querySelector(".bier");                     //variabele voor het bier 
var topbier = Math.random()*350;                                //variabele voor random positie van het bier (hoogte)
var leftbier=850;                                               //variabele voor de positie van het bier (links)

var water = document.querySelector(".water");                   //variabele voor het water 
var topwater = Math.random()*350;                               //variabele voor random positie van het water (hoogte)
var leftwater=850;                                              //variabele voor de positie van het water (links)
    
var gameover=document.querySelector(".gameover");               //variabele voor het game over scherm 
var gameoverscore=document.querySelector(".gameoverscore");     //variabele voor de game over score 

var winscreen=document.querySelector(".winscreen");             //variabele voor het win scherm
var winscore=document.querySelector(".winscore");               //variabele voor de win score 

var biereinde=document.querySelector(".bier");                  //variable om bier uit het scherm te laten gaan 
var watereinde=document.querySelector(".water");                //variable om water uit het scherm te laten gaan 
var promilleboard=document.querySelector(".promille");          //variable voor score van promille

bier.style.left=leftbier+"px";                                  //bier + positie
bier.style.top=topbier+"px";                                    //bier + positie

water.style.left=leftwater+"px";                                //water + positie
water.style.top=topwater+"px";                                  //water + positie

var aantalbier=0;                                               //beginscores
var aantalwater=0;                                              //beginscores
var promille=0;                                                 //beginscores

var player = document.querySelector(".player");                 //variabele om speler aan te duiden
var snelheid = 1;                                               //snelheid van de speler, is hier 1
    
var leftpos=0;                                                  //positie van de speler
var toppos=	Math.random()*380;	                                //random spawn positie van de speler 

player.style.top=toppos+"px";                                   //player + positie
player.style.left=leftpos+"px";                                 //player + positie
player.style.visibility="hidden";                               //player verbergen
player.style.visibility="hidden";                               //player verbergen

var teller=0;                                                   //startscore

var go;                                                         //variabele die later gebruikt gaat worden
var id;                                                         //variabele die later gebruikt gaat worden

startgame.addEventListener("click", begin);                                     //als je op de start button klikt, begint het spel (functie begin)
function begin(){     
    audio.play();                                                               //functie die aangeroepen wordt als je klikt op de start button
    go = setTimeout(move, 2000);                                                //timer om te starten
    id = setInterval(move, 5) ;                                                 //interval 
    
    startscreen.style.visibility = "hidden";                                    //startscherm (met uitleg) verdwijnt
    player.style.visibility="visible";                                          //speler wordt zichtbaar
    bier.style.visibility="visible";                                            //bier wordt zichtbaar
    water.style.visibility="visible";                                           //water wordt zichtbaar
    document.querySelector(".biertjes").innerHTML="🍺 "+ aantalbier;            //score voor bier (wordt aangepast met variabele)
    document.querySelector(".watertjes").innerHTML="🧊 "+ aantalwater;          //score voor water (wordt aangepast met variabele)
    document.querySelector(".promille").innerHTML="✨ "+ promille;              //score voor promille (wordt aangepast met variabele)
}      

function move() {

leftbier--;                                                                     //bier beweegt naar links (positie -1)
leftpos=leftpos+snelheid;                                                       //positie vvan de speler beweegt adhv de snelheid (= 1)
leftwater--;                                                                    //water beweegt naar links (positie -1)
    
if( collision (leftbier,topbier,25,40,leftpos,toppos,25,75)==true){             //collision tussen bier en player

    aantalbier++;                                                               //aantal punten van het bier gaat omhoog als je het bier raakt met je speler
    promille++;                                                                 //aantal punten van de promille gaat omhoog (want bier maakt je dronken) als je het bier raakt met je speler
    document.querySelector(".biertjes").innerHTML="🍺 "+aantalbier;             //aantal punten van het bier gaat omhoog (zichtbaar +1) en wordt aangepast in HTML
    document.querySelector(".promille").innerHTML="✨ "+promille;               //aantal punten van de promille gaat omhoog (zichtbaar +1) en wordt aangepast in HTML
    if(aantalbier==10){                                                         //als je 10 punten hebt bij bier, dan win je. 
    winscreen.style.visibility="visible";                                       //het winscherm komt tevoorschijn
    winscore.style.visibility="visible";                                        //winscore wordt zichtbaar 
    document.querySelector(".winscore").innerHTML="✨"+"<br>"+"Hoeveelheid promille in je bloed: "+promille;    //winscore wordt zichtbaar & je aantal promille komt in beeld
    biereinde.style.visibility="hidden";                                        //bier gaat weg (wordt eigenlijk onzichtbaar)
    bier.style.visibility="hidden";                                             //bier gaat weg (wordt eigenlijk onzichtbaar)
    water.style.visibility="hidden";                                            //water gaat weg (wordt eigenlijk onzichtbaar)
    player.style.visibility="hidden";                                           //player gaat weg (wordt eigenlijk onzichtbaar)
    promilleboard.style.visibility="hidden";                                    //score van promille gaat weg (wordt eigenlijk onzichtbaar)

    stoppen();                                                                  //einde van de functie
        
    }
    
    leftpos=-50;                                                                //positie is -50(meer naar links)
    toppos=Math.random()*380;		                                            //positie player is random
    player.style.top=toppos+"px"; 	                                            //positie van de player is random (van regel hierboven)
    
    leftbier=850;                                                               //positie is 850(meer naar rechts)
    topbier=Math.random()*350;                                                  //positie bier is random
    bier.style.top=topbier+"px";                                                //positie van het bier is random (van regel hierboven)
    
}

if( collision (leftwater,topwater,25,40,leftpos,toppos,25,75)==true){           //collision tussen player en water

    aantalwater++;                                                              //aantal punten van het water gaat omhoog als je het bier raakt met je speler
    promille--;                                                                 //aantal punten van de promille gaat omlaag (want water maakt je nuchter) als je het bier raakt met je speler
    document.querySelector(".watertjes").innerHTML="🧊 "+aantalwater;          //aantal punten van het water gaat omhoog (zichtbaar +1) en wordt aangepast in HTML
    document.querySelector(".promille").innerHTML="✨ "+promille;              //aantal punten van de promille gaat omlaag (zichtbaar -1) en wordt aangepast in HTML
    if(aantalwater==5){                                                         //als je 5 punten hebt bij water, dan verlies je. 
    gameover.style.visibility="visible";                                        //het verlies scherm komt tevoorschijn
    gameoverscore.style.visibility="visible";                                   //verliesscore wordt zichtbaar 
    document.querySelector(".gameoverscore").innerHTML="✨"+"<br>"+"Hoeveelheid promille in je bloed: "+promille; //winscore wordt zichtbaar & je aantal promille komt in beeld
    watereinde.style.visibility="hidden";                                       //water gaat weg (wordt eigenlijk onzichtbaar)
    water.style.visibility="hidden";                                            //water gaat weg (wordt eigenlijk onzichtbaar)
    bier.style.visibility="hidden";                                             //bier gaat weg (wordt eigenlijk onzichtbaar)
    player.style.visibility="hidden";                                           //player gaat weg (wordt eigenlijk onzichtbaar)
    promilleboard.style.visibility="hidden";                                    //score van promille gaat weg (wordt eigenlijk onzichtbaar)

    stoppen();                                                                  //einde van de functie
    
    }
    
    leftpos=-50;                                                                //positie is -50(meer naar links)
    toppos=Math.random()*380;		                                            //positie player is random
    player.style.top=toppos+"px"; 	                                            //positie van de player is random (van regel hierboven)
    
    leftwater=850;                                                              //positie is 850(meer naar rechts)
    topwater=Math.random()*350;                                                 //positie water is random
    water.style.top=topwater+"px";                                              //positie van het water is random (van regel hierboven)

}

bier.style.left=leftbier+"px";                                                  //positie van bier
if(leftbier<-200){                                                              //als de positie kleiner is dan -200 (dan volgende regel) 
    leftbier=850;                                                               //dan gaat hij terug naar positie 850
    topbier=Math.random()*350;                                                  //hoogte is random, zodat hij op een andere plaats tevoorschijn komt 
    bier.style.top=topbier+"px";                                                //positie van het bier adhv random
}

water.style.left=leftwater+"px";                                                //positie van water
if(leftwater<-200){                                                             //als de positie kleiner is dan -200 (dan volgende regel) 
    leftwater=850;                                                              //dan gaat hij terug naar positie 850
    topwater=Math.random()*350;                                                 //hoogte is random, zodat hij op een andere plaats tevoorschijn komt 
    water.style.top=topwater+"px";                                              //positie van het water adhv random
}

player.style.left=leftpos+"px";                                                 //positie van de player
if(leftpos>750){                                                                //als de positie groter is dan 750 (dan volgende regel)
    toppos=	Math.random()*350;	                                                //hoogte is random, zodat hij op een andere plaats tevoorschijn komt
    player.style.top=toppos+"px";                                               //positie van de player adhv random
    leftpos=0;                                                                  //player gaat terug naar het begin (= positie 0)
    document.querySelector(".promille").innerHTML="✨ "+promille;              //score wordt aangepast van je promille
}	

}

window.addEventListener('keydown', onKeyboardEvent, false);                     //functie om de player te besturen

var keycode = {                                                                 //keycodes initialiseren
    UP: 90,                                                                     //naar boven is Z (want op mijn game pc zijn de de gaming knopjes ZQSD, bij querty is dit WASD)
    DOWN: 83                                                                    //naar beneden is S (want op mijn game pc zijn de de gaming knopjes ZQSD, bij querty is dit WASD)
};

function onKeyboardEvent (event) {                                              //als je op een knop klikt, gebeurt er iets (dit is met de net geïnitialiseerde keycodes)
switch (event.keyCode) {                                                        //switch case, lijkt op een if maar toch anders
case keycode.UP:                                                                //als je de UP inklikt, ofwel de Z dus (zoals hierboven) dan gaat je poppetje naar boven (waarde -15px)
        toppos=toppos-15;		
        player.style.top=toppos+"px"; 	
    break;
case keycode.DOWN:                                                              //als je de DOWN inklikt, ofwel de S dus (zoals hierboven) dan gaat je poppetje naar beneden (waarde +15px)
        toppos=toppos+15;		                        
        player.style.top=toppos+"px"; 	
    break;
}
}
    
function collision(x1,y1,w1,h1,x2,y2,w2,h2){                                    //functie voor de collision te laten werken aan de hand van de x- en y-waarde, de hoogte en de breedte
    if (((x1 + w1 - 1) < x2) ||                                                 //dus: als x1 + y1 - 1 kleiner is dan x2 OF ... OF ... dan return false
        ((x2 + w2 - 1) < x1) || 
        ((y1 + h1 - 1) < y2) ||
        ((y2 + h2 - 1) < y1)){
        return false;	 
    }
    else {
        return true;
    }   
}
    
function stoppen(){                                                             //functie voor stoppen die boven gebruikt wordt 
    clearInterval(id);
        }