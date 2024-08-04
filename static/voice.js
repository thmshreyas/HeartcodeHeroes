// Voice recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;

const micButton = document.getElementById('mic-button');
const textOutput = document.getElementById('text-output');

micButton.addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('result', (event) => {
  const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  textOutput.textContent = transcript;
});

recognition.addEventListener('end', () => {
  recognition.stop();
});
