import axios from "../api"; // 导入 api
/**
 * 教育活动首页列表
 */
const activeList = () =>
	axios(
		STATIC_ACTIVE_URL + "/api/web_active_list", {
			p: PLAT,
			api_token: localStorage.app_token
		},
		"GET",
		true
	);
/**

/**
 * 发送短信验证码
 */
const sendSms = (phone = "", code = "") =>
	axios(
		STATIC_PW_URL + "/api/send_sms", {
			p: PLAT,
			phone,
			device_uuid: localStorage.device_uuid,
			code
		},
		"POST",
		true
	);
export default {
  
}
