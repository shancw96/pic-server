image_name=11.12.123.2:5000/koa-server:v1
container_name=koa-pic-server
volumn_path=/Users/wushangcheng/Project/koa-pic-base/uploads
docker rm -f $container_name
docker rmi $image_name
docker pull $image_name
docker run -t -p 8089:3000 \
  --restart=always \
  --name=$container_name \
  -v $volumn_path:/home/node/app/uploads \
  $image_name