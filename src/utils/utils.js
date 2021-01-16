// 判断数据类型
export const typeofIt = function(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLocaleLowerCase();
}