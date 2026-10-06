// Shared behavior across all OTTOTHON pages

document.addEventListener('DOMContentLoaded', () => {
  // Carousel arrow scrolling (used on the Miracle Kids row)
  document.querySelectorAll('.carousel').forEach((carousel) => {
    const row = carousel.querySelector('.carousel-row');
    const prev = carousel.querySelector('.carousel-arrow.prev');
    const next = carousel.querySelector('.carousel-arrow.next');
    if (!row) return;

    const scrollAmount = () => (row.firstElementChild ? row.firstElementChild.offsetWidth + 34 : 200);

    if (prev) prev.addEventListener('click', () => row.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => row.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
  });

  // Highlight the current page in the nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.top .links a[data-page]').forEach((link) => {
    if (link.dataset.page === path) link.classList.add('active');
  });
});
