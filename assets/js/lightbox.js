(function () {
  var articleImages = document.querySelectorAll('.lf-prose figure img');

  if (!articleImages.length) return;

  var lightbox = document.createElement('div');
  lightbox.className = 'lf-lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-label', 'Expanded article image');
  lightbox.innerHTML = [
    '<button class="lf-lightbox__button" type="button" aria-label="Close image">&times;</button>',
    '<figure class="lf-lightbox__figure">',
    '<img class="lf-lightbox__image" alt="">',
    '<figcaption class="lf-lightbox__caption"></figcaption>',
    '</figure>'
  ].join('');

  document.body.appendChild(lightbox);

  var closeButton = lightbox.querySelector('.lf-lightbox__button');
  var image = lightbox.querySelector('.lf-lightbox__image');
  var caption = lightbox.querySelector('.lf-lightbox__caption');
  var activeTrigger = null;

  function openLightbox(trigger) {
    var figure = trigger.closest('figure');
    var figcaption = figure ? figure.querySelector('figcaption') : null;

    activeTrigger = trigger;
    image.src = trigger.currentSrc || trigger.src;
    image.alt = trigger.alt || '';
    caption.textContent = figcaption ? figcaption.textContent : (trigger.title || trigger.alt || '');
    caption.hidden = !caption.textContent;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    image.removeAttribute('src');

    if (activeTrigger) {
      activeTrigger.focus();
      activeTrigger = null;
    }
  }

  articleImages.forEach(function (img) {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Open image full screen');

    img.addEventListener('click', function () {
      openLightbox(img);
    });

    img.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });

  closeButton.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
})();
