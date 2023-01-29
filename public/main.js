var gmail;


function refresh(f) {
  if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}

function parseSouthwest(content){

  const parser = new DOMParser();
  const emailHTML = parser.parseFromString(content, 'text/html');
  var data = $(emailHTML).find('strong:eq(4)');
  var info = data[0].innerHTML.split();
  var hrs = info[0].slice(0, -1);
  var mins = info[0].slice(0, -1);

  var pounds = 1.76 * (60 * (parseFloat(hrs) + parseFloat(mins)));
  var dollars = pounds * .2;

  pounds.toFixed(2);
  dollars.toFixed(2);

  return {"company": "Southwest", "carbon": pounds.toFixed(2), "money": dollars.toFixed(2)};
}


function parseUber(content){

  const parser = new DOMParser();
  const emailHTML = parser.parseFromString(content, 'text/html');

  var data = [...emailHTML.querySelectorAll('td')].find(({textContent:t}) => 
             t.includes("miles")
           );

  var data = $(emailHTML).find('td:contains("miles"):last');
  var info = data[0].innerHTML.split()[0];
  var pounds = (parseFloat(info) * 0.7);
  var dollars = pounds * .2;

  pounds.toFixed(2);
  dollars.toFixed(2);

  return {"company": "Uber", "carbon": pounds.toFixed(2), "money": dollars.toFixed(2)};

}

var comapnies = {
  "noreply@uber.com": parseUber,
  "southwestairlines@ifly.southwest.com": parseSouthwest,
}

var main = function(){

  gmail = new Gmail();

  window.addEventListener('hashchange', function(){
    if (gmail.get.current_page() !== "email"){
      chrome.runtime.sendMessage("nmhihkkcifbhmjinkliiocgdnlilnccm", {action: "clear"});
    }
  });

  gmail.observe.on('view_email', function(obj) {
    var id = gmail.new.get.email_id();

    var email = new gmail.dom.email(id);
    var data = email.data();

    var sender = data.from_email;
    var content  = data.content_html;
    
    if (sender in comapnies){
      var vals = comapnies[sender](content);
    
      chrome.runtime.sendMessage("nmhihkkcifbhmjinkliiocgdnlilnccm", {action: "set", id: id, data: vals});
    }
  });
}


refresh(main);
