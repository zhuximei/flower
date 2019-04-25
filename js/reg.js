 function $(str){
  if(str.charAt(0)=="#"){
    return document.getElementById(str.substring(1));
  }else if(str.charAt(0)=="."){
    return document.getElementsByClassName(str.substring(1));
  }else{
    return document.getElementsByTagName(str);
  }
} 
function testf(){
	$("#eyes").onclick=function(){
		$("#eyes").style.display="none";
		$("#big-eyes").style.display="block";
		$("#password").type="text";
	}
	$("#big-eyes").onclick=function(){
		$("#eyes").style.display="block";
		$("#big-eyes").style.display="none";
		$("#password").type="password";
	}
}

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
	
	$("#password").onblur = function(){
		//密码的规则：输入6-20位的数字加字母组合的密码
		// var r = /^[A-Za-z0-9]{6,20}$/;
		var r=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
		if(r.test(this.value)){
			$("#span-box1").innerHTML = "√";
		}else{
			$("#span-box1").innerHTML = "×";
		}
	}
}
window.onload=function(){
	testf();
	regest();
}

// 注：
// ^ 匹配一行的开头位置 
// (?![0-9]+$) 预测该位置后面不全是数字 
// (?![a-zA-Z]+$) 预测该位置后面不全是字母 
// [0-9A-Za-z] {6,10} 由6-10位数字或这字母组成 
// $ 匹配行结尾位置