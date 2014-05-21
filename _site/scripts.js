
document.addEventListener('DOMContentLoaded', function () {
  var main = document.getElementById('main');
  var header = document.getElementById('topbar');
  var footer = document.getElementById('footer');
  var height = window.innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height;
  main.style.minHeight = height + 'px';
});
