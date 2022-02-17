let input = require('fs').readFileSync('stdin', 'utf8');
let [ initHour, initMinute, endHour, endMinute ] = input.split(" ").map(time => parseInt(time));


/**
 * hi, he, mi, me
 * if -> hi == he && mi == 0 && me == 0 - 24 horas
 *       16:00 e 16:00  - 00:34 e 00: 34 -> 24 horas
 * if -> hi < he - time = he - hi
 *       16:23 e 18:15  
 * if -> mi == me && hi != he -> if (hi > he) -> he += 24;
 * if -> mi
 */

function gameTime (initHour, initMinute, endHour, endMinute ) {
  let totalHour = endHour - initHour;
  if(totalHour < 0)
    totalHour += 24;
  
  let totalMinute = endMinute - initMinute;
  if (totalMinute < 0){
    totalMinute += 60;
    totalHour--;
  }
  
  if (totalHour === 0 && totalMinute === 0)
    return console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`);
  else
    return console.log(`O JOGO DUROU ${totalHour} HORA(S) E ${totalMinute} MINUTO(S)`);
  
}

gameTime(initHour, initMinute, endHour, endMinute);