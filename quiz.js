const startButton = document.getElementById('Start');
startButton.addEventListener('click', () => {
  window.location.href = 'quiz.html';
  loadQuestion();
});
