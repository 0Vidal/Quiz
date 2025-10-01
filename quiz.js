const perguntas = [
  {
    pergunta: "Quem é esse personagem?",
    imagem: "messi.png",
    respostas: [
      { texto: "Messi Careca", correta: true },
      { texto: "Merino Ney", correta: false },
      { texto: "Henry Cavill", correta: false },
      { texto: "Alexandre de Moraes", correta: false }
    ]
  },
  {
    pergunta: "Quem é esse personagem?",
    imagem: "jerry.png",
    respostas: [
      { texto: "Mickey Rato", correta: false },
      { texto: "Mc Ratão", correta: false },
      { texto: "Jerry Triangular", correta: true },
      { texto: "Ratasana Suja", correta: false }
    ]
  },
  {
    pergunta: "Quem é esse personagem?",
    imagem: "anakin.png",
    respostas: [
      { texto: "Obi-Wan Kenobi", correta: false },
      { texto: "Quin-Gon Jinn", correta: false },
      { texto: "Mace Windu", correta: false },
      { texto: "Anakin Rebaixado", correta: true }
    ]
  },
  {
    pergunta: "Quem é esse personagem?",
    imagem: "thomas.png",
    respostas: [
      { texto: "Thomas a bomba termonuclear", correta: true },
      { texto: "Jair Bolsonaro", correta: false },
      { texto: "Carlinhos Brown", correta: false },
      { texto: "Lula Molusco", correta: false }
    ]
  }
];

let indiceAtual = 0;
let pontuacao = 0;

function começarQuiz() {
  document.getElementById("tela-inicial").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  mostrarPergunta();
}

function sairQuiz() {
  alert("Ok! Até a próxima.");
}

function mostrarPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  document.getElementById("question").textContent = perguntaAtual.pergunta;
  document.getElementById("imagem-pergunta").src = perguntaAtual.imagem;

  perguntaAtual.respostas.forEach((resp, i) => {
    const btn = document.getElementById(`resposta${i}`);
    btn.textContent = resp.texto;
    btn.disabled = false;
    btn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-botao').trim();

    btn.classList.remove("animate");
    void btn.offsetWidth;
    btn.classList.add("animate");
  });

  document.getElementById("next-btn").style.display = "none";
}
function escolherResposta(indiceResposta) {
  const perguntaAtual = perguntas[indiceAtual];
  const correta = perguntaAtual.respostas[indiceResposta].correta;
  
  const btn = document.getElementById(`resposta${indiceResposta}`);
  btn.style.backgroundColor = correta ? 
    getComputedStyle(document.documentElement).getPropertyValue('--cor-acerto').trim() :
    getComputedStyle(document.documentElement).getPropertyValue('--cor-erro').trim();

  if (correta) pontuacao++;

  for (let i = 0; i < 4; i++) {
    document.getElementById(`resposta${i}`).disabled = true;
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

function proximaPergunta() {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("resultado").style.display = "flex";
  document.getElementById("pontuacao").textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
}

function reiniciarQuiz() {
  indiceAtual = 0;
  pontuacao = 0;
  document.getElementById("resultado").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  mostrarPergunta();
}

  mostrarPergunta();