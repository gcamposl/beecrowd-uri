let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const days = parseInt(lines[0]);
const years = days / 365;
const months = (days % 365)/30;
const restDays = (days % 365)%30;
console.log(`${parseInt(years)} ano(s)
${parseInt(months)} mes(es)
${parseInt(restDays)} dia(s)`);


