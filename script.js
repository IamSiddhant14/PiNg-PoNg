var maxscore =" ";

var startingwith =" ";

var other=" ";

var winner=" ";

var loser=" ";

var rode1=0;

var rode2=0;

var ball = document.getElementById("ballop");
var rect = ball.getBoundingClientRect();
var x = rect.left;
var xr = ball.offsetWidth+x;
var y= rect.top;
var yb= ball.offsetHeight+y;
var disx = ((document.getElementsByClassName('gamezone').offsetWidth));
var disy = ((document.getElementsByClassName('gamezone').offsetHeight));
var rodeop = document.getElementsByClassName("rods");
var rectop = rodeop.getBoundingClientRect();
var xrode = rectop.left;
var xroderight = rectop.left+rodeop.offsetWidth;
var divis = document.getElementsByClassName("divis");
var divwidht= divis.offsetWidth;
var touch =true;

if(maxscore == 0){
    alert("SO THIS IS YOUR VERY FRIST GAME")
}else{
    alert("Rod"+ winner +"has maximum score of" + localStorage.getItem("maxscore"));
}

function score(){
    var max =Math.max(rode1,rode2)
    localStorage.setItem("maxscore", "max");
    if(rode1>rode2){
        window.alert("RODE1 IS THE WINNER");

    }else{
        window.alert("RODE2 IS THE WINNER");
    }

}


function moveit(){
  
    while(touch){

        if(((xr<disx) && (xr!=disx)) && (y==0)){

            if(!((x<xroderight) && (x>xrode-5))){
                var touch = false;
                score
                return 
            }

            var id =setInterval(() => {

                if(((xr<disx) && (xr!=disx)) && (yb<=disy)){
                    ball.scrollBy(20,-20)
                }else{
                     rode1 += 2;
                    clearInterval(id)
                }
                
            }, 20);
    
  

        }else if((xr==disx) && ((yb<disy) && (yb!==0))){

            var id =setInterval(() => {

                if((xr<=disx) && ((yb<disy) && (yb!==0))){
                    ball.scrollBy(-20,-20)
                }else{
                    clearInterval(id)
                }
                
            }, 20);
            
        }else if(((x<disx)&&(x!=0) ) && (yb==disy)){

            if(!((x<xroderight) && (x>xrode-5))){
                var touch = false;
                score
                return 
            }
            var id =setInterval(() => {

                if(((x<disx)&&(x!=0)) && (y>=0)){
                    ball.scrollBy(-20,20)
                }else{
                    rode2 += 2;
                    clearInterval(id)
                }
                
            }, 20);


        }else if((x==0) && (yb<disy)){
            var id =setInterval(() => {

                if((x>=0) && (y!=0)){
                    ball.scrollBy(20,20)
                }else{
                    clearInterval(id)
                }
                
            }, 20);
            
        }
   
    }
}


document.addEventListener("keypress", function(event){

        if(event.key=="d"){
            var left =document.getElementsByClassName("rods");
            left[0].scrollBy(20,0)
            left[1].scrollBy(20,0)

        }else if(event.key=="a"){
            var right =document.getElementsByClassName("rods");
            right.scrollBy(-20,0)

        }else if(event.key==="Enter"){
            moveit()     
        }else{
            alert("PLEASE USE A AND D KEYS ONLY")
        }
    })