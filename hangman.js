const input = require("readline-sync")

var HangmanList = [
        "    +----+",
        "    |     |",
        "    O     |",
        "   /|\\    |",
        "   / \\    |",
        "          |",
        "---------------"
    ];
var names = ['prem','cow','phone','ant','javascript'] 
var hint = ['maybe your name !!','animal give milk !','always in your pocket!','very small thing ','you learning this man ']

function useDel(){
  
  var carry = [];
  let rndNum = parseInt(Math.random()*5);
  let namesLen = names[rndNum].length - 1;
  let score = 10;
  let dic = {};
  let ind = 0;
  let counL = 0;
  
  for (let index = 0; index <= namesLen; index++) {
    carry.push('_')
  };

  for (let ele of names[rndNum]){
    if (dic[ele] === undefined){
      dic[ele] = 1
    }else{
      dic[ele] +=1
    };
  };

  while(ind < HangmanList.length ){
    console.log('\n',hint[rndNum],'\n',carry);
    let use = input.question('guess a letter:');

    if (dic[use] === undefined){
      for (let index = 0; index < ind+1; index++){
        console.log(HangmanList[index]);
      };
      ind++;

    }else{
      if (dic[use]===1){
        let rel = names[rndNum].indexOf(use);
        carry.splice(rel,1,use);

      }else if (dic[use]===2){
        let rel = names[rndNum].lastIndexOf(use);
        carry.splice(rel,1,use)

      }score+=10
      dic[use]-=1
      counL++

    };
    if (dic[use] === 0){
      delete dic[use]

    };
    if(counL === names[rndNum].length){
      console.log(hint[rndNum],'\n',carry);
      console.log('\n >>>',names[rndNum]);
      console.log('\n\tyou wine ',score);
      break;

    };
  };
  if (ind === HangmanList.length ){
    console.log('\n>>you lose man<<<');

  };
};


// star code
while (true){
  let c = input.question('if you want paly game yes/on :');
  if (c === 'yes'){
      useDel();

    }else{
    console.log('bye try again !!');
    break;

  };
};