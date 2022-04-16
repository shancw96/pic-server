import jwt from 'jsonwebtoken';
import { config } from 'src/config';
export default class AuthController {
  /**
   * 登录
   */
  public static sign() {
    const token = jwt.sign({user: 'admin'}, config.jwtSecret, {
      // jwt不随机生成，重启后，token不会过期
      noTimestamp: true,
    })
    // ctx.status = 200;
    // ctx.body = `Bearer ${token}`;
    return token;
  }
}