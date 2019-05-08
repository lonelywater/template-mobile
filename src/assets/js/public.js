
//存放常用函数方法

//添加网页加载事件
const addLoadEvent = function(func){
   	var oldOnload = window.onload;
   	//typeof 返回String类型
   	if(typeof window.onload != 'function'){
       	window.onload = func;
   	}else{
       	window.onload = function(){
           	oldOnload();
           	func();
       	}
   	}
}

//添加网页滚动事件
const addScrollEvent = function(func) {
	var oldOnscroll = window.onscroll;
   	//typeof 返回String类型
   	if(typeof window.onscroll != 'function'){
       	window.onscroll = func;
   	}else{
       	window.onscroll = function(){
           	oldOnscroll();
           	func();
       	}
   	}
}

//添加窗口大小变化事件
const addResizeEvent = function(func) {
	var oldOnresize = window.onresize;
    //typeof 返回String类型
    if(typeof window.onresize != 'function'){
       	window.onresize = func;
    }else{
       	window.onresize = function(){
           	oldOnresize();
           	func();
       	}
    }
}

//判断是否到顶
import { isTop } from '@/assets/js/scrollVerdict'

//判断是否到底
import { isBottom } from '@/assets/js/scrollVerdict'

//图片懒加载
const lazyloadImg = function () {
	var nodes = document.getElementsByTagName('img');
	var viewh = document.documentElement.clientHeight;
	Array.prototype.forEach.call(nodes,function (item, index) {
		console.log(item);
		var recx;
		if (item.dataset.src === '') return;
		recx = item.getBoundingClientRect();
		if (recx.bottom >= 0 && recx.top < viewh) {
			(function () {
				let img = new Image();
				img.onload = function () {
					item.src = img.src;
					item.setAttribute("src",img.src);
				}
				img.src = item.dataset.src;
			})
		}
	})
}

//图片懒加载
const lazyload = function(classname) {
	var nodes = document.querySelectorAll('[data-url]');
	var viewh = document.documentElement.clientHeight;
	Array.prototype.forEach.call(nodes,function (item,index) {
		var recx;
		if (item.dataset.url === "") return;
		recx = item.getBoundingClientRect();
		if (recx.bottom>=0 && recx.top<viewh) {
			(function () {
			
				//图片标签载入
				//item.setAttribute("src",item.dataset.url);
				
				//背景图片载入
				//item.style.backgroundImage = 'url('+item.dataset.url+')';					
				
				var img = new Image();
				img.onload = function () {
					//背景图片载入
					item.style.backgroundImage = 'url("'+img.src+'")';
					//图片标签载入
					//item.setAttribute("src",img.src);
				}
				img.src = item.dataset.url;
				//item.dataset.url = "";
				
			})(item);
		}
	})
}

//设置原始rem，标准为750
const setRootFontSize = function () {
	//let fontsize = Math.floor(document.documentElement.clientWidth / 15);
	let fontsize = document.documentElement.clientWidth / 15;
	document.documentElement.style.fontSize = fontsize + 'px';
	//console.log(document.documentElement.clientWidth,fontsize);
	//document.documentElement.style.fontSize = Math.min(750, Math.max(document.documentElement.clientWidth, 375)) / 375 * 10 + 'px';
	
}

//判断是否是符合格式的手机号
const isPhone = function (phone) {
  phone = phone.toString();
  //var reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
  var reg = /^(13[0-9]|14[5-9]|15[^4]|16[6]|17[1-8]|18[0-9]|19[89])[0-9]{8}$/;
  if (phone.length != 11) {
    return false;
  } else if (!reg.test(phone)) {
    return false;
  } else {
    return true;
  }
}
//密码校验，密码为8-16位，至少包括数字、字母、符号中的两种
const isPassword = function (password) {
	password = password.toString();
	//var reg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,20}$/;
	var reg = /^(?![a-zA-z]+$)(?!\d+$)(?![.!@#$%^&*]+$)[a-zA-Z\d.!@#$%^&*]{8,16}$/;
	//var pattern =  /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{6,16}$/;
	if (password.length >= 8 && password.length <= 16) {
		if (reg.test(password)) {
			return true;
		} else{
			return false;
		}
	} else{
		return false;
	}
}

//汉字校验
const isChinese = function (text) {
	text = text.toString();
	var reg = /^[\u4e00-\u9fa5]+$/;
	if (reg.test(text)) {
		return true;
	} else{
		return false;
	}
}

//身份证号校验
const isID = function (id) {
	id = id.toString();
	//let reg1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	let reg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;//(15位)
	var reg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/;//(18位)
	if (id.length === 18) {
		if (reg2.test(id)) {
			return true;
		} else{
			return false;
		}
	} else{
		if (id.length === 15) {
			if (reg1.test(id)) {
				return true;
			} else{
				return false;
			}
		} else{
			return false;
		}
	}
}

/*
* idCard(str idCard, boolen strict)
* 校验是否是合法的身份证号
* return 合法的身份证号 => true;不合法的身份证号 => false;
* @author Verdient。
*/
var isIdCard = function (idCard) {
  var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  if (reg.test(idCard)) {
    if (idCard.length == 18) {
      var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
      var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2);
      var idCardWiSum = 0;
      for (var i = 0; i < 17; i++) {
        idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
      }
      var idCardMod = idCardWiSum % 11;
      var idCardLast = idCard.substring(17);
      if (idCardMod == 2) {
        if (idCardLast == "X" || idCardLast == "x") {
          return true;
        } else {
          return false;
        }
      } else {
        if (idCardLast == idCardY[idCardMod]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
}

//银行卡号校验
const isBank = function (bank) {
	bank = bank.toString();
	let reg = /^([1-9]{1})(\d{14}|\d{18})$/;
	if (reg.test(bank)) {
		return true;
	} else{
		return false;
	}
}

export {
	addLoadEvent,
	addScrollEvent,
	addResizeEvent,
	isTop,
	isBottom,
	lazyloadImg,
	lazyload,
	setRootFontSize,
	
	isPhone,
	isPassword,
	isChinese,
	isID,
	isIdCard,
	isBank,
	
}