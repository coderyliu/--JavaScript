//邮件的规则：任意的字母数字下划线   .任意数字字母下划线  @  任意数字字母 .任意字母(2-5位)
//.任意字母(2-5位)
var reg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
var email = "2330053403@qq.com";
console.log(reg.test(email));
