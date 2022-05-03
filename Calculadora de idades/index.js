alert("Bem vindo a calculadora de idades! Nos informe alguns dados para começar o cálculo")

let nameOld = prompt("Nome da pessoa mais velha?")
let ageOld = prompt("Idade da pessoa mais velha?")

let nameYoung = prompt("Nome da pessoa mais nova?")
let ageYoung = prompt("Idade da pessoa mais nova?")

let ageDifference = ageOld - ageYoung

alert("Pessoa mais velha é: " + nameOld + "\nIdade: " + ageOld + "\n\nPessoa mais nova é: "
+ nameYoung + "\nIdade: " + ageYoung + "\n\nDiferença de idade entre vocês é: " 
+ ageDifference + " anos")

