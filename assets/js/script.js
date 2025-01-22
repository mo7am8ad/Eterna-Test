const searchInput = document.getElementById('city-search');
const cityLabels = document.querySelectorAll('.city-list label');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  cityLabels.forEach(label => {
    const text = label.textContent.toLowerCase();
    label.style.display = text.includes(filter) ? '' : 'none';
  });
});
