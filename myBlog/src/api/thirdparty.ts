import request from "./index";

export function weatherapi() {
  return request({
    method: "get",
    url: "/vvhan/api/weather",
  });
}
