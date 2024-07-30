import request from "./index";

export function homepageapi(params: any) {
  return request({
    method: "get",
    url: "/test/testApi",
    params,
  });
}
