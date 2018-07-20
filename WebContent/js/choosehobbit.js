/**
 * 
 */
	var userId=localStorage.getItem("userId");
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=10;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention10").css('display',"none");
		        		$("#unattention10").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=9;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention9").css('display',"none");
		        		$("#unattention9").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=8;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention8").css('display',"none");
		        		$("#unattention8").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=7;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention7").css('display',"none");
		        		$("#unattention7").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=6;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention6").css('display',"none");
		        		$("#unattention6").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=5;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention5").css('display',"none");
		        		$("#unattention5").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=4;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention4").css('display',"none");
		        		$("#unattention4").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=3;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention3").css('display',"none");
		        		$("#unattention3").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=2;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention2").css('display',"none");
		        		$("#unattention2").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})
	$(document).ready(function(){
		//function isInterest1(userId,typeId){
			var typeId=1;
		
			$.ajax({
		    	type:"post",
		    	url:"isInterest",
		    	data:{
		    		 typeId:typeId,
		    		userId:userId
		    	   
		    	},
		    	dataType:"json",
		    	success : function(data){
		    		var map=data.map;
		    		if(map.result){
		    			$("#attention1").css('display',"none");
		        		$("#unattention1").css('display',"inline");
		    		}
		    		
		    	},
		    	error : function() {
		    		
		        }
		    });
			//}
		
	})

	function add1(){
	
		 var typeId=1;  
	
		$.ajax({
	    	type:"post",
	    	url:"addInterest",
	    	data:{
	    		typeId:typeId,
	    		userId:userId
	    	},
	    	dataType:"json",
	    	success : function(data){
	    		$("#attention1").css('display',"none");
	    		$("#noattention1").css('display',"inline");
	    	},
	    	error : function() {
	            alert("关注失败");
	        }
	    });
}


function add2(){
		var typeId=2
			
		$.ajax({
	    	type:"post",
	    	url:"addInterest",
	    	data:{
	    		typeId:typeId,
	    		userId:userId
	    	},
	    	dataType:"json",
	    	success : function(data){
	    		$("#attention2").css('display',"none");
	    		$("#unattention2").css('display',"inline");
	    	},
	    	error : function() {
	            alert("关注失败");
	        }
	    });
}
function add3(){
	var typeId=3
		
	$.ajax({
    	type:"post",
    	url:"addInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention3").css('display',"none");
    		$("#unattention3").css('display',"inline");
    	},
    	error : function() {
            alert("关注失败");
        }
    });
}
function add4(){
	var typeId=4
	
	$.ajax({
    	type:"post",
    	url:"addInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention4").css('display',"none");
    		$("#unattention4").css('display',"inline");
    	},
    	error : function() {
            alert("关注失败");
        }
    });
}
function add5(){
	var typeId=5
	
	$.ajax({
    	type:"post",
    	url:"addInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention5").css('display',"none");
    		$("#unattention5").css('display',"inline");
    	},
    	error : function() {
            alert("关注失败");
        }
    });
}
function add6(){
	var typeId=6
	
	$.ajax({
    	type:"post",
    	url:"addInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention6").css('display',"none");
    		$("#unattention6").css('display',"inline");
    	},
    	error : function() {
            alert("关注失败");
        }
    });
}
function add7(){
	var typeId=7
	
	$.ajax({
    	type:"post",
    	url:"addInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention7").css('display',"none");
    		$("#unattention7").css('display',"inline");
    	},
    	error : function() {
            alert("关注失败");
        }
    });
}
function add8(){
	var typeId=8
	
	$.ajax({
    	type:"post",
    	url:"addInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention8").css('display',"none");
    		$("#unattention8").css('display',"inline");
    	},
    	error : function() {
            alert("关注失败");
        }
    });
}
function add9(){
	var typeId=9
	
	$.ajax({
    	type:"post",
    	url:"addInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention9").css('display',"none");
    		$("#unattention9").css('display',"inline");
    	},
    	error : function() {
            alert("关注失败");
        }
    });
}
function add10(){
	var typeId=10
	
	$.ajax({
    	type:"post",
    	url:"addInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention10").css('display',"none");
    		$("#unattention10").css('display',"inline");
    	},
    	error : function() {
            alert("关注失败");
        }
    });
}
function cancle1(){
	var typeId=1;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention1").css('display',"inline");
    		$("#unattention1").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}

function cancle2(){
	var typeId=2;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention2").css('display',"inline");
    		$("#unattention2").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}
function cancle3(){
	var typeId=3;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention3").css('display',"inline");
    		$("#unattention3").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}
function cancle4(){
	var typeId=4;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention4").css('display',"inline");
    		$("#unattention4").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}
function cancle5(){
	var typeId=5;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention5").css('display',"inline");
    		$("#unattention5").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}
function cancle6(){
	var typeId=6;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention6").css('display',"inline");
    		$("#unattention6").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}
function cancle7(){
	var typeId=7;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention7").css('display',"inline");
    		$("#unattention7").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}
function cancle8(){
	var typeId=8;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention8").css('display',"inline");
    		$("#unattention8").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}
function cancle9(){
	var typeId=9;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention9").css('display',"inline");
    		$("#unattention9").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}
function cancle10(){
	var typeId=10;
	$.ajax({
    	type:"post",
    	url:"cancleInterest",
    	data:{
    		typeId:typeId,
    		userId:userId
    	},
    	dataType:"json",
    	success : function(data){
    		$("#attention10").css('display',"inline");
    		$("#unattention10").css('display',"none");
    	},
    	error : function() {
            alert("取消关注失败");
        }
    });
}

