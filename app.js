let listaDeNumerosSorteados = [];
let MaximoDeNumeros = 100;
let NumeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function textoNaTela(Tag, texto) {
  let campo = document.querySelector(Tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function MensagemInicial(params) {
  textoNaTela("h1", "Jogo do numero secreto");
  textoNaTela(".texto__paragrafo", "Escolha um numero entre 1 e 100 ");
}

MensagemInicial();

function verificarChute() {
  let chute = document.querySelector(".container__input").value;
  if (NumeroSecreto == chute) {
    textoNaTela("h1", "Voce acertou !!! ");
    let palavraTentativa = tentativas > 1 ? "tentativas " : "tentativa";
    let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!! `;
    textoNaTela(".texto__paragrafo", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > NumeroSecreto) {
      textoNaTela(".texto__paragrafo", " o numero secreto e menor");
    } else {
      textoNaTela(".texto__paragrafo", "o numero secreto e maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * MaximoDeNumeros + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == MaximoDeNumeros) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  let NumeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  MensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
