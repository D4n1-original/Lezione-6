// let n1 = 5 
// let n2 = 10

// //.......
// n2 = null
// //.......
// n2 = "8.5"


// let obj = {name:"John", age: 30, corso: "Full Stack Developer", webcam: true}
// obj.age++

// let arr1 = [1,2,3,4,"5",6]

// console.log(n1 + parseInt(n2));


// let nome = "Luca"
// let cognome = "Rossi"
// let fullname = nome + " " + cognome

// let height = 174
// let piuAlto = height > 170
// let piuBasso = !piuAlto
// let miaAltezza = (height <= 170) || (height >= 180)

// console.log(piuAlto);
// console.log(piuBasso);
// console.log(miaAltezza);

// console.log(fullname);

// console.table(arr1);

// console.table(obj)

// console.log(nome.toUpperCase());

// console.log(nome.toLowerCase() === "luca");


//ARRAY
let arr1 = [0,1,2,3,4,5]

// arr1.push(6) //aggiunge un elemento alla fine dell'array
// arr1.pop() // rimuove l'ultimo elemento
// arr1.shift() // rimuove il primo elemento
// arr1.unshift(0) //aggiunge un elemento all'inizio


arr1.splice(2, 1)


console.log(arr1);
console.table(arr1)
//console.log(arr1.slice(0,4));

//OGGETTI

let obj1 = {
    name: "Joe",
    eta: 25,
    citta: "Milano"
}

let test  = Object.keys(obj1)
test.pop()

console.log(obj1);
console.table(obj1)
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(test);


let insegnanti = [
    {
        nome: "Daniele",
        eta: 38,
        ruolo: "Prof"
    },
    {
        nome: "Simone",
        eta: 26,
        ruolo: "TA"
    }
]

insegnanti.push({
    nome: "Ginevra",
    eta: 22,
    ruolo: "Tutor",
})

insegnanti[2].ruolo = "Mentor"

console.table(insegnanti)

document.write(
    
    "<p>Nome: " + insegnanti[1].nome + "</p>" +
    "Età: " + insegnanti[1].eta
    
    
    
    )