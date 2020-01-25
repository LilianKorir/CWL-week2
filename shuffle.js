



function shuffle(array) {
    var currentIndex = array.length; // temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
  // Used like so
  

  if (require.main === module){

    var arr = ['Shaah Cooper',
    'Chloe deBeus',
    'Lily Korir',
    'Christos Koumpotis',
    'Rachel McLean',
    'Satchel Moore',
    'Keith Ng',
    'Joseph Richards',
    'Kendahl Ross',
    'Will Smith',
    'Jalen Staples',
    'Pat Sullivan',
    'Jaelyn Taylor',
    'Jason Zheng'];
  console.log(shuffle(arr));
  }
  
  module.exports = shuffle