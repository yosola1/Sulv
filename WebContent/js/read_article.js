var art;
var user=isLogin();
$(document).ready(function(){
	
	var articleId=localStorage.getItem("articleId");
	var len=3;
	var start=0;//起始位置
	var num=3;//加载数目
	/*document.getElementById("1").id="3";*/
	$.ajax({
    	type:"post",
    	url:"selectArticle",
    	data:{
    		articleId:articleId
    	},
    	dataType:"json",
    	success : function(data){
    		var map=data.map;
    		art=map.art;
    		if(user==null){
    			$("#commentForm").css('display',"none");
    		}
    		else if(art.userId==user.userId){
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
    			isattention(user.userId,art.userId);
    			islike(user.userId,art.articleId);
    			iscollect(user.userId,art.articleId);
    		}
    		
    		$('#title').text(art.title);
    		$('#article').append(art.articleContent);
    		$('#name').text(art.userName);
    		$('#date').text(art.finalDate.slice(0,10));
    		$('#type').text(art.typeName);
    		$('#collection').text("收藏："+art.collectionNum);
    		$('#like').text("喜欢："+art.likeNum);
    	},
    	error : function() {
            alert("文章加载失败");
        }
    });
	
	$.ajax({
    	type:"post",
    	url:"selectComment",
    	data:{
    		articleId:articleId
    	},
    	dataType:"json",
    	success : function(data){
    		var map=data.map;
    		var comList=map.comList;
    		for(var i=0;i<comList.length && i<num;i++){
    			if(user!=null && comList[i].userId==user.userId){
    				$('#comment').append("<div class='comment'><a onclick='deleteComment()'>删除</a><p>"+comList[i].userName+":"+comList[i].commentContent+"</p></div>");
    			}
    			else{
    				$('#comment').append("<div class='comment'><p>"+comList[i].userName+":"+comList[i].commentContent+"</p></div>");
    			}
    			start=start+3;
        		len=comList.length;
    		}
    		
    	},
    	error : function() {
            alert("评论加载失败");
        }
    });
	
	$(window).scroll(function(){  
    	var range = 20;             //距下边界长度/单位px  
    	var totalheight = 0;   //主体元素  
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)   
        
        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);  
        if(($(document).height()-range) <= totalheight && len!=0) {
        	//////////////////
        	$.ajax({
    	    	type:"post",
    	    	url:"selectComment",
    	    	data:{
    	    		articleId:articleId
    	    	},
    	    	
    	    	dataType:"json",
    	    	
    	    	success : function(data){
    	    		var map=data.map;
    	    		var comList=map.comList;
    	    		len=comList.length;
    	    		if($(document).height()-5<=totalheight-5){
    	    			$('#comment').append("<div class='comment'><p>"+comList[i].userName+":"+comList[i].commentContent+"</p></div>");
        	    		start=start+3;
    	    		}
    	    		
    	    		/*loadArticle(left,list,num);
    	    		start=start+3;*/
    	    		
    	    	},
    	    	error : function() {
    	    		alert("已全部加载");
                }
    	    });
        	/////////////////////
        }  
    }); 
	
});

function comment(){
	var commentContent=$("#commentContent").val();
	var articleId=art.articleId;
	
	resultStr=commentContent.replace(/[\r\n]/g,"");
	resultStr=resultStr.replace(/\ +/g,"");
	if(resultStr.length<=0){
		alert("评论不可为空")
	}
	else if(resultStr.length>=50){
		alert("评论不能大于50字")
	}
	else{
	$.ajax({
    	type:"post",
    	url:"addComment",
    	data:{
    		userId:user.userId,
    		articleId:articleId,
    		commentContent:commentContent
    	},
    	
    	dataType:"json",
    	success : function(data){
    		if(data.result){
        		window.location.reload();
    		}
    		else
    			alert("评论失败");
    	},
    	error : function() {
    		
    		alert("您已评论过该文章");
        }
    });}
}

function deleteComment(){
	result=confirm("确认删除该评论？");
	if(result){
	var articleId=art.articleId;
	$.ajax({
    	type:"post",
    	url:"deleteComment",
    	data:{
    		userId:user.userId,
    		articleId:articleId
    	},
    	
    	dataType:"json",
    	success : function(data){
    		if(data.result){
        		window.location.reload();
    		}
    		else
    			alert("删除失败");
    	},
    	error : function() {
    		
    		alert("删除失败");
        }
    });}
}

