/* need to define GetHit, getCLickEvent(),the way to show Players' ships remain */
class player(){
    val player(showPlayer1).numberOfShips;
    val player(showPlayer2).numberOfShips;
    Boolean player(getHit) = false;
    do{
        if(showPlayer2.GetHit = true){
            document.showPlayer1.getClickEvent();
        }
        else if(showPlayer2.GetHit = false){
            document.showPlayer2.getClickEvent();
        }
        else if(showPlayer1.GetHit = false){
            document.showPlayer2.getClickEvent();
        }
        else if(showPlayer1.GetHit = true){
            document.showPlayer1.getClickEvent();
        }

    }while (showPlayer1.numberOfShips > 0 && showPlayer2.numberOfShips >0);

    if(showPlayer2.numberOfShips >0 && showPlayer1.numberOfShips == 0){
        alert('Player2 Win!');
        return showPlayer2(win);
    }
    else if(showPlayer2.numberOfShips==0 && showPlayer1.numberOfShips >0){
        alert('Player1 Win!');    
        return showPlayer1(win);
    }
    else{
        alert('Draw!');
        return draw;
    }
};