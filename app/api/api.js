import request from "@/utils/request.js";
/**
 * 公共接口 ，优惠券接口 , 行业此讯 , 手机号码注册
 * 
*/

/**
 * 获取主页数据 无需授权
 * 
*/
export function getIndexData()
{
  return request.get("restful/index",{},{ noAuth : true});
}

/**
 * 获取登录授权login
 * 
*/
export function getLogo()
{
  return request.get('restful/wechat/getLogo', {}, { noAuth : true});
}


/**
 * 保存form_id
 * @param string formId 
 */
export function setFormId(formId) {
  return request.post("wechat/set_form_id", { formId: formId});
}

/**
 * 领取优惠卷
 * @param int couponId
 * 
*/
export function setCouponReceive(couponId){
  return request.post('coupon/receive', { couponId: couponId});
}
/**
 * 优惠券列表
 * @param object data
*/
export function getCoupons(data){
  return request.get('restful/coupons',data,{noAuth:true})
}

/**
 * 我的优惠券
 * @param int types 0全部  1未使用 2已使用
*/
export function getUserCoupons(data){
  return request.get('coupon/list',data)
}

/**
 * 文章分类列表
 * 
*/
export function getArticleCategoryList(){
  return request.get('restful/article/category/list',{},{noAuth:true})
}

/**
 * 文章列表
 * @param int cid
 * 
*/
export function getArticleList(cid,data){
  return request.get('restful/article/list/' + cid, data,{noAuth:true})
}

/**
 * 文章 热门列表
 * 
*/
export function getArticleHotList(){
  return request.get('restful/article/hot/list',{},{noAuth:true});
}

/**
 * 文章 轮播列表
 * 
*/
export function getArticleBannerList(){
  return request.get('restful/article/banner/list',{},{noAuth:true})
}

/**
 * 文章详情
 * @param int id 
 * 
*/
export function getArticleDetails(id){
  return request.get('restful/article/info',id,{noAuth:true});
}

/**
 * 手机号+验证码登录接口
 * @param object data
*/
export function loginMobile(data){
  return request.post('restful/login/mobile',data,{noAuth:true})
}

/**
 * 获取短信KEY
 * @param object phone
*/
export function verifyCode(){
  return request.get('restful/verify_code', {},{noAuth:true})
}

/**
 * 验证码发送
 * @param object phone
*/
export function registerVerify(phone){
  return request.post('restful/sendCode', { phone: phone },{noAuth:true},1)
}

/**
 * 手机号注册
 * @param object data
 * 
*/
export function phoneRegister(data){
  return request.post('restful/register',data,{noAuth:true});
}

/**
 * 手机号修改密码
 * @param object data
 * 
*/
export function phoneRegisterReset(data){
  return request.post('restful/register/reset',data,{noAuth:true})
}

/**
 * 手机号+密码登录
 * @param object data
 * 
*/
export function phoneLogin(data){
  return request.post('restful/login',data,{noAuth:true})
}

/**
 * 切换H5登录
 * @param object data
*/
// #ifdef MP
export function switchH5Login(){
  return request.post('switch_h5', { 'from':'routine'});
}
// #endif

/*
 * h5切换公众号登录
 * */
// #ifdef H5
export function switchH5Login() {
  return request.post("switch_h5", { 'from': "wechat" });
}
// #endif

/**
 * 换绑手机号
 * 
*/
export function bindingPhone(data){
  return request.post('update/binding',data);
}

/**
 * 换绑手机号校验
 * 
*/
export function bindingVerify(data){
  return request.post('update/binding/verify',data);
}

/**
 * 退出登錄
 * 
*/
export function logout(){
  return request.get('logout');
}

/**
 * 获取订阅消息id
 */
export function getTemlIds(data)
{
  return request.get('restful/wechat/program/my/temp/list', data , { noAuth:true});
}

/**
 * 首页拼团数据
 */
export function pink()
{
  return request.get('restful/pink', {}, { noAuth:true});
}

/**
 * 获取城市信息
 */
export function getCity() {
  return request.get('city/list', { }, { noAuth: true });
}

/**
 * 获取小程序直播列表
 */
export function getLiveList(page,limit) {
  return request.get('restful/wechat/live', { page, limit}, { noAuth: true });
}

/**
 * 获取小程序二维码
 */
export function getQrcode(data) {
  return request.post('restful/qrcode/get',data,{ noAuth: true });
}
