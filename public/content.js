var j = document.createElement("script");
j.src = chrome.runtime.getURL("jquery-1.10.2.min.js");
(document.head || document.documentElement).appendChild(j);

var g = document.createElement("script");
g.src = chrome.runtime.getURL("gmail.js");
(document.head || document.documentElement).appendChild(g);

var s = document.createElement("script");
s.src = chrome.runtime.getURL("main.js");
(document.head || document.documentElement).appendChild(s);
