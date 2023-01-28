var gmail;


function refresh(f) {
  if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


function parseUber(content){

  const parser = new DOMParser();
  const emailHTML = parser.parseFromString(content, 'text/html');

  var data = [...emailHTML.querySelectorAll('td')].find(({textContent:t}) => 
             t.includes("miles")
           );

  //console.log(data.innerHTML);

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
}

var main = function(){

  gmail = new Gmail();
  console.log('Hello,', gmail.get.user_email());


  window.addEventListener('hashchange', function(){
    console.log("Current page: ", gmail.get.current_page());
    //console.log("gi");
    if (gmail.get.current_page() !== "email"){
      console.log("clearing");
      chrome.runtime.sendMessage("nmhihkkcifbhmjinkliiocgdnlilnccm", {action: "clear"});
    }
  });

  gmail.observe.on('view_email', function(obj) {
    //console.log('individual email opened', obj);

    var id = gmail.new.get.email_id();

    var email = new gmail.dom.email(id);
    var data = email.data();
    //console.log(data);


    var sender = data.from_email;
    var content  = data.content_html;
    
    //console.log(sender);
    var vals = parseUber(content);

    console.log(vals);

    
    chrome.runtime.sendMessage("nmhihkkcifbhmjinkliiocgdnlilnccm", {action: "set", id: id, data: vals});


  });
}


refresh(main);
