
	var userId=localStorage.getItem("userId");
	var userName=localStorage.getItem("userName");
	var num=3;//加载数目
	var start=0;//起始位置
    var len=3;
    
$(document).ready(function(){
	$("#username").text(userName);
	var followerId = userId;
	var attention=$("#Section1");
	$.ajax({
    	type:"post",
    	url:"attentionList",
    	data:{
    		followerId:followerId,
    		start:start,
    		num:num
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		//alert("red");
    		var list=data.attentionList;
    		loadAttention(attention,list,num);
    		start=start+num;
    	},
    	error : function() {
    		attention.append("<h2>没有关注</h2>");
        }
    });
});
function clickTab(obj){
	divId=obj.id;
	num=3;
	start=0;
	len=3;
	$("#pane div").empty();
if(divId==3){
	var myArticle=$("#Section3");

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
    		
    		console.log(data);
    		loadMyArticle(myArticle,list,num);
    		start=start+num;
    	},
    	error : function() {
    		myArticle.append("<h2>没有文章</h2>");
        }
    });

}
if(divId==2){
	var byFollowerId = userId;
	var fans=$("#Section2");
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
    		console.log(data)
    		var list=data.fansList;
    		loadFans(fans,list,num);
    		start=start+num;
    	},
    	error : function() {
    		fans.append("<h2>没有粉丝</h2>");
        }
    });

}
if(divId==1){
	var followerId = userId;
	var attention=$("#Section1");
	$.ajax({
    	type:"post",
    	url:"attentionList",
    	data:{
    		followerId:followerId,
    		start:start,
    		num:num
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		
    		var list=data.attentionList;
    		loadAttention(attention,list,num);
    		start=start+num;
    	},
    	error : function() {
    		attention.append("<h2>没有关注</h2>");
        }
    });

}
if(divId==4){
	
	var myCollectioon=$("#Section4");
	$.ajax({
    	type:"post",
    	url:"selectCollectionArticle",
    	data:{
    		userId:userId,
    		start:start,
    		num:num
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		var list=data.artList;
    		
    		/*console.log(data);*/
    		loadCollectionArticle(myCollectioon,list,num);
    		start=start+num;
    	},
    	error : function() {
    		myCollectioon.append("<h2>您还未收藏文章</h2>");
        }
    });

}


}
$(window).scroll(function(){  
	var range = 20;             //距下边界长度/单位px  
	var totalheight = 0;   //主体元素  
    var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)   

    totalheight = parseFloat($(window).height()) + parseFloat(srollPos);  
    if(($(document).height()-range) <= totalheight && len!=0) {
    	//////////////////
    	if(divId==3){
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
	    		var myArticle=$("#Section3")
	    		
	    		if($(document).height()-5<=totalheight-5){
	    			loadMyArticle(myArticle,list,num);
    	    		start=start+num;
    	    		if(list.length<3){
    	    			len=0;
    	    			alert("已全部加载");
    	    		}
    	    		else
    	    			len=list.length;
	    		}
	    		/*loadArticle(left,list,num);
	    		start=start+3;*/
	    		
	    	},
	    	error : function() {
	    		alert("已全部加载");
            }
	    });
    	}
    	/////////////////////
    	
    	if(divId==4){
        	$.ajax({
    	    	type:"post",
    	    	url:"selectCollectionArticle",
    	    	data:{
    	    		userId:userId,
    	    		start:start,
    	    		num:num
    	    	},
    	    	
    	    	dataType:"json",
    	    	
    	    	success : function(data){
    	    		var list=data.artList;
    	    		var myCollection=$("#Section4")
    	    		
    	    		if($(document).height()-5<=totalheight-5){
    	    			loadCollectionArticle(myCollection,list,num);
        	    		start=start+num;
        	    		if(list.length<3){
        	    			len=0;
        	    			alert("已全部加载");
        	    		}
        	    		else
        	    			len=list.length;
    	    		}
    	    		/*loadArticle(left,list,num);
    	    		start=start+3;*/
    	    		
    	    	},
    	    	error : function() {
    	    		alert("已全部加载");
                }
    	    });
        	}
    }  
}); 

function deleteMyArticle(obj){
	result=confirm("确认删除本文章？");
	if(result==true){
	var articleId=obj.id;
	$.ajax({
    	type:"post",
    	url:"deleteMyArticle",
    	data:{
    		articleId:articleId
    	},
    	
    	dataType:"json",
    	
    	success : function(data){
    		window.location.reload();
    	},
    	error : function() {
    		alert("删除失败");
        }
    });}
	
}

function editor(obj){
	localStorage.setItem("articleId",obj.id);

	location.href="editor.jsp";
}
