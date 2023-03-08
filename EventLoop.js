import thenFs from 'then-fs';

console.log('A');

thenFs.readFile('./Promise/file/1.txt', 'utf-8').then(data => {
  console.log('B');
});

setTimeout(() => {
  console.log('C');
}, 0);

console.log('D');