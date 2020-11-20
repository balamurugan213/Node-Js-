const fs=require('fs');

// create stream
const readStream =fs.createReadStream('./blog.txt',{encoding:'utf-8'});
const writeStream =fs.createWriteStream('./blog2.txt');
const writeStreams =fs.createWriteStream('./blog3.txt');

// runs in every buffer loading
readStream.on('data',(chunk) =>{
    console.log('-------New chunk-------');
    console.log(chunk);
    writeStream.write('\nNew chunk\n');
    writeStream.write(chunk);
})

// piping
readStream.pipe(writeStreams);