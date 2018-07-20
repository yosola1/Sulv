/**
 * 
 */
function loadFans(place,list,num){
	var str="";
	for(var i=0;i<list.length && i<num;i++){
		str+="<div class='fans'><a style='font-size:xx-large;'id='"+list[i].userId+"' onclick='getuserId(this)'>"+list[i].userName+"</a></div>";
			
		}place.html(str);
}
function loadAttention(place,list,num){
	var str="";
	for(var i=0;i<list.length && i<num;i++){
		str+="<div class='fans'><a style='font-size:xx-large;'id='"+list[i].userId+"' onclick='getuserId(this)'>"+list[i].userName+"</a></div>";
			
		}
	place.html(str);
}
function loadAtten(place,list,num){
	var str="";
	for(var i=0;i<list.length && i<num;i++){
		if(list[i].state==1){
		str+="<div class='atten'><a id='"+list[i].userId+"' onclick='getuserId(this)'>"+list[i].userName+"</a>关注了你<a id='"+list[i].articleId+"' onclick='deleteAttent(this)' style='float: right;'>删除</a></div>";
		}
		}
	place.html(str);
}
function loadLike(place,list,num){
	var str="";
	for(var i=0;i<list.length && i<num;i++){
		if(list[i].state==1){
		str+="<div class='atten'><a >"+list[i].userName+"    给  << "+list[i].title+" >> </a>点赞了</a></div>";
		}
		}
	place.html(str);
}
function loadCollection(place,list,num){
	var str="";
	for(var i=0;i<list.length && i<num;i++){
		if(list[i].state==1){
		str+="<div class='atten'><a >"+list[i].userName+"    收藏了  << "+list[i].title+" >> </a></a></div>";
		}
		}
	place.html(str);
}
function loadComment(place,list,num){
	var str="";
	for(var i=0;i<list.length && i<num;i++){
		if(list[i].state==1){
		str+="<div class='atten'><a id='[list[i].userId,list[i].article]'>"+list[i].userName+"    评论了  << "+list[i].title+" >></a></div>";
		}
		}
	place.html(str);
}