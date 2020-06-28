import request from "@/utils/request.js";

/**
 * 获取商品
 * @param params
 * @returns {AxiosPromise}
 */
export function goods(params) {
  return request({
    url: "/goods/getGoodsList", //如果是绝对路径就不会在使用配置里的url
    method: "post",
    data: params //注意：如果是get请求请使用 params: params
  });
}

/**
 * 新增商品
 * @param params
 * @returns {AxiosPromise}
 */
export function saveGoods(params) {
  console.log("goods的参数"+params);  
  return request({
    url: "/goods/saveGoods", //如果是绝对路径就不会在使用配置里的url
    method: "post",
    data: params //注意：如果是get请求请使用 params: params
  });
}
/**
 * 查询商品
 * @param params
 * @returns {AxiosPromise}
 */
export function getGoods(params) { 
  return request({
    url: "/goods/getGoodsById", //如果是绝对路径就不会在使用配置里的url
    method: "get",
    params: params //注意：如果是get请求请使用 params: params
  });
}

/**
 * 修改商品状态
 * @param params
 * @returns {AxiosPromise}
 */
export function updateGoodsState(params) {
  return request({
    url: "/goods/updateState", //如果是绝对路径就不会在使用配置里的url
    method: "post",
    data: params //注意：如果是get请求请使用 params: params
  });
}