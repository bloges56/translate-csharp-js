function main() {
  // Put your code here

  //array of all the names
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
  "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

  //print out all the places
  console.log("All Place name")

  for(const name of names){
    console.log(name)
  }

  //filter out and print all the names that start with 'The'
  const theNames = names.filter(name => {
    return name.startsWith('The');
  })

  console.log("'The' Place Names")
  for(name of theNames){
    console.log(name)
  }

}

main();