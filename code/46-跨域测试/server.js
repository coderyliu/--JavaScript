const Koa=require('koa2')
const Router=require('koa-router')
const cors=require('koa-cors')

const app=new Koa()
app.use(cors())

const router=new Router({
  prefix:'/api'
})

router.get('/text',(ctx)=>{
  ctx.body='hahaha'
})

app.use(router.routes())

app.listen('5000',()=>{
  console.log('5000端口监听中')
})