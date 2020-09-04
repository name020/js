var http=require('http');
var server=http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('测试内容');
	response.end('hello world');
	response.end('测试内容2');
}).listen(8888);
console.log('server running at http://localhost:8888/');