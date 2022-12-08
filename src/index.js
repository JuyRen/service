const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/api/home", async (ctx) => {
  ctx.body = {
    data: "i am home",
  };
});

app.use(router.routes()).listen(9999);
