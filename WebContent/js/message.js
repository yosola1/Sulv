
	var userId=localStorage.getItem("userId");
	var userName=localStorage.getItem("userName");
	var num=3;//加载数目
	var start=0;//起始位置
    var len=3;
    
$(document).ready(function(){
	$("#username").text(userName);
	var like=$("#Section1");
	$.ajax({
    	type:"post",
    	url:"messageL",
    	data:{
    		userId:userId,
    		start:start,
    		num:num
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		var list=data.likeList;

    		loadLike(like,list,num);
    		start=start+num;
    	},
    	error : function() {
    		like.append("<h2>没有点赞消息</h2>");
        }
    });
});
function clickM(obj){
	//alert("000"+obj.id);
	if(obj.id==1){
		//alert("1111");
		var like=$("#Section1");
		$.ajax({
	    	type:"post",
	    	url:"messageL",
	    	data:{
	    		userId:userId,
	    		start:start,
	    		num:num
	    	},
	    	
	    	dataType:"json",
	    	
	    	success : function(data){
	    		var list=data.likeList;
	
	    		loadLike(like,list,num);
	    		start=start+num;
	    	},
	    	error : function() {
	    		like.append("<h2>没有点赞消息</h2>");
	        }
	    });

	}

	if(obj.id==2){
		//alert("222");
		var byFollowerId = userId;
		var atten=$("#Section2");
		$.ajax({
	    	type:"post",
	    	url:"fansList",
	    	data:{
	    		byFollowerId:byFollowerId,
	    		start:start,
	    		num:num
	    	},
	    	
	    	dataType:"json",
	    	
	    	success : function(data){
	    		
	    		var list=data.fansList;
	    
	    		loadAtten(atten,list,num);
	    		
	    		start=start+num;
	    	},
	    	error : function() {
	    		atten.append("<h2>没有关注消息</h2>");
	        }
	    });}
		if(obj.id==3){
			//alert("1111");
			var collection=$("#Section3");
			$.ajax({
		    	type:"post",
		    	url:"messageC",
		    	data:{
		    		userId:userId,
		    		start:start,
		    		num:num
		    	},
		    	
		    	dataType:"json",
		    	
		    	success : function(data){
		    		var list=data.collectionList;
		    	
		    		loadCollection(collection,list,num);
		    		start=start+num;
		    	},
		    	error : function() {
		    		collection.append("<h2>没有收藏消息</h2>");
		        }
		    });

		}
		if(obj.id==4){
			var comment=$("#Section4");
			$.ajax({
		    	type:"post",
		    	url:"messageP",
		    	data:{
		    		userId:userId,
		    		start:start,
		    		num:num
		    	},
		    	
		    	dataType:"json",
		    	
		    	success : function(data){
		    		var list=data.commentList;
		    
		    		loadComment(comment,list,num);
		    		start=start+num;
		    	},
		    	error : function() {
		    		comment.append("<h2>没有评论消息</h2>");
		        }
		    });

		}

	}



function clearL(){

	$.ajax({
    	type:"post",
    	url:"clearL",
    	data:{
    		userId:userId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		window.location.reload();
    	},
    	error : function() {
    		alert("删除失败");
        }
    });
	
}
function clearA(){
	var byFollowerId = userId;
	$.ajax({
    	type:"post",
    	url:"clearA",
    	data:{
    		byFollowerId :byFollowerId 
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		window.location.reload();
    	},
    	error : function() {
    		alert("删除失败");
        }
    });
	
}
function clearC(){

	$.ajax({
    	type:"post",
    	url:"clearC",
    	data:{
    		userId:userId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		window.location.reload();
    	},
    	error : function() {
    		alert("删除失败");
        }
    });
	
}
function clearP(){

	$.ajax({
    	type:"post",
    	url:"clearP",
    	data:{
    		userId:userId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		window.location.reload();
    	},
    	error : function() {
    		alert("删除失败");
        }
    });
	
}

