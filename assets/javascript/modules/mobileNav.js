document.querySelector('.mobile-toggle').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('html').classList.toggle('mobile-nav-open');
});
