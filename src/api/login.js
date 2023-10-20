import request from "@/utils/request";

// 用户登录
export const login = (username, password, captchaCode, uuid) =>
  request({
    url: "/backendApi/login/doLogin",
    method: "post",
    data: {
      username,
      password,
      captchaCode,
      uuid,
    },
  });
