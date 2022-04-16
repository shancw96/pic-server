import { Context } from "koa";

export default class FileController {
  /**
   * 文件下载
   */
  public static async download(ctx: Context) {
    ctx.status = 200;
    ctx.body = 'file get';
  }
  /**
   * 文件上传
   */
  public static async upload(ctx: Context) {
    ctx.status = 200;
    ctx.body = 'file download';
  }
}