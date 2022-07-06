image_name=127.0.0.1:5000/koa-server:v1
container_name=koa-pic-server
volumn_path=/Users/wushangcheng/Project/koa-pic-base/uploads
docker rm -f $container_name
docker rmi $image_name
docker build . -t $image_name --no-cache
docker run -t -d -p 8089:3000 \
  --restart=always \
  --name=$container_name \
  -v $volumn_path:/home/node/app/uploads \
  $image_name