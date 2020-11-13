function main() {
  // Put your code here

  console.log("My Enemise List!")
  console.log("----------------")

  const enemies = GetEnemies()

  for(enemy of enemies){
    if(enemy.IsReallyHated){
      console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really, dislike)`)
    }
    else{
      console.log(`${enemy.FirstName} ${enemy.LastName}`)
    }
  }

}
//return a list of enemy objects
const GetEnemies = () => {
  return [
     {
       FirstName: "Joshua",
       LastName: "Flowers",
       Offenses: [
         "Being a jerk to me in elementary school",
         "Not being nice to me in elementary school"
       ],
       IsReallyHated: true
     },
     {
       FirstName: "Darth",
       LastName: "Vader",
       Offenses: [
         "Cut off Luke's hand",
         "Murdered all those kids",
         "Unkind management practices"
       ],
       IsReallyHated: false
     },
     {
       FirstName: "Betty",
       LastName: "Rudelady",
       Offenses: [
         "Phone calls in the theater",
         "Phone calls on the bus",
         "Phone calls in line at the grocery store",
         "Poor conversationalist"
       ],
       IsReallyHated: true
     },
     {
       FirstName: "Leon",
       LastName: "Peck",
       Offenses: [
           "Keeps giving me a hotplate"
       ],
       IsReallyHated: false
     }
   ]
 }
 
main();