function main() {
  // Put your code here
  console.log("Do you believe in magic?")
  console.log("------------------------")

  const allSpells = GetAllSpells()
  const goodBook = MakeGoodSpellBook(allSpells)
  const evilBook = MakeEvilSpellBook(allSpells)

  DisplaySpellBook(goodBook)
  console.log()
  DisplaySpellBook(evilBook)
}

const DisplaySpellBook = ( spellbook ) => {
  console.log(spellbook.title)

  for(spell of spellbook.spells){
    console.log(spell.Name)
  }
}

const MakeEvilSpellBook = (allSpells) => {
  const title = "Evil Book"
  const evilSpells = allSpells.filter(spell => {
    return spell.IsEvil
  })
  debugger;
  return {
    title: title,
    spells: evilSpells
  }
}

const MakeGoodSpellBook = (allSpells) => {
  const title = "Good Book"
  const goodSpells = allSpells.filter(spell => {
    return !(spell.IsEvil)
  })
  return {
    title: title,
    spells: goodSpells
  }
}

const GetAllSpells = () => {
  return [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyReqired: 5.1
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyReqired: 2.99
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyReqired: 12.2
    },
    {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyReqired: 100.0
    },
    {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyReqired: 2921.5
    }
  ]
}

main();