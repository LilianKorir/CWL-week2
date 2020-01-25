# Command line arguments

See [Command Line Arguments in Node.js](https://stackabuse.com/command-line-arguments-in-node-js/).

Command line arguments are strings of text used to pass additional information to a program when an application is run through the command line interface (CLI) of an operating system.

## Why use CLA's?
- Pass info to an application before it starts
- CLA's are passed as strings, which can easily be converted to other data types.
- No limits on # of CLA's

## Passing CLA's in Node.js

### Using process.argv
Here, we use a "process.argv" array to pass arguments

#### Code sample:
In JS file:
   
    for (let j = 0; j < process.argv.length; j++){
        console.log(j + ' -> ' + (process.argv[j]));
    }
    
In command line:

`$ node file.js tom jack 43`
*Here we pass 3 arguments into the "file.js" program.*

### Using minimist module
The minimist module will parse arguments from the process.argv array and transform it into an easier-to-use associative array, from which you can access the elements via index names AND index numbers.

#### Code samples:
In JS file:

    const args = require('minimist)(process.argv.slice(2));

    console.log(args);
    console.log(args[i]);
*Note that this code uses slice to remove all prior array elements starting from the first index passed as parameter*

In command line:

`node file.js -i jacob -j 45`
*Here, we specified "i" as the name for the second index

### Using the yargs module:
Using this module, you can pass arguments in the form of key-value pairs and later access the argument values in your program using corresponding keys.

*Note: install the yargs module with the following command:*
`$ npm install yargs`

#### Sample code:
In JS file:

    const args = require('yargs').argv;

    console.log('Name: ' + args.name);
    console.log('Age: ' + args.age);
*In the above script, we display values provided for the 'name' and 'age' arguments, passed via the command line.*

In command line:

`$ node file.js --name=jacob --age=45`

The output will look like this:
    $ node file.js --name=jacob --age=45
    Name: jacob
    Age: 45

#### Features of yargs:
- .command() : helps you create, expose, and call Node functions from the command line (refer back to [website](https://stackabuse.com/command-line-arguments-in-node-js/) for this)



