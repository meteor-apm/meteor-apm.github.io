(function () {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

  function onDOMContentLoaded () {
    // resize intro section
    var topbarElement = document.getElementById('topbar');
    var introElement = document.getElementById('intro');
    var height = window.innerHeight - Math.round(topbarElement.getBoundingClientRect().height);
    introElement.style.height = height + 'px';
  }
})();