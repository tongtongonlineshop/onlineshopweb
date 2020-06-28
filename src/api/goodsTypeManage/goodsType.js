import request from "@/utils/request.js";

/**
 * 获取商品类型
 * @param params
 * @returns {AxiosPromise}
 */
export function goodsTypeList(params) {
  return request({
    url: "/goodsType/list", //如果是绝对路径就不会在使用配置里的url
    method: "get",
    params: params //注意：如果是post请求请使用 data: params
  });
}
/**
 * 获取添加商品类型
 * @param params
 * @returns {AxiosPromise}
 */
export function addGoodsType(params) {
    return request({
      url: "/goodsType/add", //如果是绝对路径就不会在使用配置里的url
      method: "post",
      data: params //注意：如果是post请求请使用 data: params
    });
  }