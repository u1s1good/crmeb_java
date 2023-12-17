import request from "@/utils/request.js";
import wechat from "@/libs/wechat.js";
import {
	toLogin,
	checkLogin
} from '../libs/login';
/**
 * 获取微信公众号js配置
 * @returns {*}
 */
export function getWechatConfig() {
  return request.get("restful/wechat/config",{ url: encodeURIComponent(wechat.signLink()) },{ noAuth: true });
}

/**
 * 获取微信sdk配置
 * @returns {*}
 */
export function wechatAuth(code, spread) {
	var reg=/^[0-9]+.?[0-9]*$/; //判断字符串是否为数字 ，判断正整数用/^[1-9]+[0-9]*]*$/
	spread = reg.test(spread) ? spread : 0;
  return request.get(
    "restful/wechat/authorize/login?code=" + code + "&spread_spid=" + spread, {},
    { noAuth: true }
  );
}

/**
 * 获取登录授权login
 * 
*/
export function getLogo()
{
	// wechat/get_logo
  return request.get('restful/wechat/getLogo', {}, { noAuth : true});
}

/**
 * 小程序用户登录
 * @param data object 小程序用户登录信息
 */
export function login(code,data) {
  return request.post("restful/wechat/authorize/program/login?code="+code, data, { noAuth : true });
}
/**
 * 分享
 * @returns {*}
 */
export function getShare() {
  return request.get("restful/share", {}, { noAuth: true });
}

/**
 * 获取关注海报
 * @returns {*}
 */
export function follow() {
  return request.get("restful/wechat/follow", {}, { noAuth: true });
}

/**
 * 获取图片base64
 * @retins {*}
 * */
export function imageBase64(image) {
  return request.post("restful/qrcode/base64",image,{ noAuth: true },1);
}

/**
 * 自动复制口令功能
 * @returns {*}
 */
export function copyWords() {
  return request.get("restful/copy_words", {}, { noAuth: true });
}

/**
 * 首页 获取客服地址
 * @returns {*}
 */
export function kefuConfig() {
  return request.get("restful/config", {}, { noAuth: true });
}

/**
 * 微信（公众号，小程序）绑定手机号
 * @param {Object} data
 */
export function getUserPhone(data){
	return request.post('restful/wechat/register/binding/phone',data,{noAuth : true});
}

/**
 * APP微信登录
 * @param {Object} data
 */
export function appAuth(data) {
	return request.post("restful/wechat/authorize/app/login", data, { noAuth : true });
}

/**
 * 苹果登录
 * @param {Object} data
 */
export function appleLogin(data) {
	return request.post("restful/ios/login", data, { noAuth : true });
}


/**
 * 苹果绑定手机号
 * @param {Object} data
 */
export function iosBinding(data) {
	return request.post("restful/ios/binding/phone", data, { noAuth : true });
}