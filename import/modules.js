// importing other file
const xyz=require('./people');
console.log(xyz);

// for loop
for (var i=0;i<4;i++)
{
    console.log(xyz.people[i], xyz.age[i])
}
// console.log(people);

// buildin module os details
const os =require('os');
console.log(os);
console.log(os.platform());
console.log(os.homedir());