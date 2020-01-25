function getMaxSize() {
    
    console.log('  Group by:')
    let readlineSync = require('readline-sync'),
        options = ['Max group size', 'Number of groups'],
        choice = readlineSync.keyInSelect(options, 'Choose an option: ');
    
    if (choice === 1){
        let numGroups = Number(readlineSync.question('  How many groups? '));
        return ['numGroups',numGroups];
    } else {
        let maxGroupSize = Number(readlineSync.question('  Max group size? '));
        return ['maxGroupSize',maxGroupSize];
    }
}

if (require.main === module) {
    console.log(getMaxSize());
}   
module.exports = getMaxSize