const optionListAttacker = document.getElementById('attacker').options;
const optionListDefender = document.getElementById('defender').options;
const result = document.getElementById('result');

// TYPE OBJECT LIST
let options = [
  {
    text: 'Normal',
    value: 'normal',
    selected: true
  },
  {
    text: 'Fire',
    value: 'fire'
  },
  {
    text: 'Water',
    value: 'water'
  },
  {
    text: 'Grass',
    value: 'grass'
  },
  {
    text: 'Electric',
    value: 'electric'
  },
  {
    text: 'Ice',
    value: 'ice'
  },
  {
    text: 'Fighting',
    value: 'fighting'
  },
  {
    text: 'Poison',
    value: 'poison'
  },
  {
    text: 'Ground',
    value: 'ground'
  },
  {
    text: 'Flying',
    value: 'flying'
  },
  {
    text: 'Psychic',
    value: 'psychic'
  },
  {
    text: 'Bug',
    value: 'bug'
  },
  {
    text: 'Rock',
    value: 'rock'
  },
  {
    text: 'Ghost',
    value: 'ghost'
  },
  {
    text: 'Dragon',
    value: 'dragon'
  },
  {
    text: 'Dark',
    value: 'dark'
  },
  {
    text: 'Steel',
    value: 'steel'
  },
  {
    text: 'Fairy',
    value: 'fairy'
  }
];

// SELECT ATTACKER LIST
options.forEach(option =>
  optionListAttacker.add(
    new Option(option.text, option.value, option.selected)
  )
);

// SELECT DEFENDER LIST
options.forEach(option =>  
  optionListDefender.add(
    new Option(option.text, option.value, option.selected)
  )
);

// COMPARISON FUNCTION
function crossType () {
  const eAttacker = document.getElementById('attacker')
  const attacker = eAttacker.value;
  const eDefender = document.getElementById('defender')
  const defender = eDefender.value;


  // NORMAL ATTACKER
  if (attacker === "normal" && (defender === "normal" || defender === "fire" ||
  defender === "water" || defender === "grass" || defender === "electric" || 
  defender === "ice" || defender === "fighting" || defender === "poison" || 
  defender === "ground" || defender === "flying" || defender === "psychic" || 
  defender === "bug" || defender === "dragon" || defender === "dark" || 
  defender === "fairy")) {
    return result.innerHTML = "Dano normal"
  } else if (attacker === "normal" && (defender === "rock" || 
  defender === "steel")) {
    return result.innerHTML = "Pouco efetivo"
  } else if (attacker === "normal" && defender === "ghost") {
    return result.innerHTML = "Não causa dano"
  }

  // FIRE ATTACKER

    else if (attacker === "fire" && (defender === "normal" || 
  defender === "electric" || defender === "fighting" || 
  defender === "poison" || defender === "ground" || defender === "flying" || 
  defender === "psychic" || defender === "ghost" || defender === "dark" || 
  defender === "fairy")) {
    return result.innerHTML = "Dano normal"
  } else if (attacker === "fire" && (defender === "grass" || 
  defender === "ice" || defender === "bug" || defender === "steel")) {
    return result.innerHTML = "Super efetivo"
  } else if (attacker === "fire" && (defender === "fire" || 
  defender === "water" || defender === "rock" || defender === "dragon")) {
    return result.innerHTML = "Pouco efetivo"
  }
  
  // WATER ATTACKERS
    else if (attacker === "water" && (defender === "normal" || 
  defender === "electric" || defender === "ice" || defender === "fighting" || 
  defender === "poison" || defender === "flying" || defender === "psychic" || 
  defender === "bug" || defender === "ghost" || defender === "dark" || 
  defender === "steel" || defender === "fairy")) {
    return result.innerHTML = "Dano normal"
  } else if (attacker === "water" && (defender === "fire" || 
  defender === "ground" || defender === "rock")) {
    return result.innerHTML = "Super efetivo"
  } else if (attacker === "water" && (defender === "water" || 
  defender === "grass" || defender === "dragon")) {
    return result.innerHTML = "Pouco efetivo"
  }

  // FIGHTING ATTACKER
    else if (attacker === "fighting" && (defender === "fire" || 
  defender === "water" || defender === "grass" || defender === "electric" || 
  defender === "fighting" || defender === "ground" || defender === "dragon")) {
    return result.innerHTML = "Dano normal"
  } else if (attacker === "fighting" && (defender === "normal" || 
  defender === "ice" || defender === "rock" || defender === "dark" || 
  defender === "steel")) {
    return result.innerHTML = "Super efetivo"
  } else if (attacker === "fighting" && (defender === "poison" || 
  defender === "flying" || defender === "psychic" ||  defender === "bug" || 
  defender === "fairy")) {
    return result.innerHTML = "Pouco efetivo"
  } else if (attacker === "fighting" && defender === "ghost") {
    return result.innerHTML = "Não causa dano"
  }
  else {
    return result.innerHTML = "nada ainda"
  };  

};


window.onload = crossType();
