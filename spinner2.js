const spinner = function(){
let delay = 100;
let array = ['/', '-', '\\', '|', '/', '-', '\\', '|' ]
for (let item of array) {
  delay += 200
  setTimeout(() => {
    process.stdout.write(`\r${item}   `);
  }, delay);
}
};
spinner();



