//滚动条在Y轴上的滚动距离
function getScrollTop() {
	var scrollTop = 0,
		bodyScrollTop = 0,
		documentScrollTop = 0;
	if(document.body) {
		bodyScrollTop = document.body.scrollTop;
	}
	if(document.documentElement) {
		documentScrollTop = document.documentElement.scrollTop;
	}
	scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
	return scrollTop;
}

//文档的总高度
function getScrollHeight() {
	var scrollHeight = 0,
		bodyScrollHeight = 0,
		documentScrollHeight = 0;
	if(document.body) {
		bodyScrollHeight = document.body.scrollHeight;
	}
	if(document.documentElement) {
		documentScrollHeight = document.documentElement.scrollHeight;
	}
	scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
	return scrollHeight;
}

//浏览器视口的高度
function getWindowHeight() {
	var windowHeight = 0;
	if(document.compatMode == "CSS1Compat") {
		windowHeight = document.documentElement.clientHeight;
	} else {
		windowHeight = document.body.clientHeight;
	}
	return windowHeight;
}

//判断页面是否滚动到顶
function isTop() {
	if(getScrollTop() == 0) {
		console.log("arrived top");
		return true;
	} else {
		return false;
	}
}

//判断页面是否滚动到底
function isBottom() {
	if(getScrollTop() + getWindowHeight() == getScrollHeight()) {
		console.log("arrived bottom");
		return true;
	} else {
		return false;
	}
}

export {
	isTop,
	isBottom,
}