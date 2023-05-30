let nome = prompt('Qual o seu nome?');
let respostaInicial = prompt(`Olá ${nome}, você quer seguir estudando para área de Front-End ou seguir para a área de Back-End? Responda: Front-End ou Back-End`);
    if (respostaInicial === "Front-End") {
     let respostaF = prompt(`${nome}, quer aprender React ou aprender Vue?`);
    }
 
    if (respostaInicial === "Back-End") {
     let respostaB = prompt(`${nome}, quer aprender C# ou aprender Java?`);
    }

let continuarEstudando = prompt(`${nome}, quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Responda com o número 1 para área escolhida ou 2 para Fullstack`);
    if (continuarEstudando == 1) {
        alert (`${nome}, continue se aprofundando nos estudos da área escolhida que você terá muito sucesso!`)

    }
    if (continuarEstudando == 2) {
        alert (`${nome}, isso vai lhe tonar um profissional com muitas áreas de atuação, mergulhe nos estudos e sucesso sempre!`)
    }

let msg = prompt(`${nome}, tem mais tecnologias nas quais você gostaria de se especializar ou de conhecer mais? Digite 'Sim' em caso positivo`);
        while (msg === "Sim") {
        let qualTecnologia = prompt("Qual?");
        alert(`${nome}, estudar ${qualTecnologia} me parece uma boa ideia para seu sucesso profissional!`);
        msg = prompt(`${nome}, tem mais alguma tecnologia que você gostaria de aprender? Digite 'Sim' em caso positivo`);
    }



