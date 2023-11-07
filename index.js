// ===========Ejecicio1=============================================

function numerosImpares(){
  let i = 0;

  for(i = 1; i<=50; i++){
    if(i % 2 !== 0){
      console.log(i);
    } 
  }
}
numerosImpares();

// ===========Ejecicio2=============================================

function enviarNumero() {
  let numero = document.getElementById("numero").value; 
  let cualquierNumero =parseInt(numero); 
  
  let pokemons = [ 'bulbasaur',  'ivysaur',  'venusaur',  'charmander',  'charmeleon',  'charizard',  'squirtle',  'wartortle',  'blastoise',  'caterpie',  'metapod',  'butterfree',  'weedle',  'kakuna',  'beedrill',  'pidgey',  'pidgeotto',  'pidgeot',  'rattata',  'raticate',  'spearow',  'fearow',  'ekans',  'arbok',  'pikachu',  'raichu',  'sandshrew',  'sandslash',  'nidoran-f',  'nidorina',  'nidoqueen',  'nidoran-m',  'nidorino',  'nidoking',  'clefairy',  'clefable',  'vulpix',  'ninetales',  'jigglypuff',  'wigglytuff',  'zubat',  'golbat',  'oddish',  'gloom',  'vileplume',  'paras',  'parasect',  'venonat',  'venomoth',  'diglett',  'dugtrio',  'meowth',  'persian',  'psyduck',  'golduck',  'mankey',  'primeape',  'growlithe',  'arcanine',  'poliwag',  'poliwhirl',  'poliwrath',  'abra',  'kadabra',  'alakazam',  'machop',  'machoke',  'machamp',  'bellsprout',  'weepinbell',  'victreebel',  'tentacool',  'tentacruel',  'geodude',  'graveler',  'golem',  'ponyta',  'rapidash',  'slowpoke',  'slowbro',  'magnemite',  'magneton',  'farfetchd',  'doduo',  'dodrio',  'seel',  'dewgong',  'grimer',  'muk',  'shellder',  'cloyster',  'gastly',  'haunter',  'gengar',  'onix',  'drowzee',  'hypno',  'krabby',  'kingler',  'voltorb' ];

  if (numero === "") {
    alert("Ingresa un valor");
  }else {
    if (cualquierNumero <= 0) {
      alert("El número debe ser mayor a cero");
    }else{
      let i = 1;
      let indicesImpares = [];    
      let arrayImpares = [];          

      for(i = 1; i <= pokemons.length && i <= cualquierNumero ; i++){
        if(i % 5 === 0) {
          indicesImpares.push(pokemons[i]);
          document.getElementById("numero").value = "";        
          arrayImpares.push(JSON.stringify(indicesImpares));
        }     
      }      
      alert("[ " + indicesImpares.join(", ") + "]");
    }   
  }
}

// ===========Ejecicio3=============================================

let array = [4,"dos",8,"tres",5,9,1,"cero"];
let i = 0;

for(i = 0; i < array.length; i++) {
  if(typeof array[i] === 'number'){
    console.log(array[i]);
  }
  
}
