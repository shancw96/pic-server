import Router from "koa-router";
import {file} from "./controller";
const routes = new Router();
// FILE ROUTES
routes.get("/public/uploads/:id", file.upload);
routes.post("/uploads", file.download);

export { routes };