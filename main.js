import chalk from 'chalk';
import boxen from 'boxen';

console.log(boxen(chalk.bgMagenta('Cat'), {width: 25}));

console.log(boxen('Suvi', {padding: 10}));

console.log(boxen(chalk.bgBlue('Hans-Joosep'), {title: 'Suvi', titleAlignment: 'center'}));
console.log(boxen(chalk.bgRed('Suvi'), {title: 'Hans'}));
console.log(boxen(chalk.bgGreen('POLU'), {padding: 5, margin: 5, borderStyle: 'double'}));
