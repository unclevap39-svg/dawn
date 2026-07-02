(function () {
  function init() {
    var bar = document.querySelector('.relax-sticky-atc');
    if (!bar) return;

    document.body.classList.add('relax-sticky-atc-active');

    // La barre apparaît quand le bouton d'achat principal sort de l'écran.
    var target =
      document.querySelector('.product-form__submit') ||
      document.querySelector('product-form') ||
      document.querySelector('.product__info-container');

    if (!target || !('IntersectionObserver' in window)) {
      bar.classList.add('is-visible');
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var below = entry.boundingClientRect.top < 0;
          bar.classList.toggle('is-visible', !entry.isIntersecting && below);
        });
      },
      { threshold: 0 }
    );
    observer.observe(target);

    // Synchronise le sélecteur de variante de la barre avec le prix affiché.
    var select = bar.querySelector('.relax-sticky-atc__select');
    var priceEl = bar.querySelector('[data-sticky-price]');
    if (select && priceEl) {
      select.addEventListener('change', function () {
        var option = select.options[select.selectedIndex];
        var price = option.getAttribute('data-price');
        if (price) priceEl.textContent = price;
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
