const process = require("process");

const request = require("request");

const fs = require("fs-extra");

const baseUrl = "http://serial.limiaomiao.site:8089";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4ifQ.AE2jPLoZsdDua3I1FfxDMCRD8KefPRLc9dcVoscmS9E"
async function upload_file(local_image_path) {
  const url = `${baseUrl}/uploads/`;
  const formData = {
    file: fs.createReadStream(local_image_path),
  };

  return new Promise(async (resolve ) => {
    await request.post(
      {
        url: url,
        formData: formData,
        headers: {
          Authorization: token,
        }
      },
      function optionalCallback(err, httpResponse, body) {
        resolve(body);
      }
    );
  });
}

async function main() {
  // 获取参数列表
  const args = process.argv.slice(2);

  for (let i = 0, args_length = args.length; i < args_length; i++) {
    image_url = await upload_file(args[i]);
    // typora 会获取log信息作为回填内容
    console.log(`${baseUrl}/public/${image_url}`)
  }
}

main();
