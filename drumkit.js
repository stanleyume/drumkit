function start(btn) {
  let key = btn.key || btn.target.getAttribute('data-key');
  let node = document.querySelector(`div[data-key="${key}"]`);
  if(!node) return;
  let audio = new Audio(node.getAttribute('data-sound'));
  audio.currentTime = 0;
  audio.play();
  node.classList.add('playing');
}

function stop(btn) {
  let key = btn.key || btn.target.getAttribute('data-key');
  let node = document.querySelector(`div[data-key="${key}"]`);
  if(!node) return;
  node.classList.remove('playing');
}
window.addEventListener('keydown', start);
window.addEventListener('mousedown', start);

window.addEventListener('keyup', stop);
window.addEventListener('mouseup', stop);