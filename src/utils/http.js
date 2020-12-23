const axios = require("axios");

export default async function http(options) {
  const result = await axios({
    method: options.method,
    url: options.url,
  });

  return result;
}
