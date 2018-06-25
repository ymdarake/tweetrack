var Twitter = require('twitter');

const fs = require('fs')

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var params = {screen_name: '8rocketofficial', count: 150, include_rts: false};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      var rts = [];
      var favorites = [];
    tweets.forEach(function (e) {
      var date = formatDate(e.created_at);
      rts.push([date, e.retweet_count])
      favorites.push([date, e.favorite_count])
    });
    fs.writeFileSync( "rts.js" , "var RTS = " + JSON.stringify(rts.reverse()))
    fs.writeFileSync( "favorites.js" , "var FAVORITES = " + JSON.stringify(favorites.reverse()))
  }
  else {
    console.error(error);
  }
});

function formatDate(str) {
    var dateObj = new Date(str)
    return dateObj.getMonth()+1 + "-" + dateObj.getDate()
}

