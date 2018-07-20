var typeId=localStorage.getItem("typeId");
$(document).ready(function(){
	
	var num=3;//加载数目
	var start=0;//起始位置
	var len=3;

	var left=$("#left");
	$.ajax({
    	type:"post",
    	url:"selectThisType",
    	data:{
    		typeId:typeId,
    		start:start,
    		num:num
    	},
    	dataType:"json",
    	success : function(data){
    		
    		var list=data.artList;
    	
    		loadArticle(left,list,num);
    		start=start+3;
    		len=list.length;
    	},
    	error : function() {
            alert("加载失败");
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
    		alert("加载热门文章失败");
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
    	    	url:"selectThisType",
    	    	data:{
    	    		typeId:typeId,
    	    		start:start,
    	    		num:num
    	    	},
    	    	
    	    	dataType:"json",
    	    	
    	    	success : function(data){
    	    		var list=data.artList;
    	    		if(list.length<3)
    	    			len=0;
    	    		else
    	    			len=list.length;
    	    		if($(document).height()-5<=totalheight-5){
    	    			loadArticle(left,list,num);
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
//	}
});



function moveright(){
	var temp =20+$('#navUl').width()/2;
	$("#navUl").animate({right:temp+'px'});
	
}
function moveleft(){
	var temp = 0;
	$("#navUl").animate({right:temp + 'px'});
}



  
