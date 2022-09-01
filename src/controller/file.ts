import { Context } from "koa";
import path from "path";
import fs from 'fs';
import { cpus } from 'os';
// @ts-ignore
import { ImagePool } from '@squoosh/lib';
const imagePool = new ImagePool(cpus().length);
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
      const filePathTemp = path.join(__dirname, `/../../uploads/zip-${fileName}`);
      await zipWithCache(filePathTemp);
      ctx.body = fs.createReadStream(filePathTemp);
    }

    async function zipWithCache(tempFilePath: string) {
      const startTime = Date.now();
      if(!fs.existsSync(tempFilePath)) {
        const filePathTemp = path.join(__dirname, `/../../uploads/zip-${fileName}`);
        const image = imagePool.ingestImage(filePath);
        await image.encode({
          mozjpeg: {}
        });
        const { binary } = await image.encodedWith.mozjpeg;
        fs.writeFileSync(`${filePathTemp}`, binary);
        console.log('zip file cost Time: ', Date.now() - startTime + 's');
      }
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