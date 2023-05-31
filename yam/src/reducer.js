const initialState = { count: 0, number: 1};

const reducer = (state, action) => {
  switch (action.type) {
    case "CALCUL":
      return {
        ...state,
        count : calcul(state.number),
      };

    case "SET_NUMBER":
      const { number } = action;
      return { ...state, number, count: 0 };

    default:
      return state;
  }
};

const calcul = (number) => {

  //création d'une fonction qui tire un dé (chiffre entre 1 et 6)
  const de = () => Math.floor(Math.random() * 6) + 1;

  //initialisation du compteur de brelan
  let count = 0;


  //boucle qui va s'éxécuter le nombre de fois que demandé par l'utilisateur
  while (number > 0) {

    //result va stocker les itérations d'un nombre dans un tableau
    let result = [];

    //lancer sera un tableau qui contiendra les nombres des 5 dés tirés
    const lancer = [de(), de(), de(), de(), de()]; // [2, 3, 2, 6, 2]
    
    //on parcourt ce tableau pour calculer combien d'itération de chaque nombre on a
    for(const nb of lancer){
      if(result[nb] == undefined){ // [] --> 
        result[nb] = 1; // [ , , 1] --> [ , , 1, 1] -->[ , , 3, 1]
      }
      else{
        result[nb] += 1;
      }

      if(result[nb] == 3){
        count++;
      }
    }
    
    //on décrémente number
    number--;
    
  }

  //on retourne le nombre de brelans trouvés
  return count;
};

export { reducer, initialState };
