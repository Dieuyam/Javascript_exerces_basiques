const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

/*
console.log("**********Parcourons l'objet :");
for(let entrepreneursAttribut in entrepreneurs) {
  console.log(entrepreneursAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(entrepreneurs[entrepreneursAttribut]);

  console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");

  if (true && true) {
  console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
}
if
  
*/



console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
for(let index in entrepreneurs) {
  
  if (entrepreneurs[index].year > 1969  && entrepreneurs[index].year < 1980) {
    //console.log(entrepreneurs[index].first);
    console.log(entrepreneurs[index]);
    
  }
}


//Sors une array qui contient le prénom et le nom des entrepreneurs
  tmp = [];
  for (let i=0; i < entrepreneurs.length ; i++){
    tmp[i]={ first: entrepreneurs[i].first,last: entrepreneurs[i].last};
  }
  console.log("Voici le nom et les prénoms des entrpepreneurs : ")
  console.log(tmp);
  output = "Le nom complet des entrepreneurs:";
  for (let i=0;i < tmp.length ; i++){
    output += tmp[i].first +" "+ tmp[i].last + " "; 
  }
console.log(output);


 //Quel âge aurait chaque inventeur aujourd'hui ?
  tmp = [];
  for (let i=0; i < entrepreneurs.length ; i++){
    tmp[i]={first: entrepreneurs[i].first,last: entrepreneurs[i].last, age: (2020-entrepreneurs[i].year)}
  }
  console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
  console.log(tmp);
  output = "L'age des entrepreneurs aujourdhui:";
  for (let i=0;i < tmp.length ; i++){
    output += tmp[i].first +" "+ tmp[i].last +" was born " + tmp[i].age + " years ago ; "; 
  }
 console.log(output);


   //Trie les entrepreneurs par ordre alphabétique du nom de famille
  function compare( a, b ) {
    if ( a.last < b.last ){
      return -1;
    }
    if ( a.last > b.last ){
      return 1;
    }
    return 0;
  }
  tmp = entrepreneurs;
  tmp.sort( compare ); 
  console.log("Entrepreneurs sorted alphabeticaly by last name : ")
  console.log(tmp);
  output = "Entrepreneurs sorted alphabeticaly by last name :";
  for (let i=1;i < tmp.length ; i++){
    output += tmp[i-1].last +", "+ tmp[i].first +" "; 
  }

 console.log(output);

