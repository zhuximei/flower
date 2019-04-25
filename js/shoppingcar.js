//my$函数
 function my$(str){
  if(str.charAt(0)=="#"){
    return document.getElementById(str.substring(1));
  }else if(str.charAt(0)=="."){
    return document.getElementsByClassName(str.substring(1));
  }else{
    return document.getElementsByTagName(str);
  }
} 
function testf(){
	my$("#arrow").onclick=function(){
		my$("#footer-box").style.display="block";
	}
}
function close(){
	my$("#sylbom").onclick=function(){
		my$("#footer-box").style.display="none";
	}
}
// function list(){
	// $("#kind").onclick=function(){
	  // $("#nav").style.display="flex";
// }
// $(function(){
 function list(){
    $("#kind").click(function(){
	   $("#nav").slideToggle();
	});
}
// });
 // function teye(){
 // 	my$("#sylbom").onmouseover=function(){
	// 	my$("#symbol").style.background="skyblue";
	// }
 // }
window.onload=function(){
	testf();
	close();
	list();
	// teye();
}

// $(function(){
// 	$("#box").addMasking();
// });