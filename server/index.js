var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'tuqiz5jlsFsezUmanVZ2HuWTB',
  consumer_secret: 'WoZ1UpyGxIxcHO6KHNMQKwXzEJv0G3SrrjlYl9cHIiNtOq4B1v',
  access_token_key: '874917922396884992-SoriVAJI5tY1NF5W3T3UrquJKbU3Zuz',
  access_token_secret: 'recvcXxmvpHP9b4eFbbaoj0mkgSWDJIQw6w60TSQKed2t'
});

var count = 0;
var util = require('util');
client.stream('filter',{track : 'love'},function(stream){
   stream.on('data',function(data){
       console.log(util.inspect(data));
       stream.destroy();
       process.exit(0);
   }) 
});
/*var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      console.log("dfdfh");
    console.log(tweets);
  }
});*/

/*var app = require('express').createServer(),
    twitter = require('ntwitter');

app.listen(3000);

var twit = new twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_KEY'
});

twit.stream('statuses/filter', { track: ['love', 'hate'] }, function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});*/