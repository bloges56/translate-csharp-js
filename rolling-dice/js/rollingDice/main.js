function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!")
  console.log("---------------------------")

  for(let i = 0; i < 10; i++){
    const die1 = Roll()
    const die2 = Roll()

    let message = `${die1.String} + ${die2.String} === ${die1.Value + die2.Value}`

    if(die1.Value === die2.Value){
      message += " DOUBLES!"
    }

    console.log(message)
  }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Roll = () => {
  const dieValue = getRandomInt(1, 6)
  const die = {
    String: getDieString(dieValue),
    Value: dieValue
  }
  return die;
}

const getDieString = ( dieInt ) => {
  if(dieInt === 1){
    return "\u2680"
  }
  else if(dieInt === 2){
    return "\u2681"
  }
  else if(dieInt === 3){
    return "\u2682"
  }
  else if(dieInt === 4){
    return "\u2683"
  }
  else if(dieInt === 5){
    return "\u2684"
  }
  else if(dieInt === 6){
    return "\u2685"
  }
  return "Unkown"
}


main();