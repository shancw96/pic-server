image_name=koa-server:v1
container_name=koa-pic-server
docker rm -f $container_name
docker rmi $image_name
docker build . -t $image_name --no-cache
docker run -t -p 8081:3000 \
  --restart=always \
  --name=$container_name \
  -v /Users/wushangcheng/Project/koa-pic-base/uploads:/home/node/app/uploads \
  $image_name