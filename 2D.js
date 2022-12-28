
function highestRunScorer(playersInfo) {
    //let highestScorer = playersInfo[0][0];
   // let highestScore = playersInfo[0][1];
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];
  
    for (var x = 1; x < playersInfo.length; x++) {
      if (highestScore < playersInfo[x][1]) {
        highestScore = playersInfo[x][1];
        highestScorer = playersInfo[x][0];
      }
    }
  
    return highestScore;
  }
  
  var playersInfo = [
    ["Ashraful", 95],
    ["Mizan", 225],
   
    ["Rakib", 45],
    ["lu", 105],
  ];

  let x = highestRunScorer(playersInfo);
  console.log(x);
  
 // var name = highestRunScorer(playersInfo);
  //console.log(names);