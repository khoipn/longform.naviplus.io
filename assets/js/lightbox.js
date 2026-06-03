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
  var scrollY = 0;

  function pinImage(trigger) {
    var media = new URL(trigger.currentSrc || trigger.src, window.location.href).href;
    var pageUrl = window.location.href.split('#')[0];
    var description = trigger.title || trigger.alt || document.title;
    var pinUrl = 'https://www.pinterest.com/pin/create/button/?url=' +
      encodeURIComponent(pageUrl) +
      '&media=' + encodeURIComponent(media) +
      '&description=' + encodeURIComponent(description);

    window.open(pinUrl, '_blank', 'noopener,noreferrer,width=760,height=640');
  }

  function openLightbox(trigger) {
    var figure = trigger.closest('figure');
    var figcaption = figure ? figure.querySelector('figcaption') : null;

    activeTrigger = trigger;
    scrollY = window.scrollY || window.pageYOffset || 0;
    image.src = trigger.currentSrc || trigger.src;
    image.alt = trigger.alt || '';
    caption.textContent = figcaption ? figcaption.textContent : (trigger.title || trigger.alt || '');
    caption.hidden = !caption.textContent;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    image.removeAttribute('src');
    window.scrollTo(0, scrollY);

    activeTrigger = null;
  }

  articleImages.forEach(function (img) {
    var figure = img.closest('figure');
    var tools = document.createElement('div');
    var zoomButton = document.createElement('button');
    var pinButton = document.createElement('button');

    tools.className = 'lf-image-tools';
    zoomButton.className = 'lf-image-tool lf-image-tool--zoom';
    zoomButton.type = 'button';
    zoomButton.textContent = 'Zoom';
    zoomButton.setAttribute('aria-label', 'Open image full screen');
    pinButton.className = 'lf-image-tool lf-image-tool--pin';
    pinButton.type = 'button';
    pinButton.textContent = 'Pin';
    pinButton.setAttribute('aria-label', 'Save image to Pinterest');
    tools.appendChild(zoomButton);
    tools.appendChild(pinButton);

    if (figure) figure.appendChild(tools);

    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Open image full screen');

    img.addEventListener('click', function (event) {
      event.preventDefault();
      openLightbox(img);
    });

    zoomButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      openLightbox(img);
    });

    pinButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      pinImage(img);
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
