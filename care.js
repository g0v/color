var fs = require('fs');
var csv = require('csv');

var care = fs.readFileSync('./care.csv');
var reply = [];

csv.parse(care, function(err, data) {
  data.forEach(function(item) {
    var phone = [item[3]];
    if (item[4]) {
      phone.push(item[4]);
    }
    reply.push({
      '縣市': item[0],
      '名稱': item[1],
      '地址': item[2],
      '電話': phone
    });
  });

  fs.writeFileSync('./care.json', JSON.stringify({data: reply}, null, 2));
});