// Definir o número secreto
var secretNumber = Math.floor(Math.random() * 100) + 1;

// Definir as variáveis de tentativas e acertos
var guesses = 0;
var correctGuess = false;

// Obter os elementos HTML relevantes
var guessField = document.querySelector('#guess');
var submitButton = document.querySelector('#submit');
var resetButton = document.querySelector('#reset');
var resultDiv = document.querySelector('#result');
var messageDiv = document.querySelector('#message');

// Definir a função que é executada quando o usuário clica no botão de adivinhar
function checkGuess() {
  var userGuess = Number(guessField.value);
  if (userGuess === secretNumber) {
    messageDiv.textContent = 'Parabéns, você acertou!';
    correctGuess = true;
  } else {
    guesses++;
    var remainingTries = 3 - guesses;
    if (remainingTries > 0) {
      if (userGuess < secretNumber) {
        messageDiv.textContent = 'Você errou! O número é maior. Você tem ' + remainingTries + ' tentativas restantes.';
      } else {
        messageDiv.textContent = 'Você errou! O número é menor. Você tem ' + remainingTries + ' tentativas restantes.';
      }
    } else {
      messageDiv.textContent = 'Suas tentativas acabaram! O número secreto era ' + secretNumber + '.';
      resetButton.disabled = false;
      submitButton.disabled = true;
    }
  }
  guessField.value = '';
}

// Definir a função que é executada quando o usuário clica no botão de reiniciar
function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guesses = 0;
  correctGuess = false;
  messageDiv.textContent = '';
  guessField.value = '';
  resetButton.disabled = true;
  submitButton.disabled = false;
}

// Adicionar event listeners aos botões relevantes
submitButton.addEventListener('click', function() {
  checkGuess();
  messageDiv.style.display = 'block';
});
resetButton.addEventListener('click', resetGame);
