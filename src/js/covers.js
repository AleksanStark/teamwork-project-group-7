const container = document.getElementById('marquee-wrapper');

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  container.appendChild(circle);

  const size = getRandomInt(
    container.offsetWidth * 0.7,
    container.offsetWidth * 0.8
  );
  const left = Math.floor(Math.random() * (container.offsetWidth - size));
  const top = Math.floor(Math.random() * (container.offsetHeight - size));
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${left}px`;
  circle.style.top = `${top}px`;

  setTimeout(() => {
    container.removeChild(circle);
  }, 5000);
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

setInterval(createCircle, 2000);
