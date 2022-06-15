## 项目介绍

typora 私有图床服务

借助 pkg，快速生成自定义图床上传脚本，支持 win mac linux

如果对你有帮助，麻烦给个 star，感恩

## 使用

### 服务部署

1. 正确配置 deploy.remote.sh 下的 volumn_path，用来存放你的图床数据
2. 执行如下命令

```bash
sh deploy.remote.sh
```

3. 记录生成好的 jwt token

默认使用 8089 端口

### typora 上传脚本生成

docker 部署成功后，会生成一个 jwt token，用于私有化鉴权。
修改`client - upload.js`

```js
const baseUrl = 你的域名
const token = docker部署成功后生成的jwt token
```

生成上传工具

```js
// win
npm run build-win
npm run build-linux
npm run build-mac
```

### 配置 typora 自定义图床

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f6e13e036d5480aa2a5a3bff0129568~tplv-k3u1fbpfcp-watermark.image?)
command 直接设置为生成的安装包即可
