//1. node [filename] in cmd to rune a js file
const name="sansa";
console.log(name);

//2. creaating a function
const greet=(name)=>{
    console.log(`hello ${name}`)
}

//3. calling th function
greet(name);
greet('franchi');

//4. "Window" is global obj in js same as "globel" is global obj in node
console.log(global);

//5. runs every time in the interval
const int = setInterval(() => {
    console.log('in the interval')
}, 1000);

//6. run ones in the given timeout
global.setTimeout(() => {
    console.log('in the timeout')
    //5.2 used to clear the interval
    clearInterval(int)
}, 3000);

//7. directory name and file name
console.log(__dirname);
console.log(__filename);

