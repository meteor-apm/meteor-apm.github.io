
document.addEventListener('DOMContentLoaded', function () {
  var main = document.getElementById('main');
  if(!main) return;
  var header = document.getElementById('header');
  var footer = document.getElementById('footer');
  var height = window.innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height;
  main.style.minHeight = height + 'px';
});
