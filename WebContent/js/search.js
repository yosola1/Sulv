/**
 * 
 */
var value = $("#text").val() ;
var user=isLogin();
function search(){
	$.ajax({
    	type:"post",
    	url:"searchUser",
    	data:{
    	value:value
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		var map=data.map;
    		list=map.userList;
    		if(user==null){
    			$("#article").css('display',"none");
    		}
    		else if(list.userId==user.userId){
    			$("#userName").text(user.userName);
    			$("#loginTitle").css('display',"block");
    			$("#notloginTitle").css('display',"none");
    			$("#attention").css('display',"none");
    			$("#function").css('display',"none");
    			$("#commentForm").css('display',"none");
    		}else{
    			$("#userName").text(user.userName);
    			$("#loginTitle").css('display',"block");
    			$("#notloginTitle").css('display',"none");
    		}
    		
    		$('#title').text(list.title);
    		
    		$('#name').text(list.userName);
    		$('#fans').text("粉丝："+list.fansNum);
    		$('#address').text("地址："+list.address);
    		$('#education').text("学历："+list.education);
    	},
    	error : function() {
            alert("用户加载失败");
        }
    });
}