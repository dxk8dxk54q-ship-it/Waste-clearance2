function sendQuoteToWhatsApp(e) {
  e.preventDefault();

  var form = document.getElementById('quoteForm');
  if (!form) {
    return false;
  }

  var formData = new FormData(form);
  var message = [
    'Waste Clearance Quote Request',
    'Name: ' + (formData.get('name') || ''),
    'Phone: ' + (formData.get('phone') || ''),
    'Postcode: ' + (formData.get('postcode') || ''),
    'Waste type: ' + (formData.get('waste_type') || ''),
    'Load size: ' + (formData.get('load_size') || ''),
    'Preferred date: ' + (formData.get('preferred_date') || ''),
    'Access notes: ' + (formData.get('access_notes') || ''),
    'Photos: please attach in WhatsApp after it opens.'
  ].join('\n');

  window.location.href = 'https://wa.me/447366302341?text=' + encodeURIComponent(message);
  return false;
}

document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.getElementById('mobileNav');
  var header = document.querySelector('.site-header');

  if (!hamburger || !mobileNav || !header) {
    return;
  }

  function setExpanded(isExpanded) {
    header.classList.toggle('nav-open', isExpanded);
    hamburger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  }

  hamburger.addEventListener('click', function () {
    var isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    setExpanded(!isExpanded);
  });

  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setExpanded(false);
    });
  });
});
