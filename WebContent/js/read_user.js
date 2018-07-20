/**
 * 
 */
var user=isLogin();
$(document).ready(function(){
	var userId=localStorage.getItem("userId");
	var userName=localStorage.getItem("userName");
	var num=3;//加载数目
	var start=0;//起始位置
    var len=3;
function selectMyArticle(){
	
	
	$.ajax({
    	type:"post",
    	url:"selectMyArticle",
    	data:{
    		userId:userId,
    		start:start,
    		num:num
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		var list=data.artList;
    	    var map=data.map;
    		art=map.art;
    		if(user==null){
    			$("#commentForm").css('display',"none");
    		}
    
    		else{
    			loadMyArticle(myArticle,list,num);
    			start=start+num;
    			$("#userName").text(user.userName);
    			$("#loginTitle").css('display',"block");
    			$("#notloginTitle").css('display',"none");
    		}
    		
    		$('#title').text(art.title);
    		
    		$('#name').text(art.userName);
    		$('#date').text(art.finalDate.slice(0,10));
    	
    		$('#fans').text("粉丝数："+user.fansNum);
    	
    	},
    	error : function() {
    		alert("加载文章失败");
        }
    });
}})