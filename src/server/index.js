import Koa from 'koa';
import serve from 'koa-static';

let app = new Koa();

app.use(serve(__dirname + '/public'));

console.log('listening on port 3000');

app.listen(3000);
