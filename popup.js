document.addEventListener('DOMContentLoaded', function() {
  var analyzePageButton = document.getElementById('analyze');
  analyzePageButton.addEventListener('click', function() {
    
    // Chrome JS APIs dùng để get các thông tin của selected tab
    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      // action này vào trang https://gtmetrix.com/, bật f12 lên tìm form để lấy
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);