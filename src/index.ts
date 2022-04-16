import Koa from 'koa';
import {config} from './config'

const app = new Koa();

app.listen(config.port, () => {
  console.log('jwt-secret', process.env.JWT_SECRET)
});