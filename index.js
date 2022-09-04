


var randNo1=Math.floor(Math.random()*6)+1;

var imageSource1="dice"+ randNo1 +".png";

var img1=document.querySelectorAll("img")[0];


img1.setAttribute("src",imageSource1);




var randNo2=Math.floor(Math.random()*6)+1;

var imageSource2="dice"+ randNo2 +".png";

var img2=document.querySelectorAll("img")[1];


img2.setAttribute("src",imageSource2);


if(randNo1 > randNo2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}

else if(randNo1 < randNo2){
document.querySelector("h1").innerHTML="Player 2 wins";

}

else{
  document.querySelector("h1").innerHTML="Game Tied";
}
