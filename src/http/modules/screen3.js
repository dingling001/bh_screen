import axios from "../api";

/**
 * 你好智能体验人数

 */
export const Hello = () =>
  axios(
    VIP_BASE_URL + "/api/expert/hello", {
      p: 'w',
    },
    "GET",
    true,
  );
/**
 * 你好智能体验次数top5
 */
export const HelloTop = () =>
  axios(
    VIP_BASE_URL + "/api/expert/hello_top", {
      p: 'w',
    },
    "GET",
    true,
  );
