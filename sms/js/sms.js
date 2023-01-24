
// the code goes here
var runner = (P, F, I) => {
  // scrape the data from the inputs
  var phones = document.getElementById(P).value;
  var phoneArr = phones.split(",");
  var to__ = phoneArr;
  var from__ = document.getElementById(F).value;
  var info__ = document.getElementById(I).value;
  console.log([to__, from__, info__, phones]);
  var data = {
    "to": to__,
    "from": from__,
    "sms": info__,
    "type": "plain",
    "api_key": "TLFpY0JcSPpjOl29JqsTbr9tWIA8MMXMiPgZWV5SkhSMOw9bBya6Lv1ahxBYOl",
    "channel": "generic",
  };

  var data = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://api.ng.termii.com/api/sms/send/bulk");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(data);
};
