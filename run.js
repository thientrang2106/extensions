
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 if (request.greeting == "hello"){console.log(request.greeting);
  
  //alert('hello');
  var tabCurrent = window.location.href;
  console.log(tabCurrent);
  var elements = document.querySelectorAll('span.a-size-base.review-text'); 
  //alert('hello');
  console.log(elements[0].innerText);
  sendResponse({farewell: tabCurrent}); 
  crawl();
 }
});

