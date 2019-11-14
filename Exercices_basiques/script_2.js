
var nb = window.prompt("De quel nombre veux-tu calculer la factorielle ?");
n = Number(nb);
function factoriel(x){
    if(x<0) throw new Error("factoriel n'est définie que pour les entiers positifs");
    if(x<=1)return 1;
    else return x*factoriel(x-1);
}

let statement = `Le résultat est : ${factoriel(n)}`;
console.log(statement)