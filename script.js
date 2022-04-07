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

// RESULT STYLE FUNCTION
function resultStyle () {
  const resultWp = document.getElementById('resultWp');
  const resultValue = document.getElementById('result').innerHTML;

  if (resultValue === "x1") {
    return resultWp.className = "result-normal";
  } else if (resultValue === "x2") {
    return resultWp.className = "result-se";
  } else if (resultValue === "½") {
    return resultWp.className = "result-pe";
  } else {
    return resultWp.className = "result-null";
  } 
};

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
    return result.innerHTML = "x1"
  } else if (attacker === "normal" && (defender === "rock" || 
  defender === "steel")) {
    return result.innerHTML = "½"
  } else if (attacker === "normal" && defender === "ghost") {
    return result.innerHTML = "0"
  }

  // FIRE ATTACKER
    else if (attacker === "fire" && (defender === "normal" || 
  defender === "electric" || defender === "fighting" || 
  defender === "poison" || defender === "ground" || defender === "flying" || 
  defender === "psychic" || defender === "ghost" || defender === "dark" || 
  defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "fire" && (defender === "grass" || 
  defender === "ice" || defender === "bug" || defender === "steel")) {
    return result.innerHTML = "x2"
  } else if (attacker === "fire" && (defender === "fire" || 
  defender === "water" || defender === "rock" || defender === "dragon")) {
    return result.innerHTML = "½"
  }
  
  // WATER ATTACKER
    else if (attacker === "water" && (defender === "normal" || 
  defender === "electric" || defender === "ice" || defender === "fighting" || 
  defender === "poison" || defender === "flying" || defender === "psychic" || 
  defender === "bug" || defender === "ghost" || defender === "dark" || 
  defender === "steel" || defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "water" && (defender === "fire" || 
  defender === "ground" || defender === "rock")) {
    return result.innerHTML = "x2"
  } else if (attacker === "water" && (defender === "water" || 
  defender === "grass" || defender === "dragon")) {
    return result.innerHTML = "½"
  }

  // GRASS ATTACKER
    else if (attacker === "grass" && (defender === "normal" || 
  defender === "electric" || defender === "ice" || defender === "fighting" || 
  defender === "psychic" || defender === "ghost" || defender === "dark" || 
  defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "grass" && (defender === "water" || 
  defender === "ground" || defender === "rock")) {
    return result.innerHTML = "x2"
  } else if (attacker === "grass" && (defender === "fire" || 
  defender === "grass" || defender === "poison" || defender === "flying" || 
  defender === "bug" || defender === "dragon" || defender === "steel")) {
    return result.innerHTML = "½"
  }

  // ELECTRIC ATTACKER
    else if (attacker === "electric" && (defender === "normal" || 
  defender === "fire" || defender === "ice" || defender === "fighting" || 
  defender === "poison" || defender === "psychic" || defender === "bug" || 
  defender === "rock" || defender === "ghost" || defender === "dark" || 
  defender === "steel" || defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "electric" && (defender === "water" || 
  defender === "flying")) {
    return result.innerHTML = "x2"
  } else if (attacker === "electric" && (defender === "grass" || 
  defender === "electric" || defender === "dragon")) {
    return result.innerHTML = "½"
  } else if (attacker === "electric" && defender === "ground") {
    return result.innerHTML = "0"
  }

  // ICE ATTACKERS
    else if (attacker === "ice" && (defender === "normal" || 
  defender === "electric" || defender === "fighting" || defender === "poison" || 
  defender === "psychic" || defender === "bug" || defender === "rock" || 
  defender === "ghost" || defender === "dark" || defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "ice" && (defender === "grass" || 
  defender === "ground" || defender === "flying" || defender === "dragon")) {
    return result.innerHTML = "x2"
  } else if (attacker === "ice" && (defender === "fire" || 
  defender === "water" || defender === "ice" ||  defender === "steel")) {
    return result.innerHTML = "½"
  }

  // FIGHTING ATTACKER
    else if (attacker === "fighting" && (defender === "fire" || 
  defender === "water" || defender === "grass" || defender === "electric" || 
  defender === "fighting" || defender === "ground" || defender === "dragon")) {
    return result.innerHTML = "x1"
  } else if (attacker === "fighting" && (defender === "normal" || 
  defender === "ice" || defender === "rock" || defender === "dark" || 
  defender === "steel")) {
    return result.innerHTML = "x2"
  } else if (attacker === "fighting" && (defender === "poison" || 
  defender === "flying" || defender === "psychic" ||  defender === "bug" || 
  defender === "fairy")) {
    return result.innerHTML = "½"
  } else if (attacker === "fighting" && defender === "ghost") {
    return result.innerHTML = "0"
  }

  // POISON ATTACKERS
    else if (attacker === "poison" && (defender === "normal" ||
  defender === "fire" || defender === "water" || defender === "eletric" ||
  defender === "ice" || defender === "fighting" || defender === "flying" ||
  defender === "bug" || defender === "dragon" || defender === "dark")) {
    return result.innerHTML = "x1"
  } else if (attacker === "poison" && (defender === "grass" ||
  defender === "fairy")) {
    return result.innerHTML = "x2"
  } else if (attacker === "poison" && (defender === "poison" ||
  defender === "ground" || defender === "rock" ||defender === "ghost")) {
    return result.innerHTML = "½"
  } else if (attacker === "poison" && defender === "steel") {
    return result.innerHTML = "0"
  }

  // GROUND ATTACKERS
    else if (attacker === "ground" && (defender === "normal" ||
  defender === "water" || defender === "ice" || defender === "fighting" ||
  defender === "ground" || defender === "psychic" ||defender === "ghost" ||
  defender === "dragon" ||defender === "dark" || defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "ground" && (defender === "fire" ||
  defender === "eletric" ||defender === "poison" ||defender === "rock" ||
  defender === "steel")) {
    return result.innerHTML = "x2"
  } else if (attacker === "ground" && (defender === "grass" ||
  defender === "bug")) {
    return result.innerHTML = "½"
  } else if (attacker === "ground" && defender === "flying") {
    return result.innerHTML = "0"
  }

  // FLYING ATTACKERS
    else if (attacker === "flying" && (defender === "normal" ||
  defender === "fire" || defender === "water" || defender === "ice" ||
  defender === "poison" || defender === "ground" || defender === "flying" ||
  defender === "psychic" || defender === "ghost" || defender === "dragon" ||
  defender === "dark" || defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "flying" && (defender === "grass" ||
  defender === "fighting" || defender === "bug")) {
    return result.innerHTML = "x2"
  } else if (attacker === "flying" && (defender === "eletric" ||
  defender === "rock" || defender === "steel")) {
    return result.innerHTML = "½"
  }

  // PSYCHIC ATTACKER
    else if (attacker === "psychic" && (defender === "normal" || 
  defender === "fire" || defender === "water" || defender === "grass" || 
  defender === "electric" || defender === "ice" || defender === "ground" || 
  defender === "flying" || defender === "bug" || defender === "rock" || 
  defender === "ghost" || defender === "dragon" || defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "psychic" && (defender === "fighting" || 
  defender === "poison")) {
    return result.innerHTML = "x2"
  } else if (attacker === "psychic" && (defender === "psychic" || 
  defender === "steel")) {
    return result.innerHTML = "½"
  } else if (attacker === "psychic" && defender === "dark") {
    return result.innerHTML = "0"
  }

  // BUG ATTACKER
    else if (attacker === "bug" && (defender === "normal" || 
  defender === "water" || defender === "electric" || defender === "ice" || 
  defender === "ground" || defender === "bug" || defender === "rock" || 
  defender === "dragon")) {
    return result.innerHTML = "x1"
  } else if (attacker === "bug" && (defender === "grass" || 
  defender === "psychic" || defender === "dark")) {
    return result.innerHTML = "x2"
  } else if (attacker === "bug" && (defender === "fire" || 
  defender === "fighting" || defender === "poison" || defender === "flying" || 
  defender === "ghost" || defender === "steel" || defender === "fairy")) {
    return result.innerHTML = "½"
  }

  // ROCK ATTACKER
    else if (attacker === "rock" && (defender === "normal" || 
  defender === "water" || defender === "grass" || defender === "electric" || 
  defender === "poison" || defender === "psychic" || defender === "rock" || 
  defender === "ghost" || defender === "dragon" || defender === "dark" || 
  defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "rock" && (defender === "fire" || 
  defender === "ice" || defender === "flying" || defender === "bug")) {
    return result.innerHTML = "x2"
  } else if (attacker === "rock" && (defender === "fighting" || 
  defender === "ground" || defender === "steel")) {
    return result.innerHTML = "½"
  } 

  // GHOST ATTACKERS
    else if (attacker === "ghost" && (defender === "fire" || 
  defender === "water" || defender === "grass" || defender === "electric" || 
  defender === "ice" || defender === "fighting" || defender === "poison" || 
  defender === "ground" || defender === "flying" || defender === "bug" || 
  defender === "rock" || defender === "dragon" || defender === "steel" || 
  defender === "fairy")) {
    return result.innerHTML = "x1"
  } else if (attacker === "ghost" && (defender === "psychic" || 
  defender === "ghost")) {
    return result.innerHTML = "x2"
  } else if (attacker === "ghost" && defender === "dark") {
    return result.innerHTML = "½"
  } else if (attacker === "ghost" && defender === "normal") {
    return result.innerHTML = "0"
  }

  // DRAGON ATTACKER
    else if (attacker === "dragon" && (defender === "normal" || 
  defender === "fire" || defender === "water" || defender === "grass" || 
  defender === "electric" || defender === "ice" || defender === "fighting" || 
  defender === "poison" || defender === "ground" || defender === "flying" || 
  defender === "psychic" || defender === "bug" || defender === "rock" || 
  defender === "ghost" || defender === "dark")) {
    return result.innerHTML = "x1"
  } else if (attacker === "dragon" && defender === "dragon") {
    return result.innerHTML = "x2"
  } else if (attacker === "dragon" && defender === "steel") {
    return result.innerHTML = "½"
  } else if (attacker === "dragon" && defender === "fairy") {
    return result.innerHTML = "0"
  }

  // DARK ATTACKER
    else if (attacker === "dark" && (defender === "dragon" || 
  defender === "normal" || defender === "fire" || defender === "water" || 
  defender === "grass" || defender === "electric" || defender === "ice" || 
  defender === "poison" || defender === "ground" || defender === "flying" || 
  defender === "bug" || defender === "rock" )) {
    return result.innerHTML = "x1"
  } else if (attacker === "dark" && (defender === "psychic" || 
  defender === "ghost" )) {
    return result.innerHTML = "x2"
  } else if (attacker === "dark" && (defender === "steel" || 
  defender === "fighting" || defender === "dark" || defender === "fairy" )) {
    return result.innerHTML = "½"
  }

  // STEEL ATTACKERS
    else if (attacker === "steel" && (defender === "normal" ||
  defender === "grass" || defender === "fighting" || defender === "poison" ||
  defender === "ground" || defender === "flying" || defender === "psychic" ||
  defender === "bug" ||  defender === "ghost" || defender === "dragon" ||
  defender === "dark")) {
    return result.innerHTML = "x1"
  } else if (attacker === "steel" && (defender === "ice" ||
  defender === "rock" || defender === "fairy")) {
    return result.innerHTML = "x2"
  } else if (attacker === "steel" && (defender === "fire" ||
  defender === "water" || defender === "eletric" || defender === "steel")) {
    return result.innerHTML = "½"
  }

  // FAIRY ATTACKER
    else if (attacker === "fairy" && (defender === "normal" || 
  defender === "water" || defender === "grass" || defender === "electric" || 
  defender === "ice" || defender === "ground" || defender === "flying" || 
  defender === "psychic" || defender === "bug" || defender === "rock" || 
  defender === "ghost" || defender === "fairy" )) {
    return result.innerHTML = "x1"
  } else if (attacker === "fairy" && (defender === "fighting" || 
  defender === "dragon" || defender === "dark")) {
    return result.innerHTML = "x2"
  } else if (attacker === "fairy" && (defender === "fire" || 
  defender === "poison" || defender === "steel")) {
    return result.innerHTML = "½"
  }

  else {
    return result.innerHTML = "nada ainda"
  }

};

// POKEMON RENDERING
function pokeRenderAttacker() {
  const eAttacker = document.getElementById('attacker');
  const attacker = eAttacker.value;  
  const attackerImg = document.getElementById('attackerImg');
  const chibiAttackerImg = document.getElementById('chibiAttackerImg');

  if (attacker === 'normal') {
    return (
      attackerImg.src = "./assets/snorlax.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/snorlax2.png"
    )
  } else if (attacker === 'fire') {
    return (
      attackerImg.src = "./assets/charizard.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/charizard2.png"
    )
  } else if (attacker === 'water') {
    return (
      attackerImg.src = "./assets/blastoise.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/blastoise2.png"
    )
  } else if (attacker === 'grass') {
    return (
      attackerImg.src = "./assets/venusaur.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/venusaur2.png"
    )
  } else if (attacker === 'electric') {
    return (
      attackerImg.src = "./assets/pikachu.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/pikachu2.png"
    )
  } else if (attacker === 'ice') {
    return (
      attackerImg.src = "./assets/dewgong.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/dewgong2.png"
    )
  } else if (attacker === 'fighting') {
    return (
      attackerImg.src = "./assets/machamp.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/machamp2.png"
    )
  } else if (attacker === 'poison') {
    return (
      attackerImg.src = "./assets/weezing.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/weezing2.png"
    )
  } else if (attacker === 'ground') {
    return (
      attackerImg.src = "./assets/dugtrio.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/dugtrio2.png"
    )
  } else if (attacker === 'flying') {
    return (
      attackerImg.src = "./assets/pidgeot.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/pidgeot2.png"
    )
  } else if (attacker === 'psychic') {
    return (
      attackerImg.src = "./assets/mewtwo.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/mewtwo2.png"
    )
  } else if (attacker === 'bug') {
    return (
      attackerImg.src = "./assets/scyther.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/scyther2.png"
    )
  } else if (attacker === 'rock') {
    return (
      attackerImg.src = "./assets/onix.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/onix2.png"
    )
  } else if (attacker === 'ghost') {
    return (
      attackerImg.src = "./assets/gengar.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/gengar2.png"
    )
  } else if (attacker === 'dragon') {
    return (
      attackerImg.src = "./assets/dragonair.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/dragonair2.png"
    )
  } else if (attacker === 'dark') {
    return (
      attackerImg.src = "./assets/houndoom.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/houndoom2.png"
    )
  } else if (attacker === 'steel') {
    return (
      attackerImg.src = "./assets/skarmory.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/skarmory2.png"
    )
  } else if (attacker === 'fairy') {
    return (
      attackerImg.src = "./assets/clefable.png",
      chibiAttackerImg.src = "./assets/pokemon-chibi/clefable2.png"
    )
  }
}

function pokeRenderDefender() {
  const eDefender = document.getElementById('defender')
  const defender = eDefender.value;
  const defenderImg = document.getElementById('defenderImg')
  const chibiDefenderImg = document.getElementById('chibiDefenderImg');

  if (defender === 'normal') {
    return (
      defenderImg.src = "./assets/snorlax.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/snorlax2.png"
    )
  } else if (defender === 'fire') {
    return (
      defenderImg.src = "./assets/charizard.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/charizard2.png"
    )
  } else if (defender === 'water') {
    return (
      defenderImg.src = "./assets/blastoise.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/blastoise2.png"
    )
  } else if (defender === 'grass') {
    return (
      defenderImg.src = "./assets/venusaur.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/venusaur2.png"
    )
  } else if (defender === 'electric') {
    return (
      defenderImg.src = "./assets/pikachu.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/pikachu2.png"
    )
  } else if (defender === 'ice') {
    return (
      defenderImg.src = "./assets/dewgong.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/dewgong2.png"
    )
  } else if (defender === 'fighting') {
    return (
      defenderImg.src = "./assets/machamp.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/machamp2.png"
    )
  } else if (defender === 'poison') {
    return (
      defenderImg.src = "./assets/weezing.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/weezing2.png"
    )
  } else if (defender === 'ground') {
    return (
      defenderImg.src = "./assets/dugtrio.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/dugtrio2.png"
    )
  } else if (defender === 'flying') {
    return (
      defenderImg.src = "./assets/pidgeot.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/pidgeot2.png"
    )
  } else if (defender === 'psychic') {
    return (
      defenderImg.src = "./assets/mewtwo.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/mewtwo2.png"
    )
  } else if (defender === 'bug') {
    return (
      defenderImg.src = "./assets/scyther.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/scyther2.png"
    )
  } else if (defender === 'rock') {
    return (
      defenderImg.src = "./assets/onix.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/onix2.png"
    )
  } else if (defender === 'ghost') {
    return (
      defenderImg.src = "./assets/gengar.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/gengar2.png"
    )
  } else if (defender === 'dragon') {
    return (
      defenderImg.src = "./assets/dragonair.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/dragonair2.png"
    )
  } else if (defender === 'dark') {
    return (
      defenderImg.src = "./assets/houndoom.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/houndoom2.png"
    )
  } else if (defender === 'steel') {
    return (
      defenderImg.src = "./assets/skarmory.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/skarmory2.png"
    )
  } else if (defender === 'fairy') {
    return (
      defenderImg.src = "./assets/clefable.png",
      chibiDefenderImg.src = "./assets/pokemon-chibi/clefable2.png"
    )
  };
}

// ONCHANGE FUNCTION
function onChange () {
  return (
    crossType(),
    resultStyle(),
    pokeRenderAttacker(),
    pokeRenderDefender()
  )
};

window.onload = onChange();
