let score={};
function OpeningCeremony(score,Race100M) {
  setTimeout(()=> {
    console.log("Let the games begin");
     score= { red: 0, blue: 0, green: 0, yellow: 0 };
    Race100M(score,LongJump);
  }, 1000);
}

function Race100M(score,LongJump){
  setTimeout(() =>{
    
    // print score First 
    console.log("score: ",score);
    
    let time = {
    red:Math.floor(Math.random()*6 + 10),
    green:Math.floor(Math.random()*6 + 10),
    blue:Math.floor(Math.random()*6 + 10),
    yellow:Math.floor(Math.random()*6 + 10)
  };

    // const timeArr = Object.values(time);
    const timeArr = Object.keys(time).sort((a, b) => time[a] - time[b]);
    // timeArr.sort((a,b) => a- b);
    let winnerObj = {};
    winnerObj[timeArr[0]] = 50;
    winnerObj[timeArr[1]] = 25;
    // timeArr[0]=50;
    // timeArr[1]=25;
    console.log(timeArr[0] + " => Winner 100M race and gets 50 points");
    console.log(timeArr[1] + " => second winner 100M race and gets 25 points");
    score[timeArr[0]] += 50;
    score[timeArr[1]] += 25;

    console.log("Updated Score:->",score);
   
    LongJump(score, HighJump);
  },2000);
}

function LongJump(score,HighJump){
  setTimeout(() =>{

    console.log("prev socre: ",score);
    

    const num = Math.floor(Math.random() *4)+1;

    if(num==1){
      score.red +=150;
      console.log("Winner of Longjump is Red");
    }else if(num==2){
      score.blue +=150;
      console.log("Winner of Longjump is Blue");
    }else if(num==3){
      score.green +=150;
      console.log("Winner of Longjump is Green");
    }else if(num == 4){
      score.yellow +=150;
      console.log("winner of Longjump is Yellow");
    }

    console.log("Updated Score: ",score);
    
    HighJump(score,AwardCeremony);

  },2000);
}

function HighJump(score,AwardCeremony){

  console.log("Prev score: ",score);
 

  let colourInput =prompt("Please enter Colour to Highjump ");
  colourInput = colourInput.toLocaleLowerCase();

  if(colourInput==null || colourInput==""){

    console.log("Event was cancelled");
    // AwardCeremony(score);
    // break;
  }else if(colourInput=="red"){
    score.red += 100;
    console.log("Winner of Highjump is Red");

  }else if(colourInput =="blue"){
    score.blue += 100;
    console.log("Winner of Highjump is Blue");
  }else if(colourInput == "green"){
    score.green += 100;
    console.log("Winner of Highjump of Green");
  }else if(colourInput == "yellow"){
    score.yellow += 100;
    console.log("Winner of Highjump of Yellow");
  }

  console.log("Updated score: ", score);
  

  AwardCeremony(score);
}

function AwardCeremony(score){

  let sortedArr = Object.keys(score).sort((a, b) => score[a] - score[b]);
    let n = sortedArr.length;
    
    console.log(`${sortedArr[n-1]} Came First with ${score[sortedArr[n-1]]} points`);
    console.log(`${sortedArr[n-2]} Came Second with ${score[sortedArr[n-2]]} points`);
    console.log(`${sortedArr[n-3]} Came Third with ${score[sortedArr[n-3]]} points`);
    console.log(`${sortedArr[n-4]} Came Fourth with ${score[sortedArr[n-4]]} points`);
}
OpeningCeremony(score,Race100M);


// function Race100M(scoreObj, callbackFnc) {
//     setTimeout(function () {
//       const redTime = Math.floor(Math.random() * 6 + 10);
//       const blueTime = Math.floor(Math.random() * 6 + 10);
//       const greenTime = Math.floor(Math.random() * 6 + 10);
//       const yellowTime = Math.floor(Math.random() * 6 + 10);
//       const timeArr = [redTime, blueTime, greenTime, yellowTime];
//       timeArr.sort((a, b) => a - b);
//       const winner = timeArr[0];
//       const second = timeArr[1];
//       let winnerColor, secondColor;
//       if (redTime === winner) {
//         scoreObj.red += 50;
//         winnerColor = "Red";
//       } else if (blueTime === winner) {
//         scoreObj.blue += 50;
//         winnerColor = "Blue";
//       } else if (greenTime === winner) {
//         scoreObj.green += 50;
//         winnerColor = "Green";
//       } else if (yellowTime === winner) {
//         scoreObj.yellow += 50;
//         winnerColor = "Yellow";
//       }
//       if (redTime === second) {
//         scoreObj.red += 25;
//         secondColor = "Red";
//       } else if (blueTime === second) {
//         scoreObj.blue += 25;
//         secondColor = "Blue";
//       } else if (greenTime === second) {
//         scoreObj.green += 25;
//         secondColor = "Green";
//       } else if (yellowTime === second) {
//         scoreObj.yellow += 25;
//         secondColor = "Yellow";
//       }
//       console.log(`${winnerColor} won the 100M race and gets 50 points`);
//       console.log(`${secondColor} gets second place in the 100M race and gets 25 points`);
//       console.log("Updated Scores:", scoreObj);
//       callbackFnc(scoreObj, LongJump);
//     }, 3000);
//   }
  
//   function LongJump(scoreObj, callbackFnc) {
//     setTimeout(function () {
//       const colors = ["Red", "Blue", "Green", "Yellow"];
//       const randomIndex = Math.floor(Math.random() * colors.length);
//       const winnerColor = colors[randomIndex];
//       scoreObj[winnerColor.toLowerCase()] += 150;
//       console.log(`${winnerColor} won the Long Jump and gets 150 points`);
//       console.log("Updated Scores:", scoreObj);
//       callbackFnc(scoreObj, HighJump);
//     }, 2000);
//   }
  
//   function HighJump(scoreObj, callbackFnc) {
//     const colors = ["Red", "Blue", "Green", "Yellow"];
//     let highestJumpColor;
//     do {
//       highestJumpColor = prompt("What colour secured the highest jump?");
//       if (highestJumpColor === null || highestJumpColor === "") {
//         console.log("Event was cancelled");
//         break;
//       }
//       highestJumpColor = highestJumpColor.toLowerCase();
//     } while (!colors.includes(highestJumpColor));
  
//     if (highestJumpColor) {
//       scoreObj[highestJumpColor] += 100;
//       console.log(`${highestJumpColor} secured the highest jump and gets 100 points`);
//     }
//     console.log("Updated Scores:");
//   }
  
  

