
$('a[href$=.torrent]').click( function() {
  var _url = $(this).attr('href');
  // Make a simple request:

  var check = confirm("Add torrent\n" + _url + "\nto transmission?");
  
  if (check) {
    chrome.extension.sendRequest({torrent_url:  _url},
      function(response) {
      });
    return false;
  }
  return true;

});
