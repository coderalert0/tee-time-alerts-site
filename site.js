// The support address, put together here so it isn't sitting in the page for scrapers.
(function () {
  var user = 'laddothis', domain = 'gmail.com';
  var mailto = 'ma' + 'ilto:' + user + '@' + domain + '?subject=Tee%20Time%20Alerts';
  document.querySelectorAll('.email').forEach(function (el) {
    var a = document.createElement('a');
    a.href = mailto;
    a.textContent = user + '@' + domain;
    el.replaceChildren(a);
  });
  document.querySelectorAll('a.mail').forEach(function (a) { a.href = mailto; });
})();
