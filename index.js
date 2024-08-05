
function printName() {
    console.log("Jassim Alkhadhari");
}

printName();

function printAge(year) {
    console.log(2024 - year);
}

printAge(2005);

function printAgeAndName(name, year){
    console.log(`Hello ${name} you are ${2024-year} old`);
}

printAgeAndName("Jassim" , 2005);

function printHello(name, language){
    if (language=="en"){
        console.log(`Hello ${name}`)
    } else if (language=="es"){
        console.log(`Hola ${name}`)
    } else if (language =="fr"){
        console.log(`Bonjour ${name}`)
    } else if (language =="tr"){
     console.log(`Merhaba ${name}`)
    }
    }
printHello("Jassim", "tr");

function printMax(number1, number2){
    if (number1 > number2){
        console.log(`${number1}`)
    } else if (number1 < number2){
        console.log(`${number2}`)
    }
}
printMax(200, 100);