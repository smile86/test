var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname + '/public')));
//app.use(express.static(__dirname + '/public'));
// path 를 사용하면 /public에서 '/' 상관없이 주소조합해줌
// 그러나 지금 path를 사용하니까  브라우저에 Cannot GET / 라는 메시지가 나옴
// 더 해보니까 /public 이라고 해주니까 똑같이 나옴.
// 그렇다는 것은 path를 왜 쓰는지 모르겠음
//console.log(__dirname);
app.listen(3000, function(){
	console.log('Server On');
});
