
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 if (request.greeting == "hello"){
 	console.log(request.greeting);
  
  //alert('hello');
  var tabCurrent = window.location.href;
  console.log(tabCurrent);
  var elements = document.querySelectorAll('span.a-size-base.review-text'); 
  //alert('hello');
   var i;
  for(i = 0; i <  elements.length; i++){
  	console.log(elements[i].innerText);
  }
  sendResponse({farewell: tabCurrent}); 
  crawl();
 }
});

