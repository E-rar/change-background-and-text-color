let background=document.getElementById("body");//Zwei Variablen deklariert für die Übersichtlichkeit
let h1=document.getElementById("headline");

function GreenPurple(){ //für jeden runden div eine Funktion zum ändern der style werte von body und headline 
    background.style.backgroundColor='darkgreen';
    h1.style.color='purple';
}
function PurpleYellow(){
    background.style.backgroundColor='rgb(78, 52, 192)';
    h1.style.color='yellow';
}
function BlackOrange(){
    background.style.backgroundColor='black';
    h1.style.color='orange';
}
function DarkblueLightblue(){
    background.style.backgroundColor='darkblue';
    h1.style.color='lightblue';
}