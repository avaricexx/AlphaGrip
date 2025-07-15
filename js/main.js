document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.querySelector('.calculate-btn');
  const cardModal = document.getElementById('cardModal');
  const closeModal = document.getElementById('closeModal');

  if (calculateBtn && cardModal && closeModal) {
    calculateBtn.addEventListener('click', () => {
      cardModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
      cardModal.style.display = 'none';
    });

    cardModal.addEventListener('click', (e) => {
      if (e.target === cardModal) {
        cardModal.style.display = 'none';
      }
    });
  }
});
