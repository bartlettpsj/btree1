const readline = require('readline');
const BTree = require('./btree');
const tree = new BTree();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => { 
    const num = Number.parseInt(line);
    console.log(`Got ${num}`);
    if (num) {
      tree.addValue(num);
    } else {
      tree.print();
      process.exit();
    }
});

// const numbers = [7,9,2,3,6,8,4];
// numbers.forEach(num => tree.addValue(num));

// tree.print();

