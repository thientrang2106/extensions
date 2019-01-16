var host = "https://www.amazon.com/";
var text = "/product-reviews/";
var text_1 = "/ref=cm_cr_arp_d_paging_btm_";
var text_2 = "?ie=UTF8&reviewerType=all_reviews&pageNumber=";
var numPage = 0;
var comment = "";
var urlF = "";

myFunction();

document.getElementById("demo").onclick = function() {
	urlF = getLink();
	getNumPage();
	crawl()
};

function myFunction() {
	console.log("popup.js > run.js");
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	 	chrome.tabs.sendMessage(tabs[0].id, {greeting:"hello" }, function(response) {
	   		//console.log(response.farewell);
	   		document.getElementById("url").innerHTML = response.farewell;

	 	});
	});
}

//var elements = document.querySelectorAll('span.a-size-base.review-text');

function crawl(){
	console.log(numPage);
	for(i = 1; i <= numPage; i++){
		var url =  urlF + text_1 + i + text_2 + i;
		getData(url);
		
	}
	
}

function getData(url){
	var http = new XMLHttpRequest();
	http.open('GET', url, true);
	http.send();
	http.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      var output = this.response;
	      var parser = new DOMParser();
	      var html = parser.parseFromString(output, "text/html");
	      
	      var elements = html.querySelectorAll('span.a-size-base.review-text');
	      for(i = 0; i < elements.length; i++){
	      	console.log(elements[i].innerText);
	      }
	    }
	};
}

function getLink(){
	var url = document.getElementById("url").innerHTML;
	var string = regexURL(url);
	//console.log(host + string[3] + text + string[5]);
	return host + string[3] + text + string[5];
}

function getNumPage(){
	var url =  urlF + text_1 + "1" + text_2 + "1";
	var http = new XMLHttpRequest();
	http.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      var output = this.response;
	      var parser = new DOMParser();
	      var html = parser.parseFromString(output, "text/html");
	      var elements = html.querySelectorAll('li.page-button');
	      numPage = parseInt(elements[elements.length - 1].innerText); 
	    }
	};
	http.open('GET', url, true);
	http.send();
}

function regexURL(url){
	return url.split(new RegExp('/'));
}


