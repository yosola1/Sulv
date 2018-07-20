function loadArticle(place,list,num){
	for(var i=0;i<list.length && i<num;i++){
		//	left.append("<div class='article'></div>");
		var content=list[i].articleContent;
		var artstart=3;
		var artend;
		var imgstart=content.indexOf("<img");
		
		if(imgstart>0){
			var imgend=content.indexOf(">",imgstart);
			var img=content.slice(imgstart,imgend);
			if(imgstart<118){
				artend=content.indexOf("<",3);
				art=content.slice(3,artend);
			}
			else{
				artend=content.indexOf("<",3);
				if(artend<118){
					art=content.slice(3,artend);
				}
				else
					{
					art=content.slice(3,100)+"...";
					}
			}
			
			
			place.append("<hr><div class='article'><div><a>"+list[i].userName+"</a>&nbsp;&nbsp;<label>"+list[i].finalDate.slice(0,10)+"</label><br><a style='font-size:xx-large;'  id='"+list[i].articleId+"'onclick='getid(this)'>"+list[i].title+"</a><br><a>"+art+"</a><br><label style='color: #87CEFA;'>"+list[i].typeName+"</label>&nbsp;&nbsp;&nbsp;&nbsp;<label style='font-size: large;'><span class='glyphicon glyphicon-heart'></span>"+list[i].likeNum+"</label>&nbsp;&nbsp;<label style='font-size: large;'><span class='glyphicon glyphicon-star'></span>"+list[i].collectionNum+"</label></div>"+img+"</div>");
		}
		else{
			if(content.length<118){
				artend=content.indexOf("<",3);
				art=content.slice(3,artend);
			}
			else{
				artend=content.indexOf("<",3);
				if(artend<118){
					art=content.slice(3,artend);
				}
				else
					{
					art=content.slice(3,100)+"...";
					}
			}
			place.append("<hr><div class='article'><div style='width: 100%'><a>"+list[i].userName+"</a>&nbsp;&nbsp;<label>"+list[i].finalDate.slice(0,10)+"</label><br><a style='font-size:xx-large;' id='"+list[i].articleId+"'onclick='getid(this)'>"+list[i].title+"</a><br><a>"+art+"</a><br><label style='color: #87CEFA;'>"+list[i].typeName+"</label>&nbsp;&nbsp;&nbsp;&nbsp;<label style='font-size: large;'><span class='glyphicon glyphicon-heart'></span>"+list[i].likeNum+"</label>&nbsp;&nbsp;<label style='font-size: large;'><span class='glyphicon glyphicon-star '></span>"+list[i].collectionNum+"</label></div></div>");
		}
		}
}

function loadMyArticle(place,list,num){
	for(var i=0;i<list.length && i<num;i++){
			place.append("<div class='article'><a style='font-size:xx-large;' id='"+list[i].articleId+"' onclick='getid(this)'>"+list[i].title+"</a><a id='"+list[i].articleId+"' onclick='deleteMyArticle(this)' style='float: right;'>删除</a></br><a id='"+list[i].articleId+"' onclick='editor(this)' style='float: right;'>编辑</a></div>");
		}
}

function loadCollectionArticle(place,list,num){
	for(var i=0;i<list.length && i<num;i++){
			place.append("<div class='article'><a style='font-size:xx-large;' id='"+list[i].articleId+"' onclick='getid(this)'>"+list[i].title+"</a></div>");
		}
}
/*function loadArticle(place,list,num){
	for(var i=0;i<list.length && i<num;i++){
			place.append("<div class='article'><a style='font-size:xx-large;' id='"+list[i].articleId+"' onclick='getid(this)'>"+list[i].title+"</a></div>");
		}
}*/