const devApiUrl = "http://localhost:8088"; //本地开发环境
const buildDevApiUrl = "http://localhost:8080"; //打包开发环境
const buildTestApiUrl = "http://localhost:8080"; //打包测试环境
const buildProApiUrl = "http://localhost:8080"; //打包正式环境
const serverApiUrl = "http://192.168.228.129:8080/onlineshop";//请求后端服务器路径

let useApiUrl;

if (process.env.NODE_ENV === "development") {
  useApiUrl = devApiUrl;
} else {
  //production
  switch (process.env.VUE_APP_MODE) {
    case "buildDev":
      useApiUrl = buildDevApiUrl;
      break;
    case "buildTest":
      useApiUrl = buildTestApiUrl;
      break;
    default:
      useApiUrl = buildProApiUrl;
      break;
  }
}

export { useApiUrl,serverApiUrl }; //可以导出更多需要不同环境区分的url
