 window.onload=function(){
$(function(){
	setInterval(function (){
		let starTime=new Date();
		let endTime=new Date("2019-4-5 00:00:00");
		let temp=endTime-starTime;
		temp/=1000;
		let sec=parseInt(temp%60);
		let min=parseInt(temp/60)%60;
		let hour=parseInt(temp/3600)%24;
		let day=parseInt(temp/3600/24);
		$(".time").html(day+"天"+t(hour)+"时"+min+"分"+t(sec)+"秒");
	},100);
		function t(n){
			if(n<=9){
				return "0"+n;
			}else{
				return n;
			}
		}
	});
}