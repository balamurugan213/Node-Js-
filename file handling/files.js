const fs = require('fs');


// reading files
fs.readFile('./doc.txt',(err,data)=>{
 if(err){
     console.log(err)
 }
 console.log(data.toString());
});
console.log('last line');
// writing files 
fs.writeFile('./doc2.txt','hello kamiko',() =>{
    console.log('file written');
});
// directories
if(!(fs.existsSync('./assets'))){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}
else{
    fs.rmdir('./assets',(err) =>{
        if(err)
        {
            console.log(err);
        }
        console.log('folder deleted');
    });
}


// deleting files
if(fs.existsSync('./delete.txt')){
    fs.unlink('./delete.txt',(err) =>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}