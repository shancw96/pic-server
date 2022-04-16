import Koa from 'koa';
import jwtAuth from "koa-jwt";
import {config} from './config'
import {routes} from './Routes';
import 'module-alias/register';
import AuthController from './controller/auth';
const app = new Koa();

// JWT middleware -> 此行以下的middleware需要验证secret有效性
app
  .use(jwtAuth({ secret: config.jwtSecret })
  .unless({path: [/^\/public/]}));
// These routes are protected by the JWT middleware, also include middleware to respond with "Method Not Allowed - 405".
app.use(routes.routes()).use(routes.allowedMethods());

app.listen(config.port, () => {
  const token = AuthController.sign();
  console.log('jwt-token', `Bearer ${token}`)
});