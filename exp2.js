// const fs = require('fs');

// //update (append)
// fs.appendFile('example.txt', '\nThis line was added.', (err)=> {
//     if(err) throw err;
//     console.log('File updated (appended)!');

// });


const fs = require('fs');
//delete
fs.unlink('example.txt', (err) => {
    if(err) throw err;
    console.log('file deleted!');
}
);

