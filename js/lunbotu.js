window.onload = function(){
    new BannerPic({
			"boxDom":$("#lunbotu2"),//轮播图的容器
			"imgs":["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png"],
			"doudouDirection":"下"			
		});
}	

function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}