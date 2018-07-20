var user=isLogin();
function attention(){
	var byFollowerId=art.userId;
	if(user!=null){
	$.ajax({
    	type:"post",
    	url:"addAttention",
    	data:{
    		followerId:user.userId,
    		byFollowerId:byFollowerId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		$("#attention").css('display',"none");
    		$("#attented").css('display',"inline");
    	},
    	error : function() {
    		alert("关注失败");
        }
    });}
	else{
		alert("您还未登录");
	}
}

function isattention(followerId,byFollowerId){
	if(user!=null){
	$.ajax({
    	type:"post",
    	url:"isAttention",
    	data:{
    		followerId:user.userId,
    		byFollowerId:byFollowerId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		var map=data.map;
    		if(map.result){
    			$("#attention").css('display',"none");
        		$("#attented").css('display',"inline");
    		}
    		
    	},
    	error : function() {
    		
        }
    });
	}
}

function attented(){
	var byFollowerId=art.userId;
	$.ajax({
    	type:"post",
    	url:"deleteAttention",
    	data:{
    		byFollowerId:byFollowerId,
    		followerId:user.userId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		$("#attention").css('display',"inline");
    		$("#attented").css('display',"none");
    	},
    	error : function() {
    		alert("取消失败");
        }
    });
}

function like(){
	if(user!=null){
	var articleId=art.articleId;
	$.ajax({
    	type:"post",
    	url:"addLike",
    	data:{
    		articleId:articleId,
    		userId:user.userId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		
    		window.location.reload();
    	},
    	error : function() {
    		alert("喜欢文章失败");
        }
    });}
	else
		{
		alert("您还未登录");
		}
}

function liked(){
	var articleId=art.articleId;
	$.ajax({
    	type:"post",
    	url:"deleteLike",
    	data:{
    		articleId:articleId,
    		userId:user.userId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		window.location.reload();
    	},
    	error : function() {
    		alert("取消失败");
        }
    });
}

function islike(userId,articleId){
	if(user!=null){
	$.ajax({
    	type:"post",
    	url:"isLike",
    	data:{
    		userId:user.userId,
    		articleId:articleId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		var map=data.map;
    		if(map.result){
    			$("#addlike").css('display',"none");
        		$("#deletelike").css('display',"block");
    		}
    		
    	},
    	error : function() {
    		
        }
    });}
}

function collection(){
	if(user!=null){
	var articleId=art.articleId;
	$.ajax({
    	type:"post",
    	url:"addCollection",
    	data:{
    		articleId:articleId,
    		userId:user.userId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		window.location.reload();
    	},
    	error : function() {
    		alert("收藏文章失败");
        }
    });}
	else
	{
	alert("您还未登录");
	}
}

function collected(){
	var articleId=art.articleId;
	$.ajax({
    	type:"post",
    	url:"deleteCollection",
    	data:{
    		articleId:articleId,
    		userId:user.userId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		window.location.reload();
    	},
    	error : function() {
    		alert("取消失败");
        }
    });
}

function iscollect(userId,articleId){
	if(user!=null){
	$.ajax({
    	type:"post",
    	url:"isCollection",
    	data:{
    		userId:user.userId,
    		articleId:articleId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		var map=data.map;
    		if(map.result){
    			$("#addcollect").css('display',"none");
        		$("#deletecollect").css('display',"block");
    		}
    		
    	},
    	error : function() {
    		
        }
    });}
}

function personal(){
	localStorage.setItem("userId",user.userId);
	localStorage.setItem("userName",user.userName);
	location.href="personal.jsp";
}

function getid(obj){
	localStorage.setItem("articleId",obj.id);
	location.href="read_article.jsp";
}
function getuserId(obj){
	localStorage.setItem("userId",obj.id);
	location.href="user.jsp";
}
function clickType(obj){
	localStorage.setItem("typeId",obj.id);
	location.href="select_type.jsp";
}

