function regest(){
	$("#phoneId").onblur = function(){
		//手机的规则：11位数字，1开头
		var r = /^1[1-9]\d{9}$/;

		if(r.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
}
window.onload=function(){
	regest();
}
function $(str){
  if(str.charAt(0)=="#"){
    return document.getElementById(str.substring(1));
  }else if(str.charAt(0)=="."){
    return document.getElementsByClassName(str.substring(1));
  }else{
    return document.getElementsByTagName(str);
  }
} 