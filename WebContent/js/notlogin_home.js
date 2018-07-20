

$(document).ready(function(){
	var user=isLogin();
	if(user!=null)
		{
			localStorage.setItem("userName",user.userName);
			localStorage.setItem("userId",user.userId);
			location.href="login_home.jsp";
		}
	else{
	var num=3;//加载数目
	var start=0;//起始位置
	var len=3;

	var left=$("#left");
	$.ajax({
    	type:"post",
    	url:"selectArticleList",
    	data:{
    		start:start,
    		num:num
    	},
    	dataType:"json",
    	success : function(data){
    		
    		var map=data.map;
    		var list=map.artList;
    	
    		loadArticle(left,list,num);
    		start=start+3;
    		len=list.length;
    	},
    	error : function() {
            left.append("<h2>加载内容失败</h2>");
        }
    });
	
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
        	$.ajax({
    	    	type:"post",
    	    	url:"selectArticleList",
    	    	data:{
    	    		start:start,
    	    		num:num
    	    	},
    	    	
    	    	dataType:"json",
    	    	
    	    	success : function(data){
    	    		var map=data.map;
    	    		var list=map.artList;
    	    		
    	    		if($(document).height()-5<=totalheight-5){
    	    			loadArticle(left,list,num);
        	    		start=start+3;
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
        	/////////////////////
        }  
    }); 
	}
});



function moveright(){
	var temp =20+$('#navUl').width()/2;
	$("#navUl").animate({right:temp+'px'});
	
}
function moveleft(){
	var temp = 0;
	$("#navUl").animate({right:temp + 'px'});
}
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

  
