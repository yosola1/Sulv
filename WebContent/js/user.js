/**
 * 
 */
var list;
var user=isLogin();
$(document).ready(function(){
	
	var userId=localStorage.getItem("userId");
	var len=3;
	var start=0;//起始位置
	var num=3;//加载数目

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
    		var article=$("#article")
    		loadArticle(article,list,num);
    		start=start+num;
    		
    	
    	},
    	error : function() {
            alert("文章加载失败");
        }
    });
	
	$.ajax();
	
	$(window).scroll(function(){  
    	var range = 20;             //距下边界长度/单位px  
    	var totalheight = 0;   //主体元素  
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)   
        
        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);  
        if(($(document).height()-range) <= totalheight && len!=0) {
        	//////////////////
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
        	    		var article=$("#article")
        	    		
        	    		if($(document).height()-5<=totalheight-5){
        	    			loadArticle(article,list,num);
            	    		start=start+num;
            	    		if(list.length<3){
            	    			len=0;
            	    			alert("已全部加载");
            	    		}
            	    		else
            	    			len=list.length;
        	    		}
        	    	
        	    		
        	    	},
        	    	error : function() {
        	    		alert("已全部加载");
                    }
        	    });
           /////////////
        }  
    }); 
	
});





