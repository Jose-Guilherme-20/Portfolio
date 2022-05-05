var nota1 = 8.0;
var nota2 = 8.0;

var media = (nota1 + nota2)/2;

var conceito = ""

if (media >= 8){
    conceito = "otimo";
}
else if(media >6.5){
    conceito = "bom";
}
else{
    conceito ="regular";
}

console.log(media);
console.log(conceito);

switch(conceito){
    case "otimo":
        console.log("Parabéns você é um otimo aluno")
        break
        
        case "bom":
            console.log("Você é um bom aluno")
            break

            case "regular":
                console.log("Você precisamelhorar")
                break

                default:console.log("houve algum erro")
}







 






