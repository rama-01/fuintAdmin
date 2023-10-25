import request from "@/utils/request";

// 用户登录
export const login = (username, password, captchaCode, uuid) =>
  request.post({
    url: "/backendApi/login/doLogin",
    data: {
      username,
      password,
      captchaCode,
      uuid,
    },
  });

// 获取图形验证码
export const getCodeImg = () =>
  request({
    url: "/backendApi/captcha/getCode",
    method: "get",
  });
