/* Define function to build groups, given a randomized array of names
      and an array of determined group sizes. */

function groupify(randomizedArray, groupSizes){
    const allGroups = [];
    
    for (let i = 0; i < groupSizes.length; i++){
        const group = [];
        for (let j = 0; j < groupSizes[i]; j++){
            group.push(randomizedArray.shift());
        }
        allGroups.push(group);
    }
    return allGroups;
}


/* Define a function to return an optimized array of group sizes, gven 
    the total number of people, and a max group size.  */
function sizeGroups(totalNum, maxSize){
    let smallerSize = maxSize - 1;
    const groupSizes = [];  
    

    // Algorithm to determine feasibility of given max group size, and return array of group sizes.
    let workingNum = totalNum;
    for (let i = Math.floor(totalNum/maxSize); i > 0; i--){
        workingNum = totalNum - maxSize*i;
        if (workingNum % smallerSize === 0){
            for (let j = 0; j < i; j++){
                groupSizes.push(maxSize);
            }
            while (workingNum > 0){
                groupSizes.push(smallerSize);
                workingNum -= smallerSize;
            }
            return groupSizes;
        }
    }
    throw new Error("This group size doesn't give reasonable groups!");
}

function sizeGroups2(totalNum,numGroups){
    let groupSizes = [];
    if (totalNum % numGroups === 0){
        for (let i = 0; i < numGroups; i++){
            groupSizes.push(totalNum/numGroups);
        }
        return groupSizes;
    }

    let workingNum = totalNum;
    let maxPossibleSize = Math.ceil(totalNum/numGroups);
    let smallerPossibleSize = maxPossibleSize - 1;
    if (smallerPossibleSize < 2){
        throw new Error("This number of groups isn't reasonable!");
    }
    for (let i = Math.floor(totalNum/maxPossibleSize); i > 0; i--){
        workingNum = totalNum - maxPossibleSize*i;
        if (workingNum % smallerPossibleSize === 0 && i + workingNum/smallerPossibleSize === numGroups){
            for (let j = 0; j < i; j++){
                groupSizes.push(maxPossibleSize);
            }
            while (workingNum > 0){
                groupSizes.push(smallerPossibleSize);
                workingNum -= smallerPossibleSize;
            }
            return groupSizes;
        }
    }
    throw new Error("This number of groups isn't reasonable!");   
}


let shuffle = require('./shuffle'); //accepts the file you put in the command line and randomizes it
let getMaxSize = require('./getMaxSize'); //creates the command prompt
let readNames = require('./readNames'); //creates command line argument into an array


let totalNum = readNames().length;
let namesRandom = shuffle(readNames());

let interactiveInput = getMaxSize();
if (interactiveInput[0] === 'maxGroupSize'){
    let maxSize = interactiveInput[1];
    groupSizes = sizeGroups(totalNum,maxSize);
}
if (interactiveInput[0] === 'numGroups'){
    let numGroups = interactiveInput[1];
    groupSizes = sizeGroups2(totalNum,numGroups);
}


let groups = groupify(namesRandom, groupSizes);

//Above, we implemented the other files that we collaborated with in the beginning
//GitHub can be a great resource in the process of combining files in this manner, but
    //it ultimately has to do with the fact they are in the same directory

console.log(`\n  Generating ${groups.length} random groups...\n`);
for (let i = 0; i < groups.length; i++) {
    let label = `  Group ${i + 1}`;
    console.log(`${label}: ${groups[i]}`);
    console.log();
}