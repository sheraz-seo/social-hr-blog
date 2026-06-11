// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

// Blog filter tabs
const filterBtns = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    blogCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Newsletter subscribe
function handleSubscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input.value) {
    e.target.innerHTML = '<p style="color:white;font-weight:600;font-size:15px;">✓ You\'re subscribed! Check your inbox soon.</p>';
  }
}

// Contact form submit
function handleContact(e) {
  e.preventDefault();
  const msg = document.getElementById('successMsg');
  if (msg) {
    msg.classList.add('show');
    e.target.reset();
    setTimeout(() => msg.classList.remove('show'), 5000);
  }
}

// Load more (simulated)
const loadMoreBtn = document.getElementById('loadMoreBtn');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    loadMoreBtn.textContent = 'No more articles to load.';
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.opacity = '0.5';
    loadMoreBtn.style.cursor = 'default';
  });
}
