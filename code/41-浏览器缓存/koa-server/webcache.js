import Koa from 'koa';
import path from 'path';
//静态资源中间件
import resource from 'koa-static';
const app = new Koa();
const host = 'localhost';
const port = 4396;
app.use(resource(path.join(__dirname, './static')));

app.listen(port, () => {
  console.log(`server is listen in ${host}:${port}`);
});

