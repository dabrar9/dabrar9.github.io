// Loads the Elfsight platform script which renders the Google Reviews widget.
// The widget div is already in reviews.html — this just loads the Elfsight runtime.

(function () {
  var script = document.createElement('script');
  script.src = 'https://elfsightcdn.com/platform.js';
  script.async = true;
  document.head.appendChild(script);
})();
