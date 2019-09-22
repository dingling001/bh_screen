import axios from "../api";


/**
 * 儿童7日预约进馆数
 */
export const ChildrenYyCkData = () =>
  axios(
    TICKET_BASE_URL + "/api/stat/children_yy_ck_data", {
      p: 'w',
    },
    "GET",
    true,
  );
