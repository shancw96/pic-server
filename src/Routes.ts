import Router from "koa-router";
import {file} from "./controller";
import multer from '@koa/multer';
const upload = multer({
  storage: multer.diskStorage({
    destination:__dirname+'/../uploads/',
    filename:function(req,file,cb){
      cb(null, file.originalname);
    }
  })
})
const routes = new Router();
// FILE ROUTES
// @ts-ignore
routes.get("/public/uploads/:id", file.download);
routes.post("/uploads", upload.any(), file.upload);

export { routes };