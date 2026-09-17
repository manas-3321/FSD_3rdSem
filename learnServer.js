const http = require('http');
let items = ['apple', 'banana'];

const server = http.createServer((req, res) => {
    res.setHeader ('Content-Type', 'application/json');
    if(req.method === 'GET') {
        res.end(JSON.stringify(items));
    }

    else if (req.method === 'POST'){
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            items.push(body);
            res.end('Items added:' + body);
        });
    }

    else if (req.method === 'PUT'){
        items[0] = 'upddated items';
        res.end('first item uploaded');

    }
    else if (req.method === 'DELETE'){
        items.pop();
        res.end('last item removed');
    }
});


server.listen(3000,()=> console.log('server running on http://localhost:3000'));
