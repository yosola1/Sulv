
$(function(){
	var userName=localStorage.getItem("userName");
	var userId=localStorage.getItem("userId");
	
	var num=3;//加载数目
	var start=0;//起始位置
	var len=3;
	var recommendA=4;
	var recommendB=4;
	var A=true;
	var B=true;
	var left=$("#left");
	if(A){
		A=recommend(left,userId,start,num,recommendA,recommendB,A,B);}
	else if(B){
		B=recommend(left,userId,start,num,recommendA,recommendB,A,B);
	}
		
	else{
		recommend(left,userId,start,num,recommendA,recommendB,A,B);
	}
		
	start=start+3;

	
	$("#userName").text(userName);
	$.ajax({
    	type:"post",
    	url:"selectHotArticle",
    	data:{
    	},
    	dataType:"json",
    	success : function(data){
    		var list=data.list;
    		var hot=$("#hotarticle")
	    	for(var i=1;i<=5;i++){
	    		hot.append("<tr><td style='cursor:pointer' id='"+list[i-1].articleId+"' onclick='getid(this)'>"+i+"."+list[i-1].title+"</td></tr>");
	    	}
    	},
    	error : function() {
    	//	alert("加载热门文章失败");
    		hot.append("<h2>加载热门文章失败</h2>");
        }
    });
	$.ajax({
    	type:"post",
    	url:"selectHotWriter",
    	data:{
    	},
    	dataType:"json",
    	success : function(data){
    		var list=data.writerlist;
    		var writer=$("#hotwriter")
	    	for(var i=1;i<=5;i++){
	    		writer.append("<tr><td style='cursor:pointer' id='"+list[i-1].userId+"' onclick='getuserId(this)'>"+i+"."+list[i-1].userName+"</td></tr>");
	    	}
    	},
    	error : function() {
    	//	alert("加载热门文章失败");
    		writer.append("<h2>加载热门作者失败</h2>");
        }
    });
	
	$(window).scroll(function(){  
    	var range = 20;             //距下边界长度/单位px  
    	var totalheight = 0;   //主体元素  
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)   
        
        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);  
        if(($(document).height()-range) <= totalheight && len!=0) {
        	//////////////////
        	if(A)
        		A=recommend(left,userId,start,num,recommendA,recommendB);
        	else if(B)
        		B=recommend(left,userId,start,num,recommendA,recommendB);
        	else
        		recommend(left,userId,start,num,recommendA,recommendB);
        	start=start+3;
        	console.log(recommendB);
        	/////////////////////
        }  
    }); 
	
});
function search(){
	var userId=localStorage.getItem("userId");
	var text=$("#text").val();
	//alert(text);
	$.ajax({
		type:'post',
		url:'checkArticle',
		data:{
		title:text
		},
		//dataType:"json",
		success:function(data){
			//alert("成功");
			var article=data.article;
			if(article==null){
				alert("文章不存在！")
			}
			else{
				localStorage.setItem("articleId",data.article.articleId);
				location.href="read_article.jsp";
		
			
			}
		},
		error:function(){
			alert("error");
		},
	});
	
}


