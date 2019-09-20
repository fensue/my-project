// 引入koa
let Koa = require('koa')
// 引入koa-router
let KoaRouter = require('koa-router')
// 实例化koa
let koa = new Koa()
// 实例化koa-router
let koaRouter = new KoaRouter()
// 接口
koaRouter.get('/',(ctx,next)=>{
  // 获取数据
  let req = ctx.query.req
  console.log(req)
  // 显示要返回的数据
  ctx.body = '测试3'
})
// 声明使用路由,声明使用路由的所有相关方法
koa
  .use(koaRouter.routes())
  .use(koaRouter.allowedMethods())
// 监听接口
koa.listen('3000',()=>{
  console.log('服务器启动成功!')
  console.log('服务器地址:http://localhost:3000')
})
