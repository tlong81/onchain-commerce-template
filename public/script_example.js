/*
 * Loon script example
 */
// log
console.log('This is a log');

// http get parameters
var params = {
    url: "https://api.example.com/post",
    headers: {
        Host: "api.example.com",
        Content-Type: "application/json",
    },
    body: "string"
}

// http get request
$httpClient.get('https://example.com/index', function(error, response, data) {
    console.log(response);
});

// http get
$httpClient.get(params, function(error, response, data) {
    console.log(response);
});

// http post
$httpClient.post(params, function(error, response, data) {
    console.log(response);
});

// notification
$notification.post('title', 'subtitle', 'body')

// persistentStore
$persistentStore.write('loon', 'appNameKey')
let res = $persistentStore.read('appNameKey')
console.log(res)

// utils
let ipaso = $utils.ipaso("43.153.80.208");
console.log(ipaso);

let geoip = $utils.geoip("43.153.80.208");
console.log(geoip);

let ipasn = $utils.ipasn("43.153.80.208");
console.log(ipasn);

// unzip
$utils.ungzipTest("H4sIAAAAAAAAE/MICQnQN9QzVDAyMFBwzs/LS00uyczPU3AtLklMyskszkhNAQCZT9rEIwAAAA==");

// timeout
setTimeout(function() {
    console.log('This code executes after 1 second');
}, 1000);

setTimeout(function(text) {
    console.log('This code executes after 5 seconds');
    console.log(text);
    $done()
}, 5000, 'This is a parameter passed to the function');
