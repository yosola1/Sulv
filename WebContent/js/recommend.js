function recommend(place,userId,start,num,recommendA,recommendB,A,B){
	
	if(A){
	$.ajax({
    	type:"post",
    	url:"recommendArticleA",
    	data:{
    		userId:userId,
    		start:start,
    		num:num
    	},
    	dataType:"json",
    	success : function(data){
    		var list=data.artList;
    		recommendA=list.length;
    		if(recommendA!=0){
    			loadArticle(place,list,num);
    		}
    		
    		else{
    			A=false;
    			recommend(place,userId,start,num,recommendA,recommendB,A,B);
    		}
    			
    		if(recommendA==num)
    			return true;
    		else {
				return false;
			}
    	},
    	error : function() {
            alert("加载失败1");
        }
    });}
	else if(B){
		$.ajax({
	    	type:"post",
	    	url:"recommendArticleB",
	    	data:{
	    		userId:userId,
	    		start:start,
	    		num:num
	    	},
	    	dataType:"json",
	    	success : function(data){
	    		
	    		var list=data.artList;
	    		recommendB=list.length;
	    		if(recommendB!=0)
	    		loadArticle(place,list,num);
	    		else{
	    			B=false;
	    			recommend(place,userId,start,num,recommendA,recommendB,A,B);
	    		}
	    			
	    		if(recommendB==num)
	    			return true;
	    		else {
					return false;
				}
	    	},
	    	error : function() {
	            alert("加载失败2");
	        }
	    });
	}
	else{
		$.ajax({
	    	type:"post",
	    	url:"selectArticleList",
	    	data:{
	    		userId:userId,
	    		start:start,
	    		num:num
	    	},
	    	dataType:"json",
	    	success : function(data){
	    		
	    		var map=data.map;
	    		var list=map.artList;
	    	
	    		loadArticle(place,list,num);
	    		return recommendB;
	    	},
	    	error : function() {
	            alert("加载失败3");
	        }
	    });
	}
}