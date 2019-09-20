import axios from "../api"; // 导入 api
/**
 * 观众年龄、观众性别
 */
export const UserAttr = () =>
  axios(
    TICKET_BASE_URL + "/api/stat/user_attr", {
      p: 'w',
    },
    "GET",
    true
  );
/**

 /**
 * 会员注册情况
 */
export const Member = () =>
  axios(
    VIP_BASE_URL + "/api/expert/member", {
      p: 'w',
    },
    "GET",
    true
  );
/**
 * 客流数据
 */
export const KeliuInfo = () =>
  axios(
    KELIU_BASE_URL + "/api/keliu_info", {
      p: 'w',
    },
    "GET",
    true
  );
/**
 * 线上注册情况
 */
export const StatUserNum = () =>
  axios(
    TICKET_BASE_URL + "/api/stat/stat_user_num", {
      p: 'w',
    },
    "GET",
    true
  );

// 获取天气
export const SetWeather = () =>
  axios(
    "https://free-api.heweather.com/s6/weather/now", {
      location: "auto_ip",
      key: Weather_KEY
    },
    "GET",
    true
  );
/**
 * 七日预约
 */
export const YyCkData = (yy_t_date_range = '') =>
  axios(
    TICKET_BASE_URL + "/api/stat/yy_ck_data", {
      p: 'w',
      yy_t_date_range
    },
    "GET",
    true
  );


// const Member = (phone = "", code = "") =>
// 	axios(
//     VIP_BASE_URL + "/api/expert/member", {
// 			p:'w',
// 			device_uuid: localStorage.device_uuid,
// 			code
// 		},
// 		"POST",
// 		true
// 	);

