const startBtn = document.getElementById('startBtn');
const messagesDiv = document.getElementById('messages');

startBtn.addEventListener('click', () => {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`El número secreto es: ${secretNumber}`);
  const guesses = [];

  messagesDiv.textContent = '';
  alert('¡Comienza el juego! Intenta adivinar el número secreto.');

  function askGuess() {
    let input = prompt('Ingresa un número del 1 al 100:');

    if (input === null) {
      messagesDiv.textContent += 'Juego cancelado por el usuario.\n';
      return;
    }

    input = input.trim();

    if (!/^\d+$/.test(input)) {
      alert('Error: Debes ingresar un número entero válido.');
      askGuess();
      return;
    }

    const guess = Number(input);

    if (guess < 1 || guess > 100) {
      alert('Error: El número debe estar entre 1 y 100.');
      askGuess();
      return;
    }

    guesses.push(guess);

    if (guess === secretNumber) {
      messagesDiv.textContent += `🎉 Felicidades, adivinaste el número secreto: ${secretNumber}\n`;
      if (guesses.length > 1) {
        messagesDiv.textContent += `Números ingresados antes de acertar: ${guesses.slice(0, -1).join(', ')}\n`;
      } else {
        messagesDiv.textContent += `¡Lo lograste en el primer intento!\n`;
      }
    } else {
      messagesDiv.textContent += `Ups, el número secreto es incorrecto, vuelve a intentarlo.\n`;
      askGuess();
    }
  }

  askGuess();
});