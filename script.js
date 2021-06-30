var maxscore =" ";

var startingwith =" ";

var other=" ";

var winner="  ";

var loser=" ";
if(maxscore == 0){
    alert("SO THIS IS YOUR VERY FRIST GAME")
}else{

    alert("Rod"+ winner +"has maximum score of" + maxscore);

}

function moveit(){
    var div = document.getElementById("ballop");
    var rect = div.getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    
}

document.addEventListener("keypress", function(event){

        if(event.key=="d"){
            var left =document.getElementsByClassName("rods");
            left.scrollBy(20,0)

        }else if(event.key=="a"){
            var right =document.getElementsByClassName("rods");
            right.scrollBy(-20,0)

        }else if(event.key==="Enter"){

            moveit()


            }
             
        }else{
            alert("PLEASE USE A AND D KEYS ONLY")
        
        }
        


})



