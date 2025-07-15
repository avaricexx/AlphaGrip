document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.querySelector('.calculate-btn');
  const cardModal = document.getElementById('cardModal');
  const closeModal = document.getElementById('closeModal');
  const cardScore = document.getElementById('cardScore');
  const cardPercentile = document.getElementById('cardPercentile');
  const cardStrengthBar = document.getElementById('cardStrengthBar');
  const cardStrengthBarValue = document.getElementById('cardStrengthBarValue');
  const toast = document.getElementById('toast');
  const downloadBtn = document.querySelector('.card-download-btn');
  const copyBtn = document.querySelector('.card-copy-btn');

  // Example values (replace with real data in the future)
  const targetScore = 60;
  const targetPercentile = 82;
  const targetStrength = 85;

  function animateNumber(el, from, to, suffix = '', duration = 1200, templateFn) {
    const start = performance.now();
    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(from + (to - from) * progress);
      if (templateFn) {
        el.textContent = templateFn(value);
      } else {
        el.textContent = value + suffix;
      }
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function animateBar(el, from, to, duration = 1200) {
    const start = performance.now();
    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = from + (to - from) * progress;
      el.style.width = value + '%';
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    toast.style.display = 'block';
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { toast.style.display = 'none'; }, 400);
    }, 2000);
  }

  function resetCardAnimations() {
    cardScore.textContent = '0 kg';
    cardPercentile.textContent = 'You are stronger than 0% of people your age';
    cardStrengthBar.style.width = '0%';
    cardStrengthBarValue.textContent = '0/100';
  }

  if (calculateBtn && cardModal && closeModal) {
    calculateBtn.addEventListener('click', () => {
      cardModal.style.display = 'flex';
      // Animate score, percentile, and bar
      animateNumber(cardScore, 0, targetScore, ' kg');
      animateNumber(
        cardPercentile,
        0,
        targetPercentile,
        '',
        1200,
        (val) => `You are stronger than ${val}% of people your age`
      );
      animateBar(cardStrengthBar, 0, targetStrength, 1200);
      animateNumber(cardStrengthBarValue, 0, targetStrength, '/100', 1200);
    });

    closeModal.addEventListener('click', () => {
      cardModal.style.display = 'none';
      resetCardAnimations();
    });

    cardModal.addEventListener('click', (e) => {
      if (e.target === cardModal) {
        cardModal.style.display = 'none';
        resetCardAnimations();
      }
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      showToast('Card downloaded!');
    });
  }
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      showToast('Copied to clipboard!');
    });
  }
});
