const line  = document.querySelector('.follow-underline');
const container = document.querySelector('.desktop-nav__links');
const triggers = document.querySelectorAll('.desktop-nav__links li');
const active = document.querySelector('.desktop-nav__links a.active');

function handleEnter(el) {
  const navCoords = el.getBoundingClientRect();

  line.style.setProperty('width', `${navCoords.width}px`);
  line.style.setProperty('transform', `translateX(${navCoords.left}px`);
  setTimeout(() => container.classList.add('follow-underline-transition'));
}

function handleLeave() {
  if (active) {
    handleEnter(active);
  } else {
    setTimeout(() => container.classList.remove('follow-underline-transition'));
  }
}

if (active) {
  handleEnter(active);
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', function() { handleEnter(this.querySelector('a')) }));
triggers.forEach(trigger => container.addEventListener('mouseleave', handleLeave));
