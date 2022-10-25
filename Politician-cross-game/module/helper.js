
import { GAME } from "./variables.js";

/** All the helper functions */

/** use to set selected user on start game screen */
export function Profile(){
    GAME.selectedProfile.forEach(img => {
       img.addEventListener("click", e => {
           let target = e.target.dataset.id;
           removeImgSelection(GAME.selectedProfile);
           document.querySelector(`[data-id='${target}']`).classList.add("selected");

        //    swap values if user selecte second profile
        if (target == 'x2' || target == 'y2'){
            GAME.X_CLASS = "x2",
            GAME.Y_CLASS = "y2";
        }

        // set turns
        GAME.turn = target == 'y' || target == 'y2' ? true : false;

       });
    });
}

/**  this function is use to remove selected class*/
function removeImgSelection(img){
    [].forEach.call(img, function(el){
        el.classList.remove("selected");
    })
}


/**  funtion is use to setHoverEffect to the cell */
export function setHoverEffect(){
    GAME.boardElement.classList.remove(GAME.X_CLASS);
    GAME.boardElement.classList.remove(GAME.Y_CLASS);
    if (GAME.turn){
        GAME.boardElement.classList.add(GAME.Y_CLASS);
    }else{
        GAME.boardElement.classList.add(GAME.X_CLASS);
    }
}

/** this function is use to add current user in the cell */
export function markCell(cell, currentClass){
    cell.classList.add(currentClass)
}


/**  use this function to swap user turns */
export function swapTurns(turn){
    return turn =! turn;
}


/** end game function */
export function endGame(draw, winEl, drawEl){
    if (!draw){
        winEl.classList.add("show");
    }else{
        drawEl.classList.add("show");
    }
}

/**  use to check the draw result */
export function isDraw(flag){
    if (flag.length) return;
    return [...GAME.blockElements].every(cell => {
        return cell.classList.contains(GAME.X_CLASS) ||
        cell.classList.contains(GAME.Y_CLASS)
    })
}
