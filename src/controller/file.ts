import { BaseContext, Context } from "koa";
import path from "path";
import fs from 'fs';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegtran from 'imagemin-jpegtran';
export default class FileController {
  /**
   * 文件下载
   */
  public static async download(ctx: Context) {
    const fileName = ctx.params.id as string;
    const filePath = path.join(__dirname, `/../../uploads/${fileName}`);
    if (!fs.existsSync(filePath)) {
      ctx.status = 404;
      ctx.body = "not found";
    } else {
      const files = await imagemin([filePath], {
        plugins: [
          imageminJpegtran({arithmetic: true}),
          imageminPngquant({
            quality: [0.6, 0.8]
          })
        ]
      });
      // ctx.body = fs.createReadStream(filePath);
      ctx.body = files[0].data;
    }
  }
  /**
   * 文件上传
   */
  public static async upload(ctx: Context) {
    ctx.status = 200;
    console.log('ctx.files', ctx.files);
    // @ts-ignore
    ctx.body = 'uploads/' + ctx.request.files[0].filename;
  }
}