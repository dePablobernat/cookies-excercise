
(function() {
  var p = document.querySelector('p');
  var date = new Date();
  var timestamp = Date.now();
  var button = document.querySelector('button');


  function setCookie (name) {
      document.cookie = timestamp;
  }

  if (document.cookie.length === 0) {
    setCookie('lastVisit', date );
    p.innerText = "Hello welcome to our page, we will save your first visit";
  } else {
    var fullDate = new Date(parseInt(document.cookie)).toString();
    timeText(fullDate);
    showButton();
  }

  function timeText(time) {
    p.innerText = 'Your first visit was on: ' + time.split("").slice(4,21).join("");
  }

  function showButton() {
    button.style.display = 'block';
  }

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        document.cookie = ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    location.reload();
  }

  button.addEventListener('click', deleteAllCookies);
})()
