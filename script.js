let optionListAttacker = document.getElementById('attacker').options;
let optionListDefender = document.getElementById('defender').options;
let result = document.getElementById('result');

// TYPE OBJECT LIST
let options = [
  {
    text: 'Normal',
    value: 'normal',
    selected: true
  },
  {
    text: 'Fighting',
    value: 'fighting'
  },
  {
    text: 'Flying',
    value: 'flying'
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
    text: 'Rock',
    value: 'rock'
  },
  {
    text: 'Bug',
    value: 'bug'
  },
  {
    text: 'Ghost',
    value: 'ghost'
  },
  {
    text: 'Steel',
    value: 'steel'
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
    text: 'Psychic',
    value: 'psychic'
  },
  {
    text: 'Ice',
    value: 'ice'
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
  if (attacker === "normal" && 
  (defender === "normal" || defender === "fire" || defender === "water" ||
  defender === "grass" || defender === "electric" || defender === "ice" ||
  defender === "fighting" || defender === "poison" || defender === "ground" ||
  defender === "flying" || defender === "psychic" || defender === "bug" ||
  defender === "dragon" || defender === "dark" || defender === "fairy")) {
    return result.innerHTML = "Dano normal"
  } else if (attacker === "normal" && (defender === "rock" || defender === "steel")) {
    return result.innerHTML = "Metade do dano"
  } else {
    return result.innerHTML = "Não causa dano"
  }
};
