let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  arr.forEach(element => {
     if(element.profession == "developer"){
        console.log(element)
     }
  })
}

PrintDeveloper();

function addData() {
  let data = {id:4,name:"susan",age:"20",profession:"intern"}
  let store1 = arr.concat(data)
  console.log(store1)
}

addData();

function removeAdmin() {
  
}

removeAdmin()


function concatenateArray() {
  let data = {id:4,name:"susan",age:"20",profession:"intern"}
  let st = [...arr,data]
  console.log(st)
}

concatenateArray();
// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  
}
