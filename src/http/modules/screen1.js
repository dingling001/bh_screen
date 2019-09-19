import axios from "../api"; // 导入 api
/**
 * 观众年龄、观众性别
 */
export const UserAttr = () =>
	axios(
    BASE_URL + "/api/stat/user_attr", {
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
    BASE_URL + "/api/stat/stat_user_num", {
      p: 'w',
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

