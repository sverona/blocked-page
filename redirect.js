const params = new URLSearchParams(window.location.search);
const redirectURL = params.get('site');

if (redirectURL != null) {
  setTimeout(function() {window.location.href = redirectURL;}, 60 * 1000);
}
