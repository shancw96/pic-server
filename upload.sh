#!/bin/bash

# 各类配置信息
remote_download_path="public/uploads/"  # 下载默认的路径
remote_upload_path="uploads/" # 上传默认的路径
base_url="http://localhost:3000/" # 对象存储绑定的域名

# 上传图片
for i in "$@"; do
    echo 'file=@'"${i}"
    curl -s --location --request POST "$base_url""$remote_upload_path" \
        --header 'Content-Type: multipart/form-data' \
        # --header '' \
        -F 'file=@'"${i}"
done

# 输出结果
echo "Upload Success:"
for file in "$@"; do
    IFS='/' read -r -a array <<< "$file"
    id="${#array[@]}"
    echo "$base_url""$remote_download_path""${array[$id-1]}"
done