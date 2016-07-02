// still slaying?
var slaying = true;

// did you hit?
var youHit = false;

// how much damage this round?
var damageThisRound = 0;

// how much damage have you done?
var totalDamage = 0;

// dragon Armor Class and Hit Points
var dragonAC = 10;
var dragonHP = 10;

// player attack bonus
var playerBonus = 1;

function consoleLog(str){
  document.getElementById("output").innerHTML += '<br>' + str;
}

function calcHit(seed){
    var i = Math.floor(Math.random() * seed + 1);
    consoleLog('Roll: ' + i + ' + ' + playerBonus + '(Attack Bonus)');
    i += playerBonus;
    consoleLog('Attack roll: ' + i);
    if(i < dragonAC){
        youHit = false;
    } else {
        youHit = true;
    }

}

function calcDamage(seed){
    
    var i = Math.floor( Math.random () * seed + 1);
    return i;
    
}

function reset(){
  playerBonus = 1;
  totalDamage = 0;
  document.getElementById("output").innerHTML = "A new ATTACK!";
  slaying = true;
  main();
}

function resetButton(){
  var btn = document.getElementById("btnMain");
  btn.innerHTML = "Play Again";
  btn.onclick = reset;
}

function main(){

  while(slaying){

    damageThisRound = calcDamage(5);
    calcHit(20);
    
    if(youHit){
        slaying = true;
        consoleLog('You hit for ' + damageThisRound + ' damage.');
        playerBonus += 2;
        consoleLog('You learn. New attack bonus: ' + playerBonus);
        totalDamage += damageThisRound;
        if (totalDamage >= dragonHP){
            consoleLog('<h1>Dragon killah!</h1>');
            consoleLog('<img src="https://kushsrivastava.files.wordpress.com/2012/11/test.gif" width="20%" height="20%" />');
            slaying = false;
            resetButton();
        } else {
            consoleLog('The dragon has ' + (dragonHP - totalDamage) + ' health left.');
            consoleLog('<hr>');
        }
        
    } else {
        slaying = false; 
        consoleLog('You missed, and that is bad. You died.');
        resetButton();
    }
      
  }
    
}


