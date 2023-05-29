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

let curioso = prompt(`${nome}, quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer mais?`);
    while (curioso != null) {
        let curiosoResposta = prompt(`${nome}, tem mais alguma tecnologia que você gostaria de aprender?`);
    }
    


let gostaEstudar = prompt('Você gosta de estudar ' + linguagemEstudo + '?' + ' Responda com o número 1 para SIM ou 2 para NÃO');
  if (gostaEstudar == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
  }
  if (gostaEstudar == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
  }


var numeroSecreto = parseInt(Math.random() * 1001 + 1)
var quantidadeTentativas = 1
var jogador = prompt('Qual é o seu nome?')
while(chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 1 e 1000')
  if (chute == numeroSecreto) {
    alert('Certa resposta ' + jogador + ', agora pode tentar a sorte na Mega Sena! Volte sempre e me deixem críticas contrutivas, obrigado!')
  } else if (chute > numeroSecreto) {
    alert('Errou... o número secreto é menor do que ' + chute + ', tente novamente!')
  } else if (chute < numeroSecreto) {
    alert('Errou... o número secreto é maior do que ' + chute + ', tente novamente!')
  }
  alert('Quantidade de tentaivas: '+ quantidadeTentativas++)
}