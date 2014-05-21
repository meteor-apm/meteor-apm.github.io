
document.addEventListener('DOMContentLoaded', function () {
  Array.prototype.forEach.call(
    document.getElementsByClassName('MD'),
    function (element) {
      element.innerHTML = marked(element.textContent);
    }
  );
});
