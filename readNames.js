function readNames(){
    let process = require('process');
    let fs = require('fs');

    let fileName = process.argv[2];
    if (!fs.existsSync(fileName)){
        console.log(`Error: your file doesn't exist, I received ${fileName}`);
        process.exit();
    }

    let contents = fs.readFileSync(fileName, 'utf-8');

    const nameList = contents.split('\n');

    return nameList;
}

if (require.main === module){
    // any tests here
}
module.exports = readNames