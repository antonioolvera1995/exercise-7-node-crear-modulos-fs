const fs = require('fs');

const data = `const modulo1 = require('./lib/module1/index');
  const modulo2 = require('./lib/module2/index');
  modulo1.log();
  modulo2.log();`;
fs.writeFile('./app.js', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});




fs.mkdir('./lib', {
  recursive: false
}, (err) => {
  if (err) throw err;
  fs.mkdir('./lib/module1', {
    recursive: false
  }, (err) => {
    if (err) throw err;
    const data1 = `module.exports = {

    log:()=>{
        console.log('modulo 1');
    }
}`;
fs.writeFile('./lib/module1/index.js', data1, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

  });
  
  fs.mkdir('./lib/module2', {
    recursive: false
  }, (err) => {
    if (err) throw err;
    const data2 = `module.exports = {

    log:()=>{
        console.log('modulo 2');
    }
}`;
fs.writeFile('./lib/module2/index.js', data2, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
  });
  
});







