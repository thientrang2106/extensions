//document.getElementById("demo").onclick = function() {myFunction()};
myFunction();
function myFunction() {

 console.log("popup.js > run.js");
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting:"hello" }, function(response) {
   console.log(response.farewell);
   document.getElementById("url").innerHTML = response.farewell;
  });
 });
}
