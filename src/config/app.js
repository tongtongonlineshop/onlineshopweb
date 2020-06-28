import { useApiUrl } from "@/config/apiUrl";
import CommonConfig from "@/config/common";
import SystemConfig from "@/config/system";

export default {
  ...CommonConfig,
  ...SystemConfig,
  apiUrl: useApiUrl,
  corporation: "公司名教育科技（北京）有限公司",
  siteName: "通通买电子购物后台管理系统"
};
