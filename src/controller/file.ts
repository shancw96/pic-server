import { BaseContext, Context } from "koa";
import path from "path";
import fs from 'fs';
export default class FileController {
  /**
   * 文件下载
   */
  public static async download(ctx: Context) {
    const fileName = ctx.params.id as string;
    const file = path.join(__dirname, `/../../uploads/${fileName}`)
    if (!fs.existsSync(file)) {
      ctx.status = 404;
      ctx.body="not found"
    } else {
      ctx.body = fs.createReadStream(file);
    }
  }
  /**
   * 文件上传
   */
  public static async upload(ctx: Context) {
    ctx.status = 200;
    console.log('ctx.files', ctx.files);
    // @ts-ignore
    ctx.body = 'uploads/' + ctx.request.files[0].filename;;
  }
}