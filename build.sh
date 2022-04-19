image_name=11.12.123.2:5000/koa-server:v1
container_name=koa-pic-server
docker rm -f $container_name
docker rmi $image_name
docker build . -t $image_name --no-cache
# docker run -t -p 8089:3000 \
#   --restart=always \
#   --name=$container_name \
#   -v /Users/wushangcheng/Project/koa-pic-base/uploads:/home/node/app/uploads \
#   $image_name
echo pushing docker image...
docker push $image_name